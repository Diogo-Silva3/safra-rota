import { z } from 'zod';
export const registrationSchema = z.object({ name: z.string().trim().min(2, 'Informe seu nome completo.'), inviter: z.string().trim().min(1, 'Informe o ID ou link do indicador.'), email: z.string().email('Informe um e-mail válido.'), password: z.string().min(8, 'Use pelo menos 8 caracteres.') });
export function inviterCode(value: string) {
  const trimmed = value.trim();
  try { const url = new URL(trimmed); return (url.searchParams.get('indicador') || '').trim().toUpperCase(); } catch { return trimmed.toUpperCase(); }
}
export function virtualMoney(cents: number) { return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100); }
export function earningsTotal(rows: {kind: string; amount_cents: number}[]) { return rows.filter(r => r.kind === 'scenario' || r.kind === 'referral').reduce((sum,r) => sum + r.amount_cents, 0); }
export function visibleLevels<T extends {level: number}>(rows: T[]) { return rows.filter(r => r.level >= 1 && r.level <= 3); }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} · Safra Rota` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} · Safra Rota` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
