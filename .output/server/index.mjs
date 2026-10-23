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
	"/assets/auth-CqzZpjWC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1422-vQe6IrgW82NaKntW0eSlNTUMeQQ\"",
		"mtime": "2026-10-23T17:50:40.730Z",
		"size": 5154,
		"path": "../public/assets/auth-CqzZpjWC.js"
	},
	"/assets/crops-9wHjBgqK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b-5USRrb7fduTlmIETRrCy6bPZdDE\"",
		"mtime": "2026-10-23T17:50:40.732Z",
		"size": 283,
		"path": "../public/assets/crops-9wHjBgqK.js"
	},
	"/assets/clock-dPK75cLo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-syLp4Q4RVlnWqIMFffQpjHgh/9U\"",
		"mtime": "2026-10-23T17:50:40.731Z",
		"size": 169,
		"path": "../public/assets/clock-dPK75cLo.js"
	},
	"/assets/createLucideIcon-BkSITuw3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-Ym1yIhKqClOPC4utg6DJbCtZHIU\"",
		"mtime": "2026-10-23T17:50:40.731Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-BkSITuw3.js"
	},
	"/assets/client-5DgnjtYC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37b09-iKYyOzte5kCPZXjuUlQe6SdOANw\"",
		"mtime": "2026-10-23T17:50:40.731Z",
		"size": 228105,
		"path": "../public/assets/client-5DgnjtYC.js"
	},
	"/assets/dist-BWH-cG_t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b9-L+qAHgPTdBz0u2aNPk4K2bnBu3s\"",
		"mtime": "2026-10-23T17:50:40.735Z",
		"size": 697,
		"path": "../public/assets/dist-BWH-cG_t.js"
	},
	"/assets/format-DgjHTHa4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84eb-U26SxaxJX1+MsSBB9JX2H6MGJN0\"",
		"mtime": "2026-10-23T17:50:40.737Z",
		"size": 34027,
		"path": "../public/assets/format-DgjHTHa4.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-23T14:31:35.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/label-DeRnFos7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499-aFNCIDJMXB0v5eY+jLw916OHI0A\"",
		"mtime": "2026-10-23T17:50:40.737Z",
		"size": 1177,
		"path": "../public/assets/label-DeRnFos7.js"
	},
	"/assets/copy-nyjlfFE0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-Nn8JNAyBPmNPXnmUwIIpTqq2l9w\"",
		"mtime": "2026-10-23T17:50:40.731Z",
		"size": 236,
		"path": "../public/assets/copy-nyjlfFE0.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-23T14:31:35.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/Match-dUm75ymA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1172-wqhD4yy7rlTQMZiEzO+j1o/11l8\"",
		"mtime": "2026-10-23T17:50:40.730Z",
		"size": 4466,
		"path": "../public/assets/Match-dUm75ymA.js"
	},
	"/assets/link-B6sXCQa3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c20-vx5fKXEY2mH0CsKLACAuyIwk9Ko\"",
		"mtime": "2026-10-23T17:50:40.739Z",
		"size": 11296,
		"path": "../public/assets/link-B6sXCQa3.js"
	},
	"/assets/matchContext-Dmx4tHUb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-0zBOvRZEmBHo9CpW6WSkNiTBEbo\"",
		"mtime": "2026-10-23T17:50:40.739Z",
		"size": 157,
		"path": "../public/assets/matchContext-Dmx4tHUb.js"
	},
	"/assets/cafe-DSpe4oC9.jpg": {
		"type": "image/jpeg",
		"etag": "\"20967-BANv+8Wex8XkN5gDRVpccfuRZMI\"",
		"mtime": "2026-10-23T17:50:40.800Z",
		"size": 133479,
		"path": "../public/assets/cafe-DSpe4oC9.jpg"
	},
	"/assets/pix._id-BWDqkrus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"496e-yGCt0awbg27j6YDN0rd5EqFU9Ac\"",
		"mtime": "2026-10-23T17:50:40.740Z",
		"size": 18798,
		"path": "../public/assets/pix._id-BWDqkrus.js"
	},
	"/assets/dashboard-itPIhtyc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e02f-mlljaL+TgEKl9Y2suVqiac6O46E\"",
		"mtime": "2026-10-23T17:50:40.732Z",
		"size": 385071,
		"path": "../public/assets/dashboard-itPIhtyc.js"
	},
	"/assets/planos-DOxm9tLo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1049-5B3JAi7U6YBuva+A3vANSc9n7lE\"",
		"mtime": "2026-10-23T17:50:40.741Z",
		"size": 4169,
		"path": "../public/assets/planos-DOxm9tLo.js"
	},
	"/assets/qr-code-TZtuqVSb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28a-ug1b6hE0wae+zg9En6Mvr4X3wck\"",
		"mtime": "2026-10-23T17:50:40.762Z",
		"size": 650,
		"path": "../public/assets/qr-code-TZtuqVSb.js"
	},
	"/assets/preload-helper-BSLUm5mp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1602-8yAFx5+/JkJQWgX9IpSuR821jgA\"",
		"mtime": "2026-10-23T17:50:40.744Z",
		"size": 5634,
		"path": "../public/assets/preload-helper-BSLUm5mp.js"
	},
	"/assets/index-D_aTS2V7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57fcd-ZanrMAOlvkx/cXwdonvSWrDcrkU\"",
		"mtime": "2026-10-23T17:50:40.730Z",
		"size": 360397,
		"path": "../public/assets/index-D_aTS2V7.js"
	},
	"/assets/horta-BTcPFznd.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d0c4-6WETnAKEBxBKRwlTowIBvP2qARY\"",
		"mtime": "2026-10-23T17:50:40.816Z",
		"size": 250052,
		"path": "../public/assets/horta-BTcPFznd.jpg"
	},
	"/assets/laranja-DzJpj3Uv.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f73-WEG3ZTHwp0P9n+Xo3743hEy/CrI\"",
		"mtime": "2026-10-23T17:50:40.816Z",
		"size": 171891,
		"path": "../public/assets/laranja-DzJpj3Uv.jpg"
	},
	"/assets/milho-D50Q2BkX.jpg": {
		"type": "image/jpeg",
		"etag": "\"27b77-44v2vI11w3od9tuwb85gFT4e13g\"",
		"mtime": "2026-10-23T17:50:40.818Z",
		"size": 162679,
		"path": "../public/assets/milho-D50Q2BkX.jpg"
	},
	"/assets/query-Rg0DWNsm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"390c-+QSfb1V/rU356Ef0DIBUvB0M36U\"",
		"mtime": "2026-10-23T17:50:40.764Z",
		"size": 14604,
		"path": "../public/assets/query-Rg0DWNsm.js"
	},
	"/assets/react-dom-DNLczUyJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f12-Y509wXimAhNzkMvrPQL/IdgSiOs\"",
		"mtime": "2026-10-23T17:50:40.766Z",
		"size": 3858,
		"path": "../public/assets/react-dom-DNLczUyJ.js"
	},
	"/assets/rede-CFUBPqec.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1f-MYjVE2TK1EqHCY9UNmx8DAldEjY\"",
		"mtime": "2026-10-23T17:50:40.766Z",
		"size": 2591,
		"path": "../public/assets/rede-CFUBPqec.js"
	},
	"/assets/saque-zh0vVyBH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e29-8vpb+9bw5RA9yh5btXZ+go3wUOQ\"",
		"mtime": "2026-10-23T17:50:40.767Z",
		"size": 3625,
		"path": "../public/assets/saque-zh0vVyBH.js"
	},
	"/assets/sprout-BhUpwdUd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25f-h6+RlMmsNlGE47KLycoSd0mMhXk\"",
		"mtime": "2026-10-23T17:50:40.767Z",
		"size": 607,
		"path": "../public/assets/sprout-BhUpwdUd.js"
	},
	"/assets/routes-CI6qk7GL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a4d-Z1PURT1ON7B2t1JRJcLhFR8+MPk\"",
		"mtime": "2026-10-23T17:50:40.767Z",
		"size": 39501,
		"path": "../public/assets/routes-CI6qk7GL.js"
	},
	"/assets/route--ss1CPMA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba5-G8eXa3HBHcGW9dmA2HfoV5P4ex8\"",
		"mtime": "2026-10-23T17:50:40.767Z",
		"size": 2981,
		"path": "../public/assets/route--ss1CPMA.js"
	},
	"/assets/useQuery-D_0eQvrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f41-GWRX7dViq1hbrfl7/3YSfXFf05U\"",
		"mtime": "2026-10-23T17:50:40.792Z",
		"size": 8001,
		"path": "../public/assets/useQuery-D_0eQvrb.js"
	},
	"/assets/trending-up-CzdjxEHv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-rkXBz6Bp8L81DoQJHKIXMhrYybM\"",
		"mtime": "2026-10-23T17:50:40.767Z",
		"size": 175,
		"path": "../public/assets/trending-up-CzdjxEHv.js"
	},
	"/assets/useMutation-2KWmLzBK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92e-FGffqarcGbcITZFzVAiRZ6s84fE\"",
		"mtime": "2026-10-23T17:50:40.768Z",
		"size": 2350,
		"path": "../public/assets/useMutation-2KWmLzBK.js"
	},
	"/assets/users-D3Pxu804.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-rG6nfZ+UG2ztT777EnLNXtTxq0I\"",
		"mtime": "2026-10-23T17:50:40.792Z",
		"size": 306,
		"path": "../public/assets/users-D3Pxu804.js"
	},
	"/assets/wallet-CPD0aDea.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-Y5viNYerizPoJ4uhPvvXn08Ku4w\"",
		"mtime": "2026-10-23T17:50:40.793Z",
		"size": 286,
		"path": "../public/assets/wallet-CPD0aDea.js"
	},
	"/assets/styles-C2kFdqjo.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12a2a-3CsTSFakm6PnBMkKJdY9RFQzpFU\"",
		"mtime": "2026-10-23T17:50:40.823Z",
		"size": 76330,
		"path": "../public/assets/styles-C2kFdqjo.css"
	},
	"/assets/soja-gA00qHIL.jpg": {
		"type": "image/jpeg",
		"etag": "\"31ab3-J5wzQH0sL//bYrEeH7UlXbl3BxM\"",
		"mtime": "2026-10-23T17:50:40.818Z",
		"size": 203443,
		"path": "../public/assets/soja-gA00qHIL.jpg"
	},
	"/assets/useNavigate-BWBkQwJ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da-Hjjwp5W/+fSaVmf/f9qbGRc+0uI\"",
		"mtime": "2026-10-23T17:50:40.773Z",
		"size": 218,
		"path": "../public/assets/useNavigate-BWBkQwJ3.js"
	},
	"/assets/trigo-DUsf6F5r.jpg": {
		"type": "image/jpeg",
		"etag": "\"31daf-bp9TKWwY4ymWrLFgGkuFIPcYtL4\"",
		"mtime": "2026-10-23T17:50:40.825Z",
		"size": 204207,
		"path": "../public/assets/trigo-DUsf6F5r.jpg"
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
