-- Teste de ponta a ponta das regras de negócio (roda com service role, limpa tudo no final):
-- 1) cadastro com indicador (trigger handle_new_user via auth.users)
-- 2) compra de plano (create_purchase)
-- 3) pagamento simulado (simulate_pix_payment)
-- 4) comissões de 12% / 5% / 3% / 1% / 1% / 1% / 1% / 0,5% nos 8 níveis + proteção contra pagamento duplo
-- 5) saque via Pix (request_withdrawal) debitando o saldo
--
-- Executar: supabase--run_sql com o conteúdo deste arquivo.

DO $$
DECLARE
  u_root uuid := gen_random_uuid();
  u_l1   uuid := gen_random_uuid();
  u_l2   uuid := gen_random_uuid();
  u_l3   uuid := gen_random_uuid();
  u_l4   uuid := gen_random_uuid();
  u_l5   uuid := gen_random_uuid();
  u_l6   uuid := gen_random_uuid();
  u_l7   uuid := gen_random_uuid();
  u_buyer uuid := gen_random_uuid();
  v_users uuid[] := ARRAY[u_root, u_l1, u_l2, u_l3, u_l4, u_l5, u_l6, u_l7];
  v_codes text[] := ARRAY[]::text[];
  v_rates numeric[] := ARRAY[0.12, 0.05, 0.03, 0.01, 0.01, 0.01, 0.01, 0.005];
  v_code text; v_prev uuid; i int;
  v_plan uuid; v_price numeric;
  v_purchase uuid;
  v_c numeric; v_expected numeric;
  v_balance numeric;
  v_wid uuid;
  v_double_pay boolean := false;
  v_overdraft boolean := false;
