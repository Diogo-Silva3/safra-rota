-- 1) Network and dashboard: expand from 3 to 8 levels
CREATE OR REPLACE FUNCTION public.get_network()
RETURNS TABLE(id uuid, full_name text, referral_code text, referrer_id uuid, level int, created_at timestamptz, active_plans bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  WITH RECURSIVE t AS (
    SELECT p.id, 1 AS lvl FROM profiles p WHERE p.referrer_id = auth.uid()
    UNION ALL
    SELECT p.id, t.lvl + 1 FROM profiles p JOIN t ON p.referrer_id = t.id WHERE t.lvl < 8
  )
  SELECT p.id, p.full_name, p.referral_code, p.referrer_id, t.lvl, p.created_at,
    (SELECT count(*) FROM purchases pu WHERE pu.user_id = p.id AND pu.status='paid')
  FROM t JOIN profiles p ON p.id = t.id ORDER BY t.lvl, p.created_at;
$$;

CREATE OR REPLACE FUNCTION public.get_dashboard()
RETURNS json LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT json_build_object(
    'balance', coalesce((SELECT sum(CASE WHEN type='withdrawal' THEN -amount ELSE amount END) FROM transactions WHERE user_id = auth.uid()),0),
    'total_yield', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid() AND type='yield'),0),
    'total_commission', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid() AND type='commission'),0),
    'total_withdrawn', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid() AND type='withdrawal'),0),
    'active_plans', (SELECT count(*) FROM purchases WHERE user_id = auth.uid() AND status='paid'),
    'network_size', (WITH RECURSIVE t AS (SELECT id,1 lvl FROM profiles WHERE referrer_id = auth.uid()
        UNION ALL SELECT p.id, t.lvl+1 FROM profiles p JOIN t ON p.referrer_id = t.id WHERE t.lvl < 8) SELECT count(*) FROM t)
  );
$$;

-- 2) Commissions: 8 levels (12%, 5%, 3%, 1%, 1%, 1%, 1%, 0.5%)
CREATE OR REPLACE FUNCTION public.simulate_pix_payment(p_purchase_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_p purchases%ROWTYPE;
  v_rates numeric[] := ARRAY[0.12, 0.05, 0.03, 0.01, 0.01, 0.01, 0.01, 0.005];
  v_cur uuid; v_lvl int := 1; v_buyer text;
BEGIN
  SELECT * INTO v_p FROM purchases WHERE id = p_purchase_id FOR UPDATE;
  IF v_p.id IS NULL OR v_p.user_id <> auth.uid() THEN RAISE EXCEPTION 'Compra não encontrada'; END IF;
  IF v_p.status = 'paid' THEN RAISE EXCEPTION 'Pagamento já confirmado'; END IF;
  UPDATE purchases SET status='paid', paid_at=now(), last_yield_date=current_date WHERE id = v_p.id;
  SELECT full_name INTO v_buyer FROM profiles WHERE id = v_p.user_id;
  SELECT referrer_id INTO v_cur FROM profiles WHERE id = v_p.user_id;
  WHILE v_cur IS NOT NULL AND v_lvl <= 8 LOOP
    INSERT INTO transactions (user_id, type, amount, level, source_user_id, purchase_id, description)
    VALUES (v_cur, 'commission', round(v_p.amount * v_rates[v_lvl], 2), v_lvl, v_p.user_id, v_p.id,
      'Comissão nível ' || v_lvl || ' — ' || coalesce(nullif(v_buyer,''),'indicado'));
    SELECT referrer_id INTO v_cur FROM profiles WHERE id = v_cur;
    v_lvl := v_lvl + 1;
  END LOOP;
END $$;

-- 3) Yields accrue on business days only (Mon-Fri)
CREATE OR REPLACE FUNCTION public.collect_yields()
RETURNS numeric LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE r record; v_days int; v_end date; v_total numeric := 0; v_amt numeric;
BEGIN
  FOR r IN SELECT pu.*, pl.daily_yield_pct, pl.duration_days, pl.name FROM purchases pu JOIN plans pl ON pl.id = pu.plan_id
           WHERE pu.user_id = auth.uid() AND pu.status='paid' FOR UPDATE OF pu LOOP
    v_end := LEAST(current_date, (r.paid_at::date + r.duration_days));
    SELECT count(*) INTO v_days FROM generate_series(r.last_yield_date + 1, v_end, interval '1 day') d
      WHERE extract(isodow FROM d) < 6;
    IF v_days > 0 THEN
      v_amt := round(r.amount * r.daily_yield_pct / 100 * v_days, 2);
      INSERT INTO transactions (user_id, type, amount, purchase_id, description)
      VALUES (r.user_id, 'yield', v_amt, r.id, 'Rendimento ' || r.name || ' (' || v_days || ' dia(s) útil(eis))');
      v_total := v_total + v_amt;
    END IF;
    IF v_end > r.last_yield_date THEN
      UPDATE purchases SET last_yield_date = v_end WHERE id = r.id;
    END IF;
  END LOOP;
  RETURN v_total;
END $$;

-- 4) Withdrawals: allow 'withdrawal' transaction type
ALTER TABLE public.transactions DROP CONSTRAINT transactions_type_check;
ALTER TABLE public.transactions ADD CONSTRAINT transactions_type_check CHECK (type IN ('commission','yield','withdrawal'));

CREATE TABLE public.withdrawals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount numeric(12,2) NOT NULL CHECK (amount > 0),
  pix_key text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','rejected')),
  created_at timestamptz NOT NULL DEFAULT now(),
  processed_at timestamptz
);
GRANT SELECT ON public.withdrawals TO authenticated;
GRANT ALL ON public.withdrawals TO service_role;
ALTER TABLE public.withdrawals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own withdrawals" ON public.withdrawals FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Atomic withdrawal request: validates balance from the ledger, debits it, records the request
CREATE OR REPLACE FUNCTION public.request_withdrawal(p_amount numeric, p_pix_key text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_balance numeric; v_id uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  IF p_amount IS NULL OR p_amount < 10 THEN RAISE EXCEPTION 'Valor mínimo de saque: R$ 10,00'; END IF;
  IF p_pix_key IS NULL OR length(trim(p_pix_key)) < 5 THEN RAISE EXCEPTION 'Informe uma chave Pix válida'; END IF;
  SELECT coalesce(sum(CASE WHEN type='withdrawal' THEN -amount ELSE amount END),0) INTO v_balance
    FROM transactions WHERE user_id = auth.uid();
  IF p_amount > v_balance THEN RAISE EXCEPTION 'Saldo insuficiente'; END IF;
  INSERT INTO withdrawals (user_id, amount, pix_key) VALUES (auth.uid(), p_amount, trim(p_pix_key)) RETURNING id INTO v_id;
  INSERT INTO transactions (user_id, type, amount, description)
  VALUES (auth.uid(), 'withdrawal', p_amount, 'Saque via Pix — ' || trim(p_pix_key));
  RETURN v_id;
END $$;
GRANT EXECUTE ON FUNCTION public.request_withdrawal(numeric, text) TO authenticated;