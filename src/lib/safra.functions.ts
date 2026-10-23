import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { queryOptions } from '@tanstack/react-query';
export const getAccount = createServerFn({method: 'GET'}).middleware([requireSupabaseAuth]).handler(async ({context}) => {
  const [profile, wallet, transactions, network, orders, plans] = await Promise.all([
    context.supabase.from('profiles').select('*').eq('id',context.userId).single(),
    context.supabase.from('wallets').select('*').eq('user_id',context.userId).maybeSingle(),
    context.supabase.from('transactions').select('*').eq('user_id',context.userId).order('created_at',{ascending:false}).limit(100),
    context.supabase.rpc('my_referral_tree'),
    context.supabase.from('orders').select('*').eq('user_id',context.userId).order('created_at',{ascending:false}).limit(100),
    context.supabase.from('plans').select('*').order('price_cents'),
  ]);
  for (const response of [profile,wallet,transactions,network,orders,plans]) { if (response.error) throw new Error('Não foi possível carregar sua conta. Tente novamente.'); }
  return {profile: profile.data, balance: wallet.data?.balance_cents || 0, transactions: transactions.data || [], network: network.data || [], orders: orders.data || [], plans: plans.data || []};
});
export const accountOptions = queryOptions({queryKey:['safra-account'],queryFn:()=>getAccount()});
export type Account = Awaited<ReturnType<typeof getAccount>>;
