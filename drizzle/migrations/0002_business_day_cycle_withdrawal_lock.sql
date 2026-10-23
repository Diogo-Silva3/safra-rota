-- 1) Plan cycle = N business days (Mon-Fri) after payment, matching "30 dias úteis" in the UI.
--    Previously the cycle ended at paid_at + duration_days calendar days (~22 business days).
CREATE OR REPLACE FUNCTION public.collect_yields()
RETURNS numeric LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE r record; v_days int; v_last date; v_end date; v_total numeric := 0; v_amt numeric;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  FOR r IN SELECT pu.*, pl.daily_yield_pct, pl.duration_days, pl.name FROM purchases pu JOIN plans pl ON pl.id = pu.plan_id
           WHERE pu.user_id = auth.uid() AND pu.status='paid' FOR UPDATE OF pu LOOP
    -- Date of the Nth business day after payment (last day of the cycle)
    SELECT max(d)::date INTO v_last FROM (
      SELECT d FROM generate_series(r.paid_at::date + 1, r.paid_at::date + r.duration_days * 2 + 14, interval '1 day') d
      WHERE extract(isodow FROM d) < 6 ORDER BY d LIMIT r.duration_days
    ) s;
    v_end := LEAST(current_date, v_last);
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

-- 2) Serialize withdrawals per user so two concurrent requests can't both pass the balance check.
CREATE OR REPLACE FUNCTION public.request_withdrawal(p_amount numeric, p_pix_key text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_balance numeric; v_id uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  IF p_amount IS NULL OR p_amount < 10 THEN RAISE EXCEPTION 'Valor mínimo de saque: R$ 10,00'; END IF;
  IF p_pix_key IS NULL OR length(trim(p_pix_key)) < 5 THEN RAISE EXCEPTION 'Informe uma chave Pix válida'; END IF;
  PERFORM pg_advisory_xact_lock(hashtext('withdrawal:' || auth.uid()::text));
  SELECT coalesce(sum(CASE WHEN type='withdrawal' THEN -amount ELSE amount END),0) INTO v_balance
    FROM transactions WHERE user_id = auth.uid();
  IF p_amount > v_balance THEN RAISE EXCEPTION 'Saldo insuficiente'; END IF;
  INSERT INTO withdrawals (user_id, amount, pix_key) VALUES (auth.uid(), p_amount, trim(p_pix_key)) RETURNING id INTO v_id;
  INSERT INTO transactions (user_id, type, amount, description)
  VALUES (auth.uid(), 'withdrawal', p_amount, 'Saque via Pix — ' || trim(p_pix_key));
  RETURN v_id;
END $$;
GRANT EXECUTE ON FUNCTION public.request_withdrawal(numeric, text) TO authenticated;
