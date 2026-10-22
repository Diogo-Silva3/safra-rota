import { i as __toESM } from "../_runtime.mjs";
import { c as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Compass } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-D7Vdc8_c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/components/ui/button.tsx";
var Button = import_react.forwardRef(({ className, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: `inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`,
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/components/safra/brand.tsx";
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "brand",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "brand-symbol",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Compass, { size: 25 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 2,
				columnNumber: 89
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 2,
			columnNumber: 58
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
			"Safra",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "font-normal",
				children: " Rota"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 2,
				columnNumber: 127
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "TURISMO & POSSIBILIDADES" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 2,
				columnNumber: 169
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 2,
			columnNumber: 116
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 2,
		columnNumber: 34
	}, this);
}
//#endregion
export { Button as n, Brand as t };
