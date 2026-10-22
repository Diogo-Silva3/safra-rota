//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BEnqVOdq.js
var manifest = { "4b713a265db94418c9b23bd2f3dde4156b676bf3bddfa2d452f1f514248a84bb": {
	functionName: "getAccount_createServerFn_handler",
	importer: () => import("./_ssr/safra.functions-DDsU_OSm.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
