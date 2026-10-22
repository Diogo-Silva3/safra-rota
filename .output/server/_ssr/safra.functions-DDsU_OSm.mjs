import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-BhqelEmK.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CMevzYJH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safra.functions-DDsU_OSm.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getAccount_createServerFn_handler = createServerRpc({
	id: "4b713a265db94418c9b23bd2f3dde4156b676bf3bddfa2d452f1f514248a84bb",
	name: "getAccount",
	filename: "src/lib/safra.functions.ts"
}, (opts) => getAccount.__executeServer(opts));
var getAccount = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getAccount_createServerFn_handler, async ({ context }) => {
	const [profile, wallet, transactions, network, orders, plans] = await Promise.all([
		context.supabase.from("profiles").select("*").eq("id", context.userId).single(),
		context.supabase.from("wallets").select("*").eq("user_id", context.userId).maybeSingle(),
		context.supabase.from("transactions").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }).limit(100),
		context.supabase.rpc("my_referral_tree"),
		context.supabase.from("orders").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }).limit(100),
		context.supabase.from("plans").select("*").order("price_cents")
	]);
	for (const response of [
		profile,
		wallet,
		transactions,
		network,
		orders,
		plans
	]) if (response.error) throw new Error("Não foi possível carregar sua conta. Tente novamente.");
	return {
		profile: profile.data,
		balance: wallet.data?.balance_cents || 0,
		transactions: transactions.data || [],
		network: network.data || [],
		orders: orders.data || [],
		plans: plans.data || []
	};
});
//#endregion
export { getAccount_createServerFn_handler };
