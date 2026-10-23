
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL DEFAULT '',
  referral_code text NOT NULL UNIQUE,
  referrer_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile read" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

CREATE TABLE public.plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  price numeric(12,2) NOT NULL CHECK (price > 0),
  daily_yield_pct numeric(5,2) NOT NULL CHECK (daily_yield_pct >= 0),
  duration_days int NOT NULL CHECK (duration_days > 0),
  sort int NOT NULL DEFAULT 0
);
GRANT SELECT ON public.plans TO anon, authenticated;
GRANT ALL ON public.plans TO service_role;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "plans public" ON public.plans FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id uuid NOT NULL REFERENCES public.plans(id),
  amount numeric(12,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid')),
  pix_code text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  paid_at timestamptz,
  last_yield_date date
);
GRANT SELECT ON public.purchases TO authenticated;
GRANT ALL ON public.purchases TO service_role;
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own purchases" ON public.purchases FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('commission','yield')),
  amount numeric(12,2) NOT NULL CHECK (amount > 0),
  level int,
  source_user_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  purchase_id uuid REFERENCES public.purchases(id) ON DELETE SET NULL,
  description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (purchase_id, user_id, type, level)
);
GRANT SELECT ON public.transactions TO authenticated;
GRANT ALL ON public.transactions TO service_role;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own tx" ON public.transactions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE INDEX ON public.transactions(user_id, created_at);
CREATE INDEX ON public.profiles(referrer_id);

-- yields are per-day, so drop the unique constraint for yield rows via partial index approach
ALTER TABLE public.transactions DROP CONSTRAINT transactions_purchase_id_user_id_type_level_key;
CREATE UNIQUE INDEX tx_commission_once ON public.transactions(purchase_id, user_id, level) WHERE type = 'commission';

INSERT INTO public.plans (name, description, price, daily_yield_pct, duration_days, sort) VALUES
('Bronze', 'Ideal para começar', 100, 1.00, 30, 1),
('Prata', 'Mais rendimento diário', 500, 1.20, 45, 2),
('Ouro', 'Para quem quer crescer', 1500, 1.50, 60, 3),
('Diamante', 'Máximo desempenho', 5000, 2.00, 90, 4);

-- Signup trigger: requires valid referrer (except the very first user)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_code text := upper(trim(coalesce(NEW.raw_user_meta_data->>'referrer_code','')));
  v_ref uuid;
  v_new_code text;
BEGIN
  IF v_code <> '' THEN
    SELECT id INTO v_ref FROM public.profiles WHERE referral_code = v_code;
  END IF;
  IF v_ref IS NULL AND EXISTS (SELECT 1 FROM public.profiles) THEN
    RAISE EXCEPTION 'Código de indicador inválido';
  END IF;
  LOOP
    v_new_code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.profiles WHERE referral_code = v_new_code);
  END LOOP;
  INSERT INTO public.profiles (id, full_name, referral_code, referrer_id)
  VALUES (NEW.id, coalesce(NEW.raw_user_meta_data->>'full_name',''), v_new_code, v_ref);
  RETURN NEW;
END $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.check_referral_code(p_code text)
RETURNS text LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT CASE WHEN NOT EXISTS (SELECT 1 FROM profiles) THEN '__first__'
    ELSE (SELECT split_part(full_name,' ',1) FROM profiles WHERE referral_code = upper(trim(p_code))) END;
$$;
GRANT EXECUTE ON FUNCTION public.check_referral_code(text) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.get_dashboard()
RETURNS json LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT json_build_object(
    'balance', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid()),0),
    'total_yield', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid() AND type='yield'),0),
    'total_commission', coalesce((SELECT sum(amount) FROM transactions WHERE user_id = auth.uid() AND type='commission'),0),
    'active_plans', (SELECT count(*) FROM purchases WHERE user_id = auth.uid() AND status='paid'),
    'network_size', (WITH RECURSIVE t AS (SELECT id,1 lvl FROM profiles WHERE referrer_id = auth.uid()
        UNION ALL SELECT p.id, t.lvl+1 FROM profiles p JOIN t ON p.referrer_id = t.id WHERE t.lvl < 3) SELECT count(*) FROM t)
  );
$$;
GRANT EXECUTE ON FUNCTION public.get_dashboard() TO authenticated;

