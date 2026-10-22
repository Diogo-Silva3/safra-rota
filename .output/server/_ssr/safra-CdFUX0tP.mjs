import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safra-CdFUX0tP.js
var registrationSchema = objectType({
	name: stringType().trim().min(2, "Informe seu nome completo."),
	inviter: stringType().trim().min(1, "Informe o ID ou link do indicador."),
	email: stringType().email("Informe um e-mail válido."),
	password: stringType().min(8, "Use pelo menos 8 caracteres.")
});
function inviterCode(value) {
	const trimmed = value.trim();
	try {
		return (new URL(trimmed).searchParams.get("indicador") || "").trim().toUpperCase();
	} catch {
		return trimmed.toUpperCase();
	}
}
function virtualMoney(cents) {
	return new Intl.NumberFormat("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(cents / 100);
}
function earningsTotal(rows) {
	return rows.filter((r) => r.kind === "scenario" || r.kind === "referral").reduce((sum, r) => sum + r.amount_cents, 0);
}
function visibleLevels(rows) {
	return rows.filter((r) => r.level >= 1 && r.level <= 3);
}
function pageHead(title, description) {
	return { meta: [
		{ title: `${title} · Safra Rota` },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: `${title} · Safra Rota`
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
//#endregion
export { virtualMoney as a, registrationSchema as i, inviterCode as n, visibleLevels as o, pageHead as r, earningsTotal as t };
