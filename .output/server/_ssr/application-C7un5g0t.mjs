import { i as __toESM } from "../_runtime.mjs";
import { a as DialogPortal$1, i as DialogOverlay$1, n as DialogContent$1, o as DialogTitle$1, r as DialogDescription$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as supabase } from "./client-kz4YW9xw.mjs";
import { a as virtualMoney, o as visibleLevels, t as earningsTotal } from "./safra-CdFUX0tP.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as ArrowRight, S as ArrowUpRight, _ as CircleQuestionMark, a as Sparkles, b as CheckCheck, c as MapPin, d as LayoutDashboard, f as FileText, g as Compass, h as Copy, i as TrendingUp, l as LogOut, m as EyeOff, n as Wallet, o as ShieldCheck, p as Eye, r as Users, s as Menu, t as X, u as Leaf, v as ChevronDown, w as ArrowDownLeft, x as Bell, y as Check } from "../_libs/lucide-react.mjs";
import { n as Button, t as Brand } from "./brand-D7Vdc8_c.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/application-C7un5g0t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: `fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 16,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 29,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: `fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 30,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 28,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: `flex flex-col space-y-1.5 text-center sm:text-left ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 43,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 54,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: `text-lg font-semibold leading-none tracking-tight ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 65,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: `text-sm text-muted-foreground ${className || ""}`,
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 77,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName = "C:/Temp/PLATAFORMA NOVA/SAFRA STAYS/src/components/safra/application.tsx";
var demoPlans = [
	{
		id: "explorador",
		name: "Explorador",
		destination: "Maragogi, Alagoas",
		price_cents: 1e4,
		category: "Essencial"
	},
	{
		id: "viajante",
		name: "Viajante",
		destination: "Porto de Galinhas, Pernambuco",
		price_cents: 25e3,
		category: "Mais escolhido"
	},
	{
		id: "pioneiro",
		name: "Pioneiro",
		destination: "Praia do Forte, Bahia",
		price_cents: 5e4,
		category: "Premium"
	}
];
var demoTransactions = [
	{
		id: "1",
		kind: "scenario",
		amount_cents: 1850,
		description: "Cenário de turismo · Maragogi",
		created_at: "2026-10-21T13:00:00Z"
	},
	{
		id: "2",
		kind: "purchase",
		amount_cents: -25e3,
		description: "Adesão virtual · Viajante",
		created_at: "2026-10-20T13:00:00Z"
	},
	{
		id: "3",
		kind: "scenario",
		amount_cents: 1240,
		description: "Cenário de turismo · Praia do Forte",
		created_at: "2026-10-19T13:00:00Z"
	}
];
var demoNetwork = [
	{
		id: "a",
		display_name: "Mariana Costa",
		invite_code: "MARIANA01",
		referrer_id: null,
		level: 1,
		created_at: "2026-10-18"
	},
	{
		id: "b",
		display_name: "Lucas Oliveira",
		invite_code: "LUCAS002",
		referrer_id: null,
		level: 1,
		created_at: "2026-10-18"
	},
	{
		id: "c",
		display_name: "Ana Santos",
		invite_code: "ANA003",
		referrer_id: "a",
		level: 2,
		created_at: "2026-10-19"
	},
	{
		id: "d",
		display_name: "Pedro Lima",
		invite_code: "PEDRO004",
		referrer_id: "c",
		level: 3,
		created_at: "2026-10-20"
	}
];
var chartDemo = [
	{
		day: "01 out",
		value: 0
	},
	{
		day: "05 out",
		value: 37
	},
	{
		day: "10 out",
		value: 26
	},
	{
		day: "15 out",
		value: 98
	},
	{
		day: "20 out",
		value: 86
	},
	{
		day: "25 out",
		value: 163
	},
	{
		day: "30 out",
		value: 248.5
	}
];
var navItems = [
	{
		section: "dashboard",
		label: "Visão geral",
		icon: LayoutDashboard,
		to: "/",
		privateTo: "/dashboard"
	},
	{
		section: "transactions",
		label: "Minha carteira",
		icon: Wallet,
		to: "/extrato",
		privateTo: "/meu-extrato"
	},
	{
		section: "plans",
		label: "Explorar planos",
		icon: Compass,
		to: "/planos",
		privateTo: "/meus-planos"
	},
	{
		section: "network",
		label: "Minha rede",
		icon: Users,
		to: "/rede",
		privateTo: "/minha-rede"
	}
];
function Application({ section = "dashboard", account }) {
	const demo = !account;
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [period, setPeriod] = (0, import_react.useState)("30 dias");
	const [help, setHelp] = (0, import_react.useState)(false);
	const [notifications, setNotifications] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [order, setOrder] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [paid, setPaid] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [origin, setOrigin] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setOrigin(window.location.origin), []);
	const profile = account?.profile;
	const name = profile?.display_name || "Diogo Silva";
	const plans = account?.plans || demoPlans;
	const network = visibleLevels(account?.network || demoNetwork);
	const transactions = account?.transactions || demoTransactions;
	const balance = account?.balance ?? 245050;
	const earnings = demo ? 24850 : earningsTotal(transactions);
	const invested = demo ? 75e3 : (account?.orders || []).filter((o) => o.status === "paid").reduce((a, o) => a + o.price_cents, 0);
	const invite = `${origin}/auth?indicador=${profile?.invite_code || "SAFRAROTA"}`;
	const chart = demo ? chartDemo : (() => {
		let sum = 0;
		const gains = [...transactions].reverse().filter((t) => t.kind === "scenario" || t.kind === "referral").map((t) => {
			sum += t.amount_cents;
			return {
				day: new Date(t.created_at).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "short"
				}),
				value: sum / 100
			};
		});
		return gains.length ? gains : [{
			day: "Início",
			value: 0
		}, {
			day: "Hoje",
			value: 0
		}];
	})();
	const plot = period === "7 dias" ? chart.slice(-3) : chart;
	async function copy() {
		try {
			await navigator.clipboard.writeText(invite);
			toast.success("Link de convite copiado.");
		} catch {
			toast.error("Não foi possível copiar o link.");
		}
	}
	async function signOut() {
		await queryClient.cancelQueries();
		queryClient.clear();
		await supabase.auth.signOut();
		await navigate({
			to: "/auth",
			replace: true
		});
	}
	async function choose(plan) {
		setSelected(plan);
		setPaid(false);
		setOrder(null);
		if (demo) return;
		setBusy(true);
		const { data, error } = await supabase.rpc("create_virtual_order", { p_plan: plan.id });
		setBusy(false);
		if (error) {
			toast.error(error.message);
			setSelected(null);
			return;
		}
		setOrder(data);
	}
	async function pay() {
		if (demo) {
			await navigate({ to: "/auth" });
			return;
		}
		if (!order) return;
		setBusy(true);
		const { error } = await supabase.rpc("pay_virtual_order", { p_order: order });
		setBusy(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		setPaid(true);
		await queryClient.invalidateQueries({ queryKey: ["safra-account"] });
		toast.success("Pagamento virtual confirmado.");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "app-frame",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: `sidebar ${mobileOpen ? "sidebar-open" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "brand-link",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 99
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 63
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						className: "mobile-close",
						"aria-label": "Fechar menu",
						onClick: () => setMobileOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 235
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 114
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "workspace-label",
						children: "SEU ESPAÇO"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 248
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "ghost",
						className: `nav-item ${section === item.section ? "nav-active" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: demo ? item.to : item.privateTo,
							onClick: () => setMobileOpen(false),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { size: 19 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 512
								}, this),
								item.label,
								item.section === "plans" && /* @__PURE__ */ (void 0)("span", {
									className: "nav-new",
									children: "Novo"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 571
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 438
						}, this)
					}, item.section, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 322
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 297
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "sidebar-bottom",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "simulation-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { size: 23 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 34,
										columnNumber: 698
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Ambiente de simulação" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 34,
										columnNumber: 722
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "100% virtual. Zero dinheiro real." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 34,
										columnNumber: 760
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Aprender é o melhor investimento." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 34,
										columnNumber: 800
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 665
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								className: "nav-item",
								onClick: () => setHelp(true),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleQuestionMark, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 925
								}, this), "Central de ajuda"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 852
							}, this),
							demo ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/auth",
									children: ["Entrar na minha conta ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 34,
										columnNumber: 1061
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 1022
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 969
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								className: "nav-item",
								onClick: signOut,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 1156
								}, this), "Sair da conta"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 1093
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "sidebar-footer",
								children: "© 2026 Safra Rota"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 1188
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 633
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 2
			}, this),
			mobileOpen && /* @__PURE__ */ (void 0)("div", {
				className: "mobile-backdrop",
				onClick: () => setMobileOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 15
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "app-body",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "topbar",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							className: "mobile-menu",
							"aria-label": "Abrir menu",
							onClick: () => setMobileOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 214
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 96
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "breadcrumb",
							children: [
								"Meu painel ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 270
								}, this),
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: navItems.find((n) => n.section === section)?.label }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 285
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 230
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 55
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "topbar-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "virtual-badge",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 423
								}, this), "Saldo virtual"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 391
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								size: "icon",
								className: "notification-button",
								"aria-label": "Notificações",
								onClick: () => setNotifications(true),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { size: 19 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 581
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 598
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 450
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "header-divider" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 611
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								className: "account-button",
								onClick: () => demo ? navigate({ to: "/auth" }) : setHelp(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "avatar",
										children: name.split(" ").map((n) => n[0]).slice(0, 2).join("")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 752
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "account-name",
										children: [name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: demo ? "Conta demonstrativa" : "Conta de simulação" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 36,
											columnNumber: 871
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 834
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { size: 15 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 942
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 645
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 361
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 28
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "main-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "page-heading",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "eyebrow",
									children: "SUA PRÓXIMA JORNADA COMEÇA AQUI"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 68
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: section === "dashboard" ? `Olá, ${name.split(" ")[0]}. Boas rotas!` : section === "plans" ? "Encontre sua próxima rota." : section === "network" ? "Conexões que vão mais longe." : "Cada movimento, uma nova rota." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 130
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: section === "dashboard" ? "Acompanhe sua evolução e descubra novas possibilidades." : section === "plans" ? "Destinos reais, experiências financeiras inteiramente virtuais." : section === "network" ? "Sua árvore de indicações, organizada em até três níveis." : "Seu saldo e suas transações de simulação em um só lugar." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 335
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 63
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "demo-label",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 680
								}, this), demo ? "Visão demonstrativa" : "Minha conta virtual"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 651
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 33
						}, this),
						section === "dashboard" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "stats-grid",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "stat-card stat-primary",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-top",
												children: [/* @__PURE__ */ (void 0)("span", { children: "Saldo disponível" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 96
												}, this), /* @__PURE__ */ (void 0)(Button, {
													variant: "ghost",
													size: "icon",
													"aria-label": hidden ? "Mostrar saldo" : "Ocultar saldo",
													onClick: () => setHidden(!hidden),
													children: hidden ? /* @__PURE__ */ (void 0)(EyeOff, {}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 39,
														columnNumber: 254
													}, this) : /* @__PURE__ */ (void 0)(Eye, {}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 39,
														columnNumber: 264
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 125
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 70
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-value",
												children: [
													/* @__PURE__ */ (void 0)("small", { children: "V$" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 39,
														columnNumber: 314
													}, this),
													" ",
													hidden ? "••••••" : virtualMoney(balance)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 286
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-bottom",
												children: [/* @__PURE__ */ (void 0)("span", { children: [/* @__PURE__ */ (void 0)("span", { className: "status-dot" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 412
												}, this), "Moedas de simulação"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 406
												}, this), /* @__PURE__ */ (void 0)(Button, {
													variant: "ghost",
													size: "icon",
													"aria-label": "Abrir carteira",
													asChild: true,
													children: /* @__PURE__ */ (void 0)(Link, {
														to: demo ? "/extrato" : "/meu-extrato",
														children: /* @__PURE__ */ (void 0)(ArrowUpRight, {}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 39,
															columnNumber: 582
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 39,
														columnNumber: 540
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 468
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 377
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 39,
										columnNumber: 30
									}, this),
									/* @__PURE__ */ (void 0)(Stat, {
										label: "Rendimento total",
										value: earnings,
										icon: /* @__PURE__ */ (void 0)(TrendingUp, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 679
										}, this),
										note: demo ? "+12,8% no cenário de exemplo" : "Resultado dos cenários virtuais",
										positive: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 39,
										columnNumber: 625
									}, this),
									/* @__PURE__ */ (void 0)(Stat, {
										label: "Total em planos",
										value: invested,
										icon: /* @__PURE__ */ (void 0)(Compass, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 834
										}, this),
										note: demo ? "2 rotas na sua carteira" : `${account?.orders.filter((o) => o.status === "paid").length || 0} planos na sua carteira`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 39,
										columnNumber: 781
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "stat-card",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-top",
												children: [/* @__PURE__ */ (void 0)("span", { children: "Minha rede" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 1023
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "stat-icon",
													children: /* @__PURE__ */ (void 0)(Users, {}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 39,
														columnNumber: 1074
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 1046
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 997
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-value",
												children: [demo ? "24" : network.length, /* @__PURE__ */ (void 0)("small", {
													className: "person-label",
													children: " pessoas"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 1149
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 1095
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "stat-bottom",
												children: [/* @__PURE__ */ (void 0)("span", { children: "Conexões em 3 níveis" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 1232
												}, this), /* @__PURE__ */ (void 0)(ArrowUpRight, { size: 17 }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 39,
													columnNumber: 1265
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 39,
												columnNumber: 1203
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 39,
										columnNumber: 970
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 2
							}, this),
							/* @__PURE__ */ (void 0)("section", {
								className: "journey-banner",
								children: [
									/* @__PURE__ */ (void 0)("img", {
										src: "/assets/resort-DkvP47vX.jpg",
										width: 1600,
										height: 912,
										alt: "Resort à beira-mar com piscinas e coqueiros"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 38
									}, this),
									/* @__PURE__ */ (void 0)("div", { className: "banner-shade" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 133
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "banner-content",
										children: [
											/* @__PURE__ */ (void 0)("span", {
												className: "banner-tag",
												children: [/* @__PURE__ */ (void 0)(Sparkles, { size: 13 }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 40,
													columnNumber: 225
												}, this), " SEU PRÓXIMO DESTINO"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 40,
												columnNumber: 196
											}, this),
											/* @__PURE__ */ (void 0)("h2", { children: [
												"Novas rotas.",
												/* @__PURE__ */ (void 0)("br", {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 40,
													columnNumber: 289
												}, this),
												"Novas possibilidades."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 40,
												columnNumber: 273
											}, this),
											/* @__PURE__ */ (void 0)("p", { children: "Explore turismo e hotelaria com uma nova perspectiva." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 40,
												columnNumber: 320
											}, this),
											/* @__PURE__ */ (void 0)(Button, {
												asChild: true,
												variant: "secondary",
												children: /* @__PURE__ */ (void 0)(Link, {
													to: demo ? "/planos" : "/meus-planos",
													children: ["Explorar planos ", /* @__PURE__ */ (void 0)(ArrowUpRight, {}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 40,
														columnNumber: 473
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 40,
													columnNumber: 416
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 40,
												columnNumber: 380
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 164
									}, this),
									/* @__PURE__ */ (void 0)("span", {
										className: "banner-location",
										children: [/* @__PURE__ */ (void 0)(MapPin, { size: 13 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 40,
											columnNumber: 544
										}, this), " Maragogi, Alagoas"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 510
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 2
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "middle-grid",
								children: [/* @__PURE__ */ (void 0)("section", {
									className: "chart-panel",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "section-heading",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", { children: "Evolução dos ganhos" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 102
											}, this), /* @__PURE__ */ (void 0)("p", { children: "Seu progresso ao longo do tempo" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 130
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 97
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "period-switch",
												children: ["7 dias", "30 dias"].map((p) => /* @__PURE__ */ (void 0)(Button, {
													variant: "ghost",
													size: "sm",
													className: period === p ? "period-active" : "",
													onClick: () => setPeriod(p),
													children: p
												}, p, false, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 234
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 174
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 64
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "chart-summary",
											children: [/* @__PURE__ */ (void 0)("strong", { children: ["V$ ", virtualMoney(earnings)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 402
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "gain-chip",
												children: [/* @__PURE__ */ (void 0)(TrendingUp, { size: 13 }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 474
												}, this), demo ? "+12,8%" : "Simulação"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 446
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 371
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "chart-container",
											children: /* @__PURE__ */ (void 0)(ResponsiveContainer, {
												width: "100%",
												height: "100%",
												children: /* @__PURE__ */ (void 0)(AreaChart, {
													data: plot,
													margin: {
														top: 10,
														right: 10,
														left: -20,
														bottom: 0
													},
													children: [
														/* @__PURE__ */ (void 0)("defs", { children: /* @__PURE__ */ (void 0)("linearGradient", {
															id: "earnings-fill",
															x1: "0",
															y1: "0",
															x2: "0",
															y2: "1",
															children: [/* @__PURE__ */ (void 0)("stop", {
																offset: "0%",
																stopColor: "var(--primary)",
																stopOpacity: .17
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 41,
																columnNumber: 755
															}, this), /* @__PURE__ */ (void 0)("stop", {
																offset: "100%",
																stopColor: "var(--primary)",
																stopOpacity: 0
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 41,
																columnNumber: 820
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 692
														}, this) }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 686
														}, this),
														/* @__PURE__ */ (void 0)(CartesianGrid, {
															stroke: "var(--border)",
															strokeDasharray: "3 5",
															vertical: false
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 908
														}, this),
														/* @__PURE__ */ (void 0)(XAxis, {
															dataKey: "day",
															tick: {
																fill: "var(--muted-foreground)",
																fontSize: 11
															},
															axisLine: false,
															tickLine: false,
															dy: 8
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 986
														}, this),
														/* @__PURE__ */ (void 0)(YAxis, {
															tick: {
																fill: "var(--muted-foreground)",
																fontSize: 11
															},
															axisLine: false,
															tickLine: false,
															tickFormatter: (v) => `V$ ${v}`
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 1101
														}, this),
														/* @__PURE__ */ (void 0)(Tooltip, {
															formatter: (v) => [`V$ ${virtualMoney(v * 100)}`, "Ganhos"],
															contentStyle: {
																background: "var(--card)",
																borderColor: "var(--border)",
																borderRadius: 6
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 1224
														}, this),
														/* @__PURE__ */ (void 0)(Area, {
															type: "monotone",
															dataKey: "value",
															stroke: "var(--primary)",
															strokeWidth: 2.5,
															fill: "url(#earnings-fill)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 41,
															columnNumber: 1382
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 618
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 41,
												columnNumber: 570
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 537
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "chart-foot",
											children: [
												/* @__PURE__ */ (void 0)("span", { className: "legend-dot" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 1558
												}, this),
												"Ganhos virtuais ",
												/* @__PURE__ */ (void 0)("span", { children: demo ? "Dados de exemplo · Outubro 2026" : "Histórico da sua conta" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 1604
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 1530
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 31
								}, this), /* @__PURE__ */ (void 0)("section", {
									className: "invite-panel",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "invite-icon",
											children: /* @__PURE__ */ (void 0)(Users, { size: 23 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 66
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 36
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "eyebrow",
											children: "VIAJAR É MELHOR EM COMPANHIA"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 91
										}, this),
										/* @__PURE__ */ (void 0)("h2", { children: [
											"Convide. Conecte.",
											/* @__PURE__ */ (void 0)("br", {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 173
											}, this),
											"Explore junto."
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 152
										}, this),
										/* @__PURE__ */ (void 0)("p", { children: "Compartilhe sua rota e acompanhe as conexões da sua rede." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 197
										}, this),
										/* @__PURE__ */ (void 0)("label", { children: "Seu link de convite" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 261
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "invite-copy",
											children: [/* @__PURE__ */ (void 0)("span", { children: invite.replace(/^https?:\/\//, "") }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 324
											}, this), /* @__PURE__ */ (void 0)(Button, {
												variant: "ghost",
												size: "icon",
												"aria-label": "Copiar link de convite",
												onClick: copy,
												children: /* @__PURE__ */ (void 0)(Copy, { size: 16 }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 42,
													columnNumber: 459
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 372
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 295
										}, this),
										/* @__PURE__ */ (void 0)(Button, {
											className: "w-full",
											onClick: copy,
											children: ["Copiar meu convite ", /* @__PURE__ */ (void 0)(Copy, { size: 16 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 552
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 491
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "invite-note",
											children: [/* @__PURE__ */ (void 0)(ShieldCheck, { size: 13 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 42,
												columnNumber: 608
											}, this), " Sem comissões financeiras por indicação"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 578
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 42,
									columnNumber: 2
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 2
							}, this),
							/* @__PURE__ */ (void 0)("section", {
								className: "transactions-section",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "section-heading",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", { children: "Últimas movimentações" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 43,
										columnNumber: 82
									}, this), /* @__PURE__ */ (void 0)("p", { children: "Os passos mais recentes da sua jornada" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 43,
										columnNumber: 112
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 43,
										columnNumber: 77
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "ghost",
										asChild: true,
										className: "text-primary",
										children: /* @__PURE__ */ (void 0)(Link, {
											to: demo ? "/extrato" : "/meu-extrato",
											children: ["Ver extrato ", /* @__PURE__ */ (void 0)(ArrowRight, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 43,
												columnNumber: 274
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 43,
											columnNumber: 220
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 43,
										columnNumber: 163
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 44
								}, this), /* @__PURE__ */ (void 0)(TransactionTable, { rows: transactions.slice(0, 3) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 309
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 2
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 26
						}, this),
						section === "plans" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "plans-intro",
								children: [/* @__PURE__ */ (void 0)(ShieldCheck, { size: 18 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 53
								}, this), " Compras com moedas virtuais. Nenhuma cobrança ou promessa de retorno real."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 24
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "plans-grid",
								children: plans.map((plan, i) => /* @__PURE__ */ (void 0)("article", {
									className: "plan-card",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: `plan-image plan-image-${i}`,
										children: [/* @__PURE__ */ (void 0)("img", {
											src: "/assets/resort-DkvP47vX.jpg",
											alt: `Destino de turismo: ${plan.destination}`,
											width: 1600,
											height: 912,
											loading: "lazy"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 298
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "plan-category",
											children: plan.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 406
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 252
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "plan-content",
										children: [
											/* @__PURE__ */ (void 0)("span", {
												className: "eyebrow",
												children: ["ROTA ", String(i + 1).padStart(2, "0")]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 496
											}, this),
											/* @__PURE__ */ (void 0)("h2", { children: plan.name }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 563
											}, this),
											/* @__PURE__ */ (void 0)("p", { children: [/* @__PURE__ */ (void 0)(MapPin, { size: 14 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 586
											}, this), plan.destination] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 583
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "plan-price",
												children: [
													/* @__PURE__ */ (void 0)("small", { children: "V$" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 45,
														columnNumber: 655
													}, this),
													" ",
													virtualMoney(plan.price_cents),
													/* @__PURE__ */ (void 0)("span", { children: "adesão virtual" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 45,
														columnNumber: 705
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 627
											}, this),
											/* @__PURE__ */ (void 0)("ul", { children: [
												/* @__PURE__ */ (void 0)("li", { children: [/* @__PURE__ */ (void 0)(Check, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 746
												}, this), "Plano de turismo demonstrativo"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 742
												}, this),
												/* @__PURE__ */ (void 0)("li", { children: [/* @__PURE__ */ (void 0)(Check, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 793
												}, this), "Registro na carteira virtual"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 789
												}, this),
												/* @__PURE__ */ (void 0)("li", { children: [/* @__PURE__ */ (void 0)(Check, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 838
												}, this), "Pagamento Pix de teste"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 834
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 738
											}, this),
											/* @__PURE__ */ (void 0)(Button, {
												className: "w-full",
												variant: i === 1 ? "default" : "outline",
												onClick: () => choose(plan),
												children: ["Escolher plano ", /* @__PURE__ */ (void 0)(ArrowUpRight, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 45,
													columnNumber: 983
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 878
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 466
									}, this)]
								}, plan.id, true, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 207
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 158
							}, this),
							!demo && /* @__PURE__ */ (void 0)("section", {
								className: "transactions-section",
								children: [/* @__PURE__ */ (void 0)("h2", { children: "Minhas adesões" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 1081
								}, this), account.orders.length ? account.orders.map((o) => /* @__PURE__ */ (void 0)("div", {
									className: "order-row",
									children: [
										/* @__PURE__ */ (void 0)("span", { children: [/* @__PURE__ */ (void 0)("strong", { children: plans.find((p) => p.id === o.plan_id)?.name }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1193
										}, this), /* @__PURE__ */ (void 0)("small", { children: new Date(o.created_at).toLocaleDateString("pt-BR") }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1249
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1187
										}, this),
										/* @__PURE__ */ (void 0)("span", { children: ["V$ ", virtualMoney(o.price_cents)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1323
										}, this),
										o.status === "paid" ? /* @__PURE__ */ (void 0)("span", {
											className: "gain-chip",
											children: [/* @__PURE__ */ (void 0)(CheckCheck, { size: 14 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 45,
												columnNumber: 1415
											}, this), "Confirmado"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1387
										}, this) : /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => {
												const p = plans.find((p) => p.id === o.plan_id);
												if (p) {
													setSelected(p);
													setOrder(o.id);
													setPaid(false);
												}
											},
											children: "Concluir simulação"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 1456
										}, this)
									]
								}, o.id, true, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 1149
								}, this)) : /* @__PURE__ */ (void 0)("div", {
									className: "empty-state",
									children: [/* @__PURE__ */ (void 0)(Compass, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 1666
									}, this), /* @__PURE__ */ (void 0)("p", { children: "Você ainda não tem planos na sua carteira." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 1676
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 1637
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 1039
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 22
						}, this),
						section === "network" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
							className: "network-stats",
							children: [
								1,
								2,
								3
							].map((level) => /* @__PURE__ */ (void 0)("div", {
								className: "stat-card",
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "eyebrow",
										children: ["NÍVEL ", level]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 116
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "stat-value",
										children: [network.filter((n) => n.level === level).length, /* @__PURE__ */ (void 0)("small", {
											className: "person-label",
											children: " conexões"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 233
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 162
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-sm text-muted-foreground",
										children: level === 1 ? "Suas indicações diretas" : "Conexões da sua rede"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 288
									}, this)
								]
							}, level, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 77
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 26
						}, this), /* @__PURE__ */ (void 0)("section", {
							className: "network-tree",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "section-heading",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", { children: "Sua árvore de conexões" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 483
									}, this), /* @__PURE__ */ (void 0)("p", { children: "Até 3 níveis · Sem comissões por adesão" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 514
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 478
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "outline",
										onClick: copy,
										children: [/* @__PURE__ */ (void 0)(Copy, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 607
										}, this), "Copiar convite"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 566
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 445
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "tree-root",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "avatar",
											children: name[0]
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 670
										}, this),
										/* @__PURE__ */ (void 0)("strong", { children: name }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 711
										}, this),
										/* @__PURE__ */ (void 0)("small", { children: ["Você · ", profile?.invite_code || "SAFRAROTA"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 734
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 643
								}, this),
								network.length ? /* @__PURE__ */ (void 0)("div", {
									className: "tree-levels",
									children: [
										1,
										2,
										3
									].map((level) => /* @__PURE__ */ (void 0)("div", {
										className: "tree-level",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "level-label",
											children: ["Nível ", level]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 904
										}, this), /* @__PURE__ */ (void 0)("div", { children: network.filter((n) => n.level === level).map((n) => /* @__PURE__ */ (void 0)("div", {
											className: "tree-person",
											children: [
												/* @__PURE__ */ (void 0)("span", {
													className: "avatar",
													children: n.display_name[0]
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 1042
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: [/* @__PURE__ */ (void 0)("strong", { children: n.display_name }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 1099
												}, this), /* @__PURE__ */ (void 0)("small", { children: n.invite_code }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 1132
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 1093
												}, this),
												n.level > 1 && /* @__PURE__ */ (void 0)("span", {
													className: "tree-parent",
													children: ["Via ", network.find((p) => p.id === n.referrer_id)?.display_name || "sua rede"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 1181
												}, this)
											]
										}, n.id, true, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 1002
										}, this)) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 954
										}, this)]
									}, level, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 864
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 815
								}, this) : /* @__PURE__ */ (void 0)("div", {
									className: "empty-state",
									children: [
										/* @__PURE__ */ (void 0)(Users, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 1348
										}, this),
										/* @__PURE__ */ (void 0)("h3", { children: "Sua rede começa com um convite." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 1356
										}, this),
										/* @__PURE__ */ (void 0)("p", { children: "Ainda não há conexões. Seu link já está pronto para compartilhar." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 1396
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 1319
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 411
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 24
						}, this),
						section === "transactions" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
							className: "wallet-summary",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "stat-icon",
									children: /* @__PURE__ */ (void 0)(Wallet, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 47,
										columnNumber: 91
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 63
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: ["Saldo disponível", /* @__PURE__ */ (void 0)("strong", { children: ["V$ ", virtualMoney(balance)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 129
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 107
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "virtual-badge",
									children: "Moedas de simulação"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 179
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 31
						}, this), /* @__PURE__ */ (void 0)("section", {
							className: "transactions-section",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "section-heading",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", { children: "Extrato da carteira" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 323
								}, this), /* @__PURE__ */ (void 0)("p", { children: "Histórico de créditos e adesões virtuais" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 351
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 318
								}, this), /* @__PURE__ */ (void 0)("select", {
									"aria-label": "Filtrar movimentações",
									className: "filter-select",
									value: filter,
									onChange: (e) => setFilter(e.target.value),
									children: [
										/* @__PURE__ */ (void 0)("option", {
											value: "all",
											children: "Todas as movimentações"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 47,
											columnNumber: 528
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "credit",
											children: "Entradas"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 47,
											columnNumber: 579
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "debit",
											children: "Saídas"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 47,
											columnNumber: 619
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 404
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 285
							}, this), /* @__PURE__ */ (void 0)(TransactionTable, { rows: transactions.filter((t) => filter === "all" || (filter === "credit" ? t.amount_cents > 0 : t.amount_cents < 0)) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 671
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 243
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 29
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
							className: "main-footer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Leaf, { size: 13 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 40
							}, this), " Um novo olhar para o seu futuro."] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 34
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Safra Rota · Simulação educativa" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 97
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 2
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 2
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 2
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selected,
				onOpenChange: (v) => {
					if (!v && !busy) setSelected(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "payment-dialog",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: paid ? "Uma nova rota na sua carteira!" : "Pix de simulação" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 136
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: paid ? "Sua adesão foi registrada com moedas virtuais." : "QR Code fictício. Não é um Pix válido e não movimenta dinheiro real." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 221
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 122
					}, this), selected && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: paid ? /* @__PURE__ */ (void 0)("div", {
						className: "payment-success",
						children: [
							/* @__PURE__ */ (void 0)(CheckCheck, { size: 48 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 453
							}, this),
							/* @__PURE__ */ (void 0)("h3", { children: "Pagamento virtual confirmado" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 476
							}, this),
							/* @__PURE__ */ (void 0)("p", { children: [
								selected.name,
								" · V$ ",
								virtualMoney(selected.price_cents)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 513
							}, this),
							/* @__PURE__ */ (void 0)(Button, {
								onClick: () => setSelected(null),
								children: "Voltar aos planos"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 577
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 420
					}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "payment-plan",
							children: [/* @__PURE__ */ (void 0)("span", { children: [selected.name, /* @__PURE__ */ (void 0)("small", { children: selected.destination }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 703
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 682
							}, this), /* @__PURE__ */ (void 0)("strong", { children: ["V$ ", virtualMoney(selected.price_cents)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 747
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 652
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "qr-box",
							children: [/* @__PURE__ */ (void 0)(QRCodeSVG, {
								value: `SAFRA-ROTA-SIMULACAO-SEM-VALOR-${order || selected.id}`,
								size: 180,
								bgColor: "var(--card)",
								fgColor: "var(--foreground)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 833
							}, this), /* @__PURE__ */ (void 0)("span", { children: "SEM VALOR FINANCEIRO" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 971
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 809
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-center text-sm text-muted-foreground",
							children: demo ? "Entre na sua conta para registrar a simulação." : `Saldo virtual: V$ ${virtualMoney(balance)}`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 1010
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							className: "w-full",
							disabled: busy || !demo && !order,
							onClick: pay,
							children: [busy ? "Processando…" : demo ? "Entrar para simular pagamento" : "Simular Pagamento", /* @__PURE__ */ (void 0)(ShieldCheck, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 1323
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 1171
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 650
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 412
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 80
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 2
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: help,
				onOpenChange: setHelp,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Central de ajuda" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 74
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "Safra Rota · Ambiente educativo" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 117
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 60
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "help-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Posso sacar meu saldo?" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 232
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Não. As moedas V$ são fictícias, sem conversão ou resgate em dinheiro." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 263
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Como funcionam as indicações?" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 340
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "O convite conecta os perfis em até três níveis. Não há remuneração por recrutamento ou compra de planos." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 378
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Por que preciso de um indicador?" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 489
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Informe um link ou ID válido. Para começar sua primeira conta, use o indicador de entrada SAFRAROTA." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 530
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Os ganhos são garantidos?" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 637
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Não. Os números demonstrativos são exemplos educativos e não representam investimentos ou retornos reais." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 671
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 202
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 45
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 2
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: notifications,
				onOpenChange: setNotifications,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Notificações" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 92
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "Sua jornada na Safra Rota" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 131
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 78
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "notification-entry",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 246
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Bem-vindo ao ambiente virtual" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 266
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Seu saldo não tem valor financeiro. Nenhuma cobrança real é realizada." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 312
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 260
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 210
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 63
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 2
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 9
	}, this);
}
function Stat({ label, value, icon, note, positive }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "stat-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "stat-top",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 188
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "stat-icon",
					children: icon
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 208
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 162
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "stat-value",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "V$" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 283
					}, this),
					" ",
					virtualMoney(value)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 255
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `stat-bottom ${positive ? "text-primary" : ""}`,
				children: [positive && /* @__PURE__ */ (void 0)(TrendingUp, { size: 13 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 400
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: note }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 424
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 328
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 135
	}, this);
}
function TransactionTable({ rows }) {
	return rows.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "table-scroll",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
			className: "transaction-table",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Movimentação" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 223
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Data" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 244
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Status" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 257
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Valor" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 272
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 219
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 212
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: `transaction-icon ${row.amount_cents > 0 ? "transaction-credit" : ""}`,
					children: row.amount_cents > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownLeft, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 445
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 472
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 342
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: row.description }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 511
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: row.kind === "purchase" ? "Adesão de plano" : "Crédito virtual" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 545
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 505
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 338
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: new Date(row.created_at).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "short"
				}) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 631
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "confirmed",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 756
					}, this), "Concluído"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 728
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 724
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
					className: row.amount_cents > 0 ? "text-primary" : "",
					children: [
						row.amount_cents > 0 ? "+" : "−",
						" V$ ",
						virtualMoney(Math.abs(row.amount_cents))
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 784
				}, this)
			] }, row.id, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 321
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 299
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 175
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 145
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "empty-state",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 975
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Nenhuma movimentação encontrada." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 986
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 946
	}, this);
}
//#endregion
export { Application as t };
