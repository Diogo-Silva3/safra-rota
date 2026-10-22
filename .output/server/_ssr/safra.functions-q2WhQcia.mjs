import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-BhqelEmK.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BEnqVOdq.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CMevzYJH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safra.functions-q2WhQcia.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getAccount = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("4b713a265db94418c9b23bd2f3dde4156b676bf3bddfa2d452f1f514248a84bb"));
var accountOptions = queryOptions({
	queryKey: ["safra-account"],
	queryFn: () => getAccount()
});
//#endregion
export { accountOptions as t };
