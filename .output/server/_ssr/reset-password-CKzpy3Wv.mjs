import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-kz4YW9xw.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as Button, t as Brand } from "./brand-D7Vdc8_c.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-CKzpy3Wv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/routes/reset-password.tsx?tsr-split=component";
function ResetPassword() {
	const [valid, setValid] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!(new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery")) {
			setMessage("Este link não é um link de recuperação válido. Solicite outro na página de acesso.");
			return;
		}
		supabase.auth.getUser().then(({ data }) => {
			setValid(!!data.user);
			if (!data.user) setMessage("Seu link expirou. Solicite um novo link.");
		});
	}, []);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.updateUser({ password });
		setBusy(false);
		setMessage(error ? "Não foi possível atualizar sua senha. Solicite um novo link." : "Senha atualizada com sucesso.");
		setDone(!error);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "reset-page",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 39
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "reset-form",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Uma nova senha." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 76
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Retome sua jornada na Safra Rota." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 100
				}, this),
				valid && !done && /* @__PURE__ */ (void 0)("form", {
					onSubmit: submit,
					children: [/* @__PURE__ */ (void 0)("label", { children: ["Nova senha", /* @__PURE__ */ (void 0)("input", {
						type: "password",
						required: true,
						minLength: 8,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						autoComplete: "new-password"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 200
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 183
					}, this), /* @__PURE__ */ (void 0)(Button, {
						disabled: busy,
						className: "w-full",
						children: busy ? "Atualizando…" : "Salvar nova senha"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 345
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 159
				}, this),
				message && /* @__PURE__ */ (void 0)("p", {
					role: "status",
					className: "form-message",
					children: message
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 462
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "link",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/auth",
						children: "Voltar para entrar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 549
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 518
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 48
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
//#endregion
export { ResetPassword as component };
