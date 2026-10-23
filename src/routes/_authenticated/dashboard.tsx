import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Copy, Coins, TrendingUp, Users, Wallet } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { brl } from "@/lib/format";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Painel — Rendix" }, { name: "description", content: "Seu saldo, rendimentos e convites." }] }),
  component: Dashboard,
});

type Dash = { balance: number; total_yield: number; total_commission: number; active_plans: number; network_size: number };

function Dashboard() {
  const qc = useQueryClient();
  const { user } = Route.useRouteContext();
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (error) throw error;
      return data;
    },
  });
  const dash = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_dashboard");
      if (error) throw error;
      return data as unknown as Dash;
    },
  });
  const tx = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data, error } = await supabase.from("transactions").select("*").order("created_at", { ascending: false }).limit(200);
      if (error) throw error;
      return data;
    },
  });
  const collect = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.rpc("collect_yields");
      if (error) throw error;
      return Number(data);
    },
    onSuccess: (v) => {
      toast[v > 0 ? "success" : "info"](v > 0 ? `${brl(v)} creditados!` : "Nenhum rendimento disponível hoje.");
      qc.invalidateQueries();
    },
    onError: (e) => toast.error(e.message),
  });

  const chart = useMemo(() => {
    const days = 14;
    const map = new Map<string, number>();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      map.set(d.toISOString().slice(0, 10), 0);
    }
    (tx.data ?? []).forEach((t) => {
      if (t.type === "withdrawal") return; // saques não são ganhos
      const k = t.created_at.slice(0, 10);
      if (map.has(k)) map.set(k, (map.get(k) ?? 0) + Number(t.amount));
    });
    return [...map.entries()].map(([k, v]) => ({ day: k.slice(8, 10) + "/" + k.slice(5, 7), valor: Number(v.toFixed(2)) }));
  }, [tx.data]);

  const link = typeof window !== "undefined" && profile.data ? `${window.location.origin}/auth?ref=${profile.data.referral_code}` : "";
  const d = dash.data;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Olá,</p>
        <h1 className="text-2xl font-bold">{profile.data?.full_name || "investidor"}</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-balance p-6 text-primary-foreground shadow-glow">
          <div className="flex items-center gap-2 text-sm font-medium opacity-80">
            <Wallet className="h-4 w-4" /> Saldo disponível
          </div>
          <p className="mt-3 font-display text-4xl font-bold">{brl(d?.balance)}</p>
          <Button variant="secondary" size="sm" className="mt-5" onClick={() => collect.mutate()} disabled={collect.isPending}>
            <Coins className="h-4 w-4" /> Coletar rendimentos
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat icon={TrendingUp} label="Rendimento total" value={brl(d?.total_yield)} />
          <Stat icon={Coins} label="Comissões" value={brl(d?.total_commission)} />
          <Stat icon={Users} label="Rede (8 níveis)" value={String(d?.network_size ?? 0)} />
          <Stat icon={Wallet} label="Planos ativos" value={String(d?.active_plans ?? 0)} />
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <p className="text-sm font-semibold">Seu link de convite</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Código: <span className="font-mono text-primary">{profile.data?.referral_code}</span>
        </p>
        <div className="mt-3 flex gap-2">
          <input readOnly value={link} className="min-w-0 flex-1 rounded-lg border bg-muted px-3 text-sm" />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(link);
              toast.success("Link copiado!");
            }}
          >
            <Copy className="h-4 w-4" /> Copiar
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <p className="mb-4 text-sm font-semibold">Ganhos — últimos 14 dias</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={50} />
              <Tooltip
                contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8 }}
                formatter={(v: number) => brl(v)}
              />
              <Area type="monotone" dataKey="valor" stroke="var(--chart-1)" strokeWidth={2} fill="url(#g)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <p className="mb-3 text-sm font-semibold">Extrato</p>
        {(tx.data ?? []).length === 0 && <p className="text-sm text-muted-foreground">Nenhuma movimentação ainda.</p>}
        <ul className="divide-y">
          {(tx.data ?? []).slice(0, 15).map((t) => (
            <li key={t.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p>{t.description}</p>
                <p className="text-xs text-muted-foreground">{new Date(t.created_at).toLocaleString("pt-BR")}</p>
              </div>
              {t.type === "withdrawal" ? (
                <span className="font-semibold text-destructive">−{brl(t.amount)}</span>
              ) : (
                <span className="font-semibold text-success">+{brl(t.amount)}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Wallet; label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-3 text-xs text-muted-foreground">{label}</p>
      <p className="font-display text-lg font-semibold">{value}</p>
    </div>
  );
}
