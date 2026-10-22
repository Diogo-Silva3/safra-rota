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
	"/assets/auth-BG4Ga7SN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25ff-DyXP/5vfHtV4Vnql8ofbVNhdG1g\"",
		"mtime": "2026-10-22T20:35:07.830Z",
		"size": 9727,
		"path": "../public/assets/auth-BG4Ga7SN.js"
	},
	"/assets/brand-DFsuV1Dk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1643-IjfAzkiIYz+Gn0h4r+bkakl80Uw\"",
		"mtime": "2026-10-22T20:35:07.831Z",
		"size": 5699,
		"path": "../public/assets/brand-DFsuV1Dk.js"
	},
	"/assets/dashboard-BrPL9d71.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c8-3r7yEH2f0Fs26JIj81x6X56880o\"",
		"mtime": "2026-10-22T20:35:07.832Z",
		"size": 456,
		"path": "../public/assets/dashboard-BrPL9d71.js"
	},
	"/assets/application-Cnz4VDpk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74f8f-t26LjGCl72+u0pIv+arDf19RbsQ\"",
		"mtime": "2026-10-22T20:35:07.830Z",
		"size": 479119,
		"path": "../public/assets/application-Cnz4VDpk.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-22T15:57:34.061Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"113-HIOwA9k7RjuO0MdWKQ2+8QTzDA0\"",
		"mtime": "2026-10-22T15:57:28.661Z",
		"size": 275,
		"path": "../public/favicon.svg"
	},
	"/assets/jsx-dev-runtime-CPV2CgTv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b6b-k2C6wgP7ieojXOOVffdeA3Kjthw\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 11115,
		"path": "../public/assets/jsx-dev-runtime-CPV2CgTv.js"
	},
	"/assets/extrato-CsRgGg01.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-zjuLN87Uf7NlKFo86WHFw4mQb2U\"",
		"mtime": "2026-10-22T20:35:07.832Z",
		"size": 313,
		"path": "../public/assets/extrato-CsRgGg01.js"
	},
	"/assets/meu-extrato-B8ZfbBUr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-hBWNCbMcv41qNEc0owpSv//em/8\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 461,
		"path": "../public/assets/meu-extrato-B8ZfbBUr.js"
	},
	"/assets/meus-planos-Bpz8I5hc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-orDGN4UTjLoPprTvGS42TATz1Oo\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 454,
		"path": "../public/assets/meus-planos-Bpz8I5hc.js"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/minha-rede-847pUl8D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c7-gF99dPrax7gmvA+wxpKkkDUWgPI\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 455,
		"path": "../public/assets/minha-rede-847pUl8D.js"
	},
	"/assets/rede-5QTDct5b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-Qhjn3GYWpjfFl7EaNbfoCz6GXFI\"",
		"mtime": "2026-10-22T20:35:07.835Z",
		"size": 305,
		"path": "../public/assets/rede-5QTDct5b.js"
	},
	"/assets/resort-D5EVoIEr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"401-Rp5g1pGuVjMMMFIDjsJaMi0LJKA\"",
		"mtime": "2026-10-22T20:35:07.835Z",
		"size": 1025,
		"path": "../public/assets/resort-D5EVoIEr.js"
	},
	"/assets/planos-DqVe2lqf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-O1uFLN0NOt8yPrpV7QrkxIxq71s\"",
		"mtime": "2026-10-22T20:35:07.833Z",
		"size": 305,
		"path": "../public/assets/planos-DqVe2lqf.js"
	},
	"/assets/route-BtBXqxx2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12f-JC0qBi/Z+Lsm683VbrWVuqjqPsM\"",
		"mtime": "2026-10-22T20:35:07.835Z",
		"size": 303,
		"path": "../public/assets/route-BtBXqxx2.js"
	},
	"/assets/reset-password-C1MNq081.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95d-BkAZEO0mtiq8+w+YLY9a0GO131g\"",
		"mtime": "2026-10-22T20:35:07.835Z",
		"size": 2397,
		"path": "../public/assets/reset-password-C1MNq081.js"
	},
	"/assets/routes-hprbKHNx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12c-x2UoI0EMdYerjxSxYpzdsM+nVNY\"",
		"mtime": "2026-10-22T20:35:07.836Z",
		"size": 300,
		"path": "../public/assets/routes-hprbKHNx.js"
	},
	"/assets/styles-DkcmM4-7.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16636-3ApK6rJ+V7/GA+WBnlqDtQWnK2I\"",
		"mtime": "2026-10-22T20:35:07.839Z",
		"size": 91702,
		"path": "../public/assets/styles-DkcmM4-7.css"
	},
	"/assets/useSuspenseQuery-Cz5tr0M-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f8a-E1Y0PslcbmDfVB/IB6+yVgUhEMM\"",
		"mtime": "2026-10-22T20:35:07.837Z",
		"size": 8074,
		"path": "../public/assets/useSuspenseQuery-Cz5tr0M-.js"
	},
	"/assets/resort-DkvP47vX.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be4f-wqThlvN1C7jQ88G2tt4MnLfvVh0\"",
		"mtime": "2026-10-22T20:35:07.838Z",
		"size": 310863,
		"path": "../public/assets/resort-DkvP47vX.jpg"
	},
	"/assets/index-D1DDipAK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8adf-2DUtPdJLvDg+tarBHQWhKTsM+q8\"",
		"mtime": "2026-10-22T20:35:07.829Z",
		"size": 690911,
		"path": "../public/assets/index-D1DDipAK.js"
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
