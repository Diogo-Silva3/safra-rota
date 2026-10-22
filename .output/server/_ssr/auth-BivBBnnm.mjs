import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-kz4YW9xw.mjs";
import { i as registrationSchema, n as inviterCode } from "./safra-CdFUX0tP.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as ArrowRight, g as Compass, m as EyeOff, o as ShieldCheck, p as Eye } from "../_libs/lucide-react.mjs";
import { n as Button, t as Brand } from "./brand-D7Vdc8_c.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resort-0JaWY2cR.js
var resort_default = "/assets/resort-DkvP47vX.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BivBBnnm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/components/safra/auth-screen.tsx";
function AuthScreen() {
	const navigate = useNavigate();
	const queries = useQueryClient();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [inviter, setInviter] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const code = new URLSearchParams(window.location.search).get("indicador");
		if (code) {
			setInviter(code);
			setMode("signup");
		}
		supabase.auth.getUser().then(async ({ data }) => {
			if (!data.user) return;
			const { data: profile } = await supabase.from("profiles").select("registered").eq("id", data.user.id).single();
			if (profile?.registered) navigate({
				to: "/dashboard",
				replace: true
			});
			else setMode("complete");
		});
	}, [navigate]);
	async function finish() {
		const { data } = await supabase.auth.getUser();
		if (!data.user) return;
		const { data: profile } = await supabase.from("profiles").select("registered").eq("id", data.user.id).single();
		if (profile?.registered) {
			await queries.invalidateQueries();
			await navigate({
				to: "/dashboard",
				replace: true
			});
		} else setMode("complete");
	}
	async function submit(e) {
		e.preventDefault();
		setError("");
		setMessage("");
		setBusy(true);
		try {
			if (mode === "complete") {
				const code = inviterCode(inviter);
				if (!code || name.trim().length < 2) throw new Error("Informe seu nome e um indicador válido.");
				const { error } = await supabase.rpc("finish_registration", {
					p_name: name,
					p_inviter: code
				});
				if (error) throw error;
				await finish();
			} else if (mode === "signup") {
				const parsed = registrationSchema.safeParse({
					name,
					inviter: inviterCode(inviter),
					email,
					password
				});
				if (!parsed.success) throw new Error(parsed.error.issues[0]?.message);
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin,
						data: {
							display_name: name,
							inviter: inviterCode(inviter)
						}
					}
				});
				if (error) throw error;
				if (data.session) await finish();
				else setMessage("Confira seu e-mail e clique no link para confirmar seu cadastro. Depois, entre na sua conta.");
			} else if (mode === "forgot") {
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
				if (error) throw error;
				setMessage("Se este e-mail estiver cadastrado, você receberá um link para criar uma nova senha.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				await finish();
			}
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err?.message || "Não foi possível continuar.");
			setError(msg.includes("Invalid login") ? "E-mail ou senha incorretos." : msg.includes("Email not confirmed") ? "Confirme seu e-mail antes de entrar." : msg.includes("Database error") ? "Indicador inválido. Verifique o link ou use SAFRAROTA para sua primeira conta." : msg);
		} finally {
			setBusy(false);
		}
	}
	const title = mode === "signup" ? "Sua jornada começa aqui." : mode === "forgot" ? "Uma nova senha, uma nova rota." : mode === "complete" ? "Complete sua jornada." : "Bom ter você de volta.";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "auth-page",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "auth-visual",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: resort_default,
					alt: "Resort em Maragogi à beira do mar",
					width: 1600,
					height: 912
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 65
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-shade" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 150
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "auth-brand",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 215
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 179
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "auth-visual-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Compass, { size: 36 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 264
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Safra Rota" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 284
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
							"Um novo olhar para",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 324
							}, this),
							"o seu próximo destino."
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 303
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 361
						}, this), "100% virtual. Zero dinheiro real."] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 355
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 230
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 36
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "auth-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "auth-mobile-brand",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 508
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 465
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "auth-form-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "eyebrow",
							children: "TURISMO & POSSIBILIDADES"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 555
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 612
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: mode === "signup" ? "Crie sua conta e explore novas possibilidades." : mode === "forgot" ? "Receba um link seguro no seu e-mail." : mode === "complete" ? "Seu perfil precisa de um nome e um indicador." : "Entre para acompanhar sua evolução." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 628
						}, this),
						(mode === "login" || mode === "signup") && /* @__PURE__ */ (void 0)("div", {
							className: "auth-tabs",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								className: mode === "login" ? "auth-tab-active" : "",
								onClick: () => {
									setMode("login");
									setError("");
									setMessage("");
								},
								children: "Entrar"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 923
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								className: mode === "signup" ? "auth-tab-active" : "",
								onClick: () => {
									setMode("signup");
									setError("");
									setMessage("");
								},
								children: "Criar conta"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 1070
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 896
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: submit,
							children: [
								(mode === "signup" || mode === "complete") && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("label", { children: ["Nome completo", /* @__PURE__ */ (void 0)("input", {
									required: true,
									minLength: 2,
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "Como podemos chamar você?",
									autoComplete: "name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 87
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 67
								}, this), /* @__PURE__ */ (void 0)("label", { children: [
									"ID ou link do indicador ",
									/* @__PURE__ */ (void 0)("span", {
										className: "text-destructive",
										children: "*"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 268
									}, this),
									/* @__PURE__ */ (void 0)("input", {
										required: true,
										value: inviter,
										onChange: (e) => setInviter(e.target.value),
										placeholder: "Ex.: SAFRAROTA ou link de convite"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 311
									}, this),
									/* @__PURE__ */ (void 0)("small", { children: "Primeira conta? Use o indicador de entrada SAFRAROTA." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 433
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 237
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 65
								}, this),
								mode !== "complete" && /* @__PURE__ */ (void 0)("label", { children: ["E-mail", /* @__PURE__ */ (void 0)("input", {
									required: true,
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "seu@email.com",
									autoComplete: "email"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 546
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 533
								}, this),
								(mode === "login" || mode === "signup") && /* @__PURE__ */ (void 0)("label", { children: ["Senha", /* @__PURE__ */ (void 0)("div", {
									className: "password-input",
									children: [/* @__PURE__ */ (void 0)("input", {
										required: true,
										minLength: mode === "signup" ? 8 : 1,
										type: show ? "text" : "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: mode === "signup" ? "Pelo menos 8 caracteres" : "Sua senha",
										autoComplete: mode === "signup" ? "new-password" : "current-password"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 767
									}, this), /* @__PURE__ */ (void 0)(Button, {
										type: "button",
										variant: "ghost",
										size: "icon",
										"aria-label": show ? "Ocultar senha" : "Mostrar senha",
										onClick: () => setShow(!show),
										children: show ? /* @__PURE__ */ (void 0)(EyeOff, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 23,
											columnNumber: 1173
										}, this) : /* @__PURE__ */ (void 0)(Eye, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 23,
											columnNumber: 1183
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 1038
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 735
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 723
								}, this),
								mode === "login" && /* @__PURE__ */ (void 0)(Button, {
									type: "button",
									variant: "link",
									className: "forgot-button",
									onClick: () => {
										setMode("forgot");
										setError("");
										setMessage("");
									},
									children: "Esqueci minha senha"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 1231
								}, this),
								error && /* @__PURE__ */ (void 0)("div", {
									role: "alert",
									className: "form-error",
									children: error
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 1394
								}, this),
								message && /* @__PURE__ */ (void 0)("div", {
									role: "status",
									className: "form-message",
									children: message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 1459
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									className: "w-full auth-submit",
									disabled: busy,
									children: [busy ? "Aguarde…" : mode === "signup" ? "Criar minha conta" : mode === "forgot" ? "Enviar link de recuperação" : mode === "complete" ? "Concluir cadastro" : "Entrar na minha conta", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 1734
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 1519
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 2
						}, this),
						mode === "forgot" && /* @__PURE__ */ (void 0)(Button, {
							variant: "link",
							className: "w-full mt-4",
							onClick: () => setMode("login"),
							children: "Voltar para entrar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 19
						}, this),
						mode === "complete" && /* @__PURE__ */ (void 0)(Button, {
							variant: "link",
							className: "w-full mt-4",
							onClick: async () => {
								await queries.cancelQueries();
								queries.clear();
								await supabase.auth.signOut();
								setMode("login");
							},
							children: "Sair e usar outra conta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 145
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "auth-disclaimer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 373
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Simulação educativa. Sem depósitos, saques ou dinheiro real." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 397
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 340
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 523
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { children: "© 2026 Safra Rota · Todas as rotas começam com você." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 482
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 437
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 9
	}, this);
}
var SplitComponent = AuthScreen;
//#endregion
export { SplitComponent as component };
