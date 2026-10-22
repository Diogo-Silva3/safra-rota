import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as accountOptions } from "./safra.functions-q2WhQcia.mjs";
import { t as Application } from "./application-C7un5g0t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-C3FUF6Bq.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/routes/_authenticated/dashboard.tsx?tsr-split=component";
function Page() {
	const { data } = useSuspenseQuery(accountOptions);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Application, {
		section: "dashboard",
		account: data
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { Page as component };
