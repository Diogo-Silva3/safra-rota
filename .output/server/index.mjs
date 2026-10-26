globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/auth-CkKhjzyX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1422-vE+9LrW3IJP/wNipWjAGYCVfqJs\"",
		"mtime": "2026-10-26T15:04:19.905Z",
		"size": 5154,
		"path": "../public/assets/auth-CkKhjzyX.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-23T14:31:35.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/copy-Dsda7FRL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-p2nFENSFk0IrSYXYsZ3CaC+W8m0\"",
		"mtime": "2026-10-26T15:04:19.907Z",
		"size": 236,
		"path": "../public/assets/copy-Dsda7FRL.js"
	},
	"/assets/createLucideIcon-DdftVQNB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-RPbDNRtnC/hMvVjnsHXRU5+1xxU\"",
		"mtime": "2026-10-26T15:04:19.907Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-DdftVQNB.js"
	},
	"/assets/crops-9wHjBgqK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b-5USRrb7fduTlmIETRrCy6bPZdDE\"",
		"mtime": "2026-10-26T15:04:19.907Z",
		"size": 283,
		"path": "../public/assets/crops-9wHjBgqK.js"
	},
	"/assets/clock-CxRnxr17.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-x9cL72w6dngydI0ZMl5fP2sq+LM\"",
		"mtime": "2026-10-26T15:04:19.906Z",
		"size": 169,
		"path": "../public/assets/clock-CxRnxr17.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"212-XlqSTzvxd5j8RZmxgfganPSA+1U\"",
		"mtime": "2026-10-23T18:17:10.634Z",
		"size": 530,
		"path": "../public/favicon.svg"
	},
	"/assets/dist-Bw-eJsnz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b9-tcCbCY2OZqsE46UO51wwVktk+Dg\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 697,
		"path": "../public/assets/dist-Bw-eJsnz.js"
	},
	"/assets/format-AK2fYE4a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84eb-/ONFp/cG55RVq8rgEQurqPwKzEU\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 34027,
		"path": "../public/assets/format-AK2fYE4a.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-23T14:31:35.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/label-CdrcuyDq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499-EqSX8H6uYh8NUa4QKV07aeGPMmM\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 1177,
		"path": "../public/assets/label-CdrcuyDq.js"
	},
	"/assets/layout-dashboard-CSucUK7c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-YXh6YvHH4J3NnJwINS0Bz9Svgz0\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 351,
		"path": "../public/assets/layout-dashboard-CSucUK7c.js"
	},
	"/assets/client-CI2fOoYi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37d1d-obD+Wu6pIeLz9yvdk7JfQlALhAs\"",
		"mtime": "2026-10-26T15:04:19.906Z",
		"size": 228637,
		"path": "../public/assets/client-CI2fOoYi.js"
	},
	"/assets/Match-CU76V3su.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1172-d3T9VVINtcH543drThtuKmckA8M\"",
		"mtime": "2026-10-26T15:04:19.905Z",
		"size": 4466,
		"path": "../public/assets/Match-CU76V3su.js"
	},
	"/assets/link--Xp1Kn_V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c20-NLR1J/YFvJ8XluzQmezB42/gOgY\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 11296,
		"path": "../public/assets/link--Xp1Kn_V.js"
	},
	"/assets/matchContext-Bw6LRnRo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-6X7SVPSyW4CzxE6lIO5YViXsrC8\"",
		"mtime": "2026-10-26T15:04:19.908Z",
		"size": 157,
		"path": "../public/assets/matchContext-Bw6LRnRo.js"
	},
	"/assets/pix._id-DX0qcqa0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"496e-ucKPeCZL+TFbbH+E8/uQHuwYdtw\"",
		"mtime": "2026-10-26T15:04:19.909Z",
		"size": 18798,
		"path": "../public/assets/pix._id-DX0qcqa0.js"
	},
	"/assets/planos-DvSsB84t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1049-Waht5AnjlNfhPBbI6Uncrepd6/I\"",
		"mtime": "2026-10-26T15:04:19.909Z",
		"size": 4169,
		"path": "../public/assets/planos-DvSsB84t.js"
	},
	"/assets/preload-helper-CHzuVfLv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1602-ZTkXLee4V9dPf2AuEB73Y9WKzBg\"",
		"mtime": "2026-10-26T15:04:19.914Z",
		"size": 5634,
		"path": "../public/assets/preload-helper-CHzuVfLv.js"
	},
	"/assets/cafe-DSpe4oC9.jpg": {
		"type": "image/jpeg",
		"etag": "\"20967-BANv+8Wex8XkN5gDRVpccfuRZMI\"",
		"mtime": "2026-10-26T15:04:19.938Z",
		"size": 133479,
		"path": "../public/assets/cafe-DSpe4oC9.jpg"
	},
	"/assets/dashboard-D6B-y7Vc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ecaf-heuU3qWslohVpMlGeEdQR6P1z0I\"",
		"mtime": "2026-10-26T15:04:19.907Z",
		"size": 388271,
		"path": "../public/assets/dashboard-D6B-y7Vc.js"
	},
	"/assets/index-BMwSGzbh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57ffd-zYPGekZ9Lbrq4TXvSc5fTK00oPU\"",
		"mtime": "2026-10-26T15:04:19.905Z",
		"size": 360445,
		"path": "../public/assets/index-BMwSGzbh.js"
	},
	"/assets/horta-BTcPFznd.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d0c4-6WETnAKEBxBKRwlTowIBvP2qARY\"",
		"mtime": "2026-10-26T15:04:19.938Z",
		"size": 250052,
		"path": "../public/assets/horta-BTcPFznd.jpg"
	},
	"/assets/laranja-DzJpj3Uv.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f73-WEG3ZTHwp0P9n+Xo3743hEy/CrI\"",
		"mtime": "2026-10-26T15:04:19.939Z",
		"size": 171891,
		"path": "../public/assets/laranja-DzJpj3Uv.jpg"
	},
	"/assets/milho-D50Q2BkX.jpg": {
		"type": "image/jpeg",
		"etag": "\"27b77-44v2vI11w3od9tuwb85gFT4e13g\"",
		"mtime": "2026-10-26T15:04:19.939Z",
		"size": 162679,
		"path": "../public/assets/milho-D50Q2BkX.jpg"
	},
	"/assets/qr-code-DYNcRjOF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28a-tGP2Wb/0pokH5fRkwSRUledUSqg\"",
		"mtime": "2026-10-26T15:04:19.915Z",
		"size": 650,
		"path": "../public/assets/qr-code-DYNcRjOF.js"
	},
	"/assets/react-dom-pU5px_Ny.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f12-ooaVyOx77tbDMEpaM91dY+kRT4Q\"",
		"mtime": "2026-10-26T15:04:19.923Z",
		"size": 3858,
		"path": "../public/assets/react-dom-pU5px_Ny.js"
	},
	"/assets/rede-1i-Gs9rL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1f-8QfMzOU0yQ/+2++13BNUYXA6H1s\"",
		"mtime": "2026-10-26T15:04:19.924Z",
		"size": 2591,
		"path": "../public/assets/rede-1i-Gs9rL.js"
	},
	"/assets/query-Rg0DWNsm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"390c-+QSfb1V/rU356Ef0DIBUvB0M36U\"",
		"mtime": "2026-10-26T15:04:19.923Z",
		"size": 14604,
		"path": "../public/assets/query-Rg0DWNsm.js"
	},
	"/assets/route-CCnEXZL8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd1-2GcsvX2yO7DqG7dR1A8Ub6ICGRM\"",
		"mtime": "2026-10-26T15:04:19.924Z",
		"size": 3025,
		"path": "../public/assets/route-CCnEXZL8.js"
	},
	"/assets/routes-BW0rE-Ti.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a79-JselTP004i0w8nC40mWO+orxxF0\"",
		"mtime": "2026-10-26T15:04:19.924Z",
		"size": 39545,
		"path": "../public/assets/routes-BW0rE-Ti.js"
	},
	"/assets/saque-CxV3oF1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e29-3YU3d8S+LYwuO9xE4TVQlBaywVk\"",
		"mtime": "2026-10-26T15:04:19.925Z",
		"size": 3625,
		"path": "../public/assets/saque-CxV3oF1f.js"
	},
	"/assets/trending-up-DUjbhjNX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-qXIwkw8qQWWv20AaHaPdp7+Fb2A\"",
		"mtime": "2026-10-26T15:04:19.926Z",
		"size": 175,
		"path": "../public/assets/trending-up-DUjbhjNX.js"
	},
	"/assets/useNavigate-CiztUDyD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da-KLDv7xO0YyPmPY/2QjNU/6dbwjo\"",
		"mtime": "2026-10-26T15:04:19.936Z",
		"size": 218,
		"path": "../public/assets/useNavigate-CiztUDyD.js"
	},
	"/assets/useMutation-CK_XWNB3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92e-ihIcPPzST5xb3Jmnb9YSJU/u0lo\"",
		"mtime": "2026-10-26T15:04:19.935Z",
		"size": 2350,
		"path": "../public/assets/useMutation-CK_XWNB3.js"
	},
	"/assets/sprout-DyrqJOwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-ShDkZL56gWNzbrzIPCYp1D1pRsE\"",
		"mtime": "2026-10-26T15:04:19.925Z",
		"size": 309,
		"path": "../public/assets/sprout-DyrqJOwk.js"
	},
	"/assets/useQuery-B8fqyv0Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f41-l0fc1xuqaQZMKEppggfnUZkvqbY\"",
		"mtime": "2026-10-26T15:04:19.936Z",
		"size": 8001,
		"path": "../public/assets/useQuery-B8fqyv0Q.js"
	},
	"/assets/wallet-CQapeSNC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-WPdWqxavWetJR3MQQc7TaG9SVcE\"",
		"mtime": "2026-10-26T15:04:19.938Z",
		"size": 286,
		"path": "../public/assets/wallet-CQapeSNC.js"
	},
	"/assets/styles-D_A1MpZ6.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12b8c-eb3vV2PEHO2NV4H0jiat/y+hSlw\"",
		"mtime": "2026-10-26T15:04:19.940Z",
		"size": 76684,
		"path": "../public/assets/styles-D_A1MpZ6.css"
	},
	"/assets/users-CjShH8tB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-AaRtmNBM9CcQ5Zd9s5ekd9mRZz0\"",
		"mtime": "2026-10-26T15:04:19.937Z",
		"size": 306,
		"path": "../public/assets/users-CjShH8tB.js"
	},
	"/assets/trigo-DUsf6F5r.jpg": {
		"type": "image/jpeg",
		"etag": "\"31daf-bp9TKWwY4ymWrLFgGkuFIPcYtL4\"",
		"mtime": "2026-10-26T15:04:19.941Z",
		"size": 204207,
		"path": "../public/assets/trigo-DUsf6F5r.jpg"
	},
	"/assets/soja-gA00qHIL.jpg": {
		"type": "image/jpeg",
		"etag": "\"31ab3-J5wzQH0sL//bYrEeH7UlXbl3BxM\"",
		"mtime": "2026-10-26T15:04:19.940Z",
		"size": 203443,
		"path": "../public/assets/soja-gA00qHIL.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_oPEXrK = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_oPEXrK
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
