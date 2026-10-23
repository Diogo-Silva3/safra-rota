/** Formats as Brazilian currency (R$ 1.234,56) without relying on the runtime's ICU data,
 *  so SSR and browser always render the same string. */
export const brl = (v: number | string | null | undefined) => {
  const n = Number(v ?? 0);
  const safe = Number.isFinite(n) ? n : 0;
  const [int = "0", dec = "00"] = Math.abs(safe).toFixed(2).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${safe < 0 ? "-" : ""}R$\u00a0${grouped},${dec}`;
};

/** Translates common Supabase Auth errors to Portuguese. */
export function authErrorPt(err: unknown): string {
  const e = err as { code?: string; message?: string } | null;
  const code = e?.code ?? "";
  const msg = (e?.message ?? "").toLowerCase();
  if (code === "weak_password" || msg.includes("weak") || msg.includes("easy to guess"))
    return "Senha fraca ou já vazada. Use 8+ caracteres com letras, números e símbolos.";
  if (code === "user_already_exists" || msg.includes("already registered"))
    return "Este e-mail já está cadastrado. Use a opção Entrar.";
  if (code === "invalid_credentials" || msg.includes("invalid login credentials"))
    return "E-mail ou senha inválidos.";
  if (code === "email_not_confirmed" || msg.includes("email not confirmed"))
    return "Confirme seu e-mail antes de entrar. Verifique a caixa de entrada e o spam.";
  if (code === "email_address_invalid" || msg.includes("invalid email") || msg.includes("is invalid"))
    return "E-mail inválido.";
  if (code === "signup_disabled") return "Novos cadastros estão desativados no momento.";
  if (code === "over_email_send_rate_limit" || code === "over_request_rate_limit" || msg.includes("rate limit"))
    return "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
  if (msg.includes("password should be at least")) return "A senha deve ter pelo menos 6 caracteres.";
  return e?.message || "Erro inesperado";
}

/** Accepts a raw code or an invite link (?ref=CODE) and returns the normalized code. */
export function parseReferral(input: string): string {
  const s = input.trim();
  if (!s) return "";
  try {
    const url = new URL(s);
    const ref = url.searchParams.get("ref");
    if (ref) return ref.trim().toUpperCase();
  } catch {
    /* not a URL */
  }
  const m = s.match(/ref=([A-Za-z0-9]+)/);
  return (m?.[1] ?? s).toUpperCase();
}
