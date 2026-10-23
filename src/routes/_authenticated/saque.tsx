import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { QrCode, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { brl } from "@/lib/format";

export const Route = createFileRoute("/_authenticated/saque")({
  head: () => ({ meta: [{ title: "Saque via Pix — Rendix" }, { name: "description", content: "Solicite o saque do seu saldo via Pix." }] }),
  component: Saque,
});

type Withdrawal = { id: string; amount: number; pix_key: string; status: string; created_at: string };

const statusLabel: Record<string, { label: string; cls: string }> = {
  pending: { label: "Em análise", cls: "text-gold" },
  paid: { label: "Enviado", cls: "text-success" },
  rejected: { label: "Recusado", cls: "text-destructive" },
};

function Saque() {
  const qc = useQueryClient();
  const [amount, setAmount] = useState("");
  const [pixKey, setPixKey] = useState("");

  const dashboard = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_dashboard");
      if (error) throw error;
      return data as { balance: number };
    },
  });

  const withdrawals = useQuery({
    queryKey: ["withdrawals"],
    queryFn: async () => {
      const { data, error } = await supabase.from("withdrawals").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data as Withdrawal[];
    },
  });

  const request = useMutation({
    mutationFn: async () => {
      const value = Number(amount.replace(",", "."));
      const { error } = await supabase.rpc("request_withdrawal", { p_amount: value, p_pix_key: pixKey });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Saque solicitado! Acompanhe o status abaixo.");
      setAmount("");
      setPixKey("");
      qc.invalidateQueries({ queryKey: ["withdrawals"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (e) => toast.error(e.message),
  });

  const balance = Number(dashboard.data?.balance ?? 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Saque via Pix</h1>

      <div className="rounded-2xl bg-balance p-6 text-primary-foreground shadow-glow">
        <p className="flex items-center gap-2 text-sm opacity-90"><Wallet className="h-4 w-4" /> Saldo disponível</p>
        <p className="mt-1 font-display text-4xl font-bold">{brl(balance)}</p>
      </div>

      <form
        className="space-y-4 rounded-2xl border bg-card p-5"
        onSubmit={(e) => {
          e.preventDefault();
          request.mutate();
        }}
      >
        <p className="flex items-center gap-2 text-sm font-semibold"><QrCode className="h-4 w-4 text-primary" /> Solicitar saque</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="amount">Valor (mínimo R$ 10,00)</Label>
            <Input id="amount" inputMode="decimal" placeholder="0,00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pix">Chave Pix</Label>
            <Input id="pix" placeholder="CPF, e-mail, telefone ou chave aleatória" value={pixKey} onChange={(e) => setPixKey(e.target.value)} required />
          </div>
        </div>
        <Button type="submit" disabled={request.isPending || balance <= 0}>
          {request.isPending ? "Solicitando..." : "Solicitar saque"}
        </Button>
        <p className="text-xs text-muted-foreground">Sujeito a validação, disponibilidade e regras vigentes da plataforma.</p>
      </form>

      <div className="rounded-2xl border bg-card p-5">
        <p className="mb-3 text-sm font-semibold">Meus saques</p>
        {(withdrawals.data ?? []).length === 0 && <p className="text-sm text-muted-foreground">Nenhum saque solicitado ainda.</p>}
        <ul className="divide-y">
          {(withdrawals.data ?? []).map((w) => (
            <li key={w.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium">{brl(w.amount)}</p>
                <p className="text-xs text-muted-foreground">{w.pix_key} · {new Date(w.created_at).toLocaleString("pt-BR")}</p>
              </div>
              <span className={`text-xs font-semibold ${statusLabel[w.status]?.cls ?? ""}`}>
                {statusLabel[w.status]?.label ?? w.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