BEGIN
  -- ---------- 1) Cadastro com indicador (cadeia de 9 usuários) ----------
  INSERT INTO auth.users (id, aud, role, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at)
  VALUES (u_root, 'authenticated', 'authenticated', 'test-root@example.com', '', now(),
          jsonb_build_object('full_name','Root Teste','referrer_code',
            coalesce((SELECT referral_code FROM public.profiles ORDER BY created_at LIMIT 1), '')), now(), now());
  SELECT referral_code INTO v_code FROM public.profiles WHERE id = u_root;
  ASSERT v_code IS NOT NULL, 'root sem referral_code';
  v_codes := v_codes || v_code;
  v_prev := u_root;

  -- cadeia: L1..L7 e comprador, cada um indicado pelo anterior
  FOR i IN 1..8 LOOP
    DECLARE
      v_id uuid := CASE i WHEN 1 THEN u_l1 WHEN 2 THEN u_l2 WHEN 3 THEN u_l3 WHEN 4 THEN u_l4
                          WHEN 5 THEN u_l5 WHEN 6 THEN u_l6 WHEN 7 THEN u_l7 ELSE u_buyer END;
      v_email text := 'test-cadeia-' || i || '@example.com';
    BEGIN
      INSERT INTO auth.users (id, aud, role, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at)
      VALUES (v_id, 'authenticated', 'authenticated', v_email, '', now(),
              jsonb_build_object('full_name','Nivel ' || i, 'referrer_code', v_codes[i]), now(), now());
      ASSERT (SELECT referrer_id FROM public.profiles WHERE id = v_id) = v_prev,
        format('usuário %s não aponta para o indicador correto', i);
      SELECT referral_code INTO v_code FROM public.profiles WHERE id = v_id;
      v_codes := v_codes || v_code;
      v_prev := v_id;
    END;
  END LOOP;

  -- Cadastro com código inválido deve falhar (já existem usuários na plataforma).
  BEGIN
    INSERT INTO auth.users (id, aud, role, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at)
    VALUES (gen_random_uuid(), 'authenticated', 'authenticated', 'test-badref@example.com', '', now(),
            '{"full_name":"Sem Indicador","referrer_code":"CODIGOINEXISTENTE"}', now(), now());
    ASSERT false, 'cadastro com código inválido deveria falhar';
  EXCEPTION WHEN raise_exception THEN NULL;
  END;

  -- ---------- 2) Compra de plano ----------
  SELECT id, price INTO v_plan, v_price FROM public.plans WHERE name = 'Soja';
  -- set_config sem "is_local": a função usa auth.uid(), que lê request.jwt.claims da sessão
  PERFORM set_config('request.jwt.claims', json_build_object('sub', u_buyer)::text, false);
  v_purchase := public.create_purchase(v_plan);
  ASSERT (SELECT status FROM public.purchases WHERE id = v_purchase) = 'pending', 'compra deveria nascer pendente';
  ASSERT (SELECT amount FROM public.purchases WHERE id = v_purchase) = v_price, 'valor da compra difere do plano';
  ASSERT length((SELECT pix_code FROM public.purchases WHERE id = v_purchase)) > 20, 'pix_code não gerado';

  -- ---------- 3) Pagamento simulado ----------
  PERFORM public.simulate_pix_payment(v_purchase);
  ASSERT (SELECT status FROM public.purchases WHERE id = v_purchase) = 'paid', 'compra não foi marcada como paga';

  -- Pagamento duplo deve ser rejeitado.
  BEGIN
    PERFORM public.simulate_pix_payment(v_purchase);
    ASSERT false, 'pagamento duplo deveria falhar';
  EXCEPTION WHEN raise_exception THEN v_double_pay := true;
  END;
  ASSERT v_double_pay, 'pagamento duplo não gerou erro';

  -- ---------- 4) Comissões 12% / 5% / 3% / 1% / 1% / 1% / 1% / 0,5% ----------
  FOR i IN 1..8 LOOP
    SELECT amount INTO v_c FROM public.transactions
      WHERE purchase_id = v_purchase AND user_id = v_users[9 - i] AND type = 'commission';
    v_expected := round(v_price * v_rates[i], 2);
    ASSERT v_c = v_expected, format('comissão nível %s errada: %s (esperado %s)', i, v_c, v_expected);
  END LOOP;
  ASSERT (SELECT count(*) FROM public.transactions WHERE purchase_id = v_purchase AND type = 'commission') = 8,
    'deveria haver exatamente 8 comissões';

  -- Saldo do L7 (indicador direto do comprador, nível 1 = 12%) = soma do ledger (get_dashboard).
  PERFORM set_config('request.jwt.claims', json_build_object('sub', u_l7)::text, false);
  v_balance := (public.get_dashboard()->>'balance')::numeric;
  ASSERT v_balance = round(v_price * 0.12, 2), format('saldo do dashboard (%s) difere da comissão (%s)', v_balance, round(v_price*0.12,2));

  -- ---------- 5) Saque via Pix ----------
  v_wid := public.request_withdrawal(10.00, 'teste@pix.com');
  ASSERT v_wid IS NOT NULL, 'saque não retornou id';
  ASSERT (public.get_dashboard()->>'balance')::numeric = round(v_price * 0.12, 2) - 10.00,
    'saldo não foi debitado após o saque';

  -- Saque maior que o saldo deve falhar.
  BEGIN
    PERFORM public.request_withdrawal(999999.00, 'teste@pix.com');
    ASSERT false, 'saque acima do saldo deveria falhar';
  EXCEPTION WHEN raise_exception THEN v_overdraft := true;
  END;
  ASSERT v_overdraft, 'saque acima do saldo não gerou erro';

  -- ---------- Limpeza ----------
  DELETE FROM public.transactions WHERE user_id = ANY (v_users || u_buyer);
  DELETE FROM public.withdrawals WHERE user_id = ANY (v_users || u_buyer);
  DELETE FROM public.purchases WHERE id = v_purchase;
  DELETE FROM auth.users WHERE email LIKE 'test-%@example.com'; -- cascata remove profiles

  RAISE NOTICE 'OK: cadastro com indicador, compra, pagamento simulado, comissões de 8 níveis e saque validados';
END $$;