CREATE OR REPLACE FUNCTION public.get_network()
RETURNS TABLE(id uuid, full_name text, referral_code text, referrer_id uuid, level int, created_at timestamptz, active_plans bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  WITH RECURSIVE t AS (
    SELECT p.id, 1 AS lvl FROM profiles p WHERE p.referrer_id = auth.uid()
    UNION ALL
    SELECT p.id, t.lvl + 1 FROM profiles p JOIN t ON p.referrer_id = t.id WHERE t.lvl < 3
  )
  SELECT p.id, p.full_name, p.referral_code, p.referrer_id, t.lvl, p.created_at,
    (SELECT count(*) FROM purchases pu WHERE pu.user_id = p.id AND pu.status='paid')
  FROM t JOIN profiles p ON p.id = t.id ORDER BY t.lvl, p.created_at;
$$;
GRANT EXECUTE ON FUNCTION public.get_network() TO authenticated;

CREATE OR REPLACE FUNCTION public.create_purchase(p_plan_id uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_price numeric; v_id uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  SELECT price INTO v_price FROM plans WHERE id = p_plan_id;
  IF v_price IS NULL THEN RAISE EXCEPTION 'Plano inválido'; END IF;
  INSERT INTO purchases (user_id, plan_id, amount, pix_code)
  VALUES (auth.uid(), p_plan_id, v_price,
    '00020126580014BR.GOV.BCB.PIX0136' || gen_random_uuid()::text || '5204000053039865406' || to_char(v_price,'FM999990.00') || '5802BR6304' || upper(substr(md5(random()::text),1,4)))
  RETURNING id INTO v_id;
  RETURN v_id;
END $$;
GRANT EXECUTE ON FUNCTION public.create_purchase(uuid) TO authenticated;

-- Atomic payment: marks paid and pays 3-level commissions (10%, 5%, 2%)
CREATE OR REPLACE FUNCTION public.simulate_pix_payment(p_purchase_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_p purchases%ROWTYPE;
  v_rates numeric[] := ARRAY[0.10, 0.05, 0.02];
  v_cur uuid; v_lvl int := 1; v_buyer text;
BEGIN
  SELECT * INTO v_p FROM purchases WHERE id = p_purchase_id FOR UPDATE;
  IF v_p.id IS NULL OR v_p.user_id <> auth.uid() THEN RAISE EXCEPTION 'Compra não encontrada'; END IF;
  IF v_p.status = 'paid' THEN RAISE EXCEPTION 'Pagamento já confirmado'; END IF;
  UPDATE purchases SET status='paid', paid_at=now(), last_yield_date=current_date WHERE id = v_p.id;
  SELECT full_name INTO v_buyer FROM profiles WHERE id = v_p.user_id;
  SELECT referrer_id INTO v_cur FROM profiles WHERE id = v_p.user_id;
  WHILE v_cur IS NOT NULL AND v_lvl <= 3 LOOP
    INSERT INTO transactions (user_id, type, amount, level, source_user_id, purchase_id, description)
    VALUES (v_cur, 'commission', round(v_p.amount * v_rates[v_lvl], 2), v_lvl, v_p.user_id, v_p.id,
      'Comissão nível ' || v_lvl || ' — ' || coalesce(nullif(v_buyer,''),'indicado'));
    SELECT referrer_id INTO v_cur FROM profiles WHERE id = v_cur;
    v_lvl := v_lvl + 1;
  END LOOP;
END $$;
GRANT EXECUTE ON FUNCTION public.simulate_pix_payment(uuid) TO authenticated;

-- Collect daily yields for elapsed days (capped by plan duration)
CREATE OR REPLACE FUNCTION public.collect_yields()
RETURNS numeric LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE r record; v_days int; v_end date; v_total numeric := 0; v_amt numeric;
BEGIN
  FOR r IN SELECT pu.*, pl.daily_yield_pct, pl.duration_days, pl.name FROM purchases pu JOIN plans pl ON pl.id = pu.plan_id
           WHERE pu.user_id = auth.uid() AND pu.status='paid' FOR UPDATE OF pu LOOP
    v_end := LEAST(current_date, (r.paid_at::date + r.duration_days));
    v_days := v_end - r.last_yield_date;
    IF v_days > 0 THEN
      v_amt := round(r.amount * r.daily_yield_pct / 100 * v_days, 2);
      INSERT INTO transactions (user_id, type, amount, purchase_id, description)
      VALUES (r.user_id, 'yield', v_amt, r.id, 'Rendimento ' || r.name || ' (' || v_days || ' dia(s))');
      UPDATE purchases SET last_yield_date = v_end WHERE id = r.id;
      v_total := v_total + v_amt;
    END IF;
  END LOOP;
  RETURN v_total;
END $$;
GRANT EXECUTE ON FUNCTION public.collect_yields() TO authenticated;
