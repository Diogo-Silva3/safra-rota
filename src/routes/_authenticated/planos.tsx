import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Clock, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { brl } from "@/lib/format";
import { cropImages } from "@/lib/crops";

export const Route = createFileRoute("/_authenticated/planos")({
  head: () => ({ meta: [{ title: "Planos — Rendix" }, { name: "description", content: "Planos de lavouras disponíveis para adesão." }] }),
  component: Planos,
});

function Planos() {
  const navigate = useNavigate();
  const plans = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data, error } = await supabase.from("plans").select("*").order("sort");
      if (error) throw error;
      return data;
    },
  });
  const purchases = useQuery({
    queryKey: ["purchases"],
    queryFn: async () => {
      const { data, error } = await supabase.from("purchases").select("*, plans(name)").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
  const buy = useMutation({
    mutationFn: async (planId: string) => {
      const { data, error } = await supabase.rpc("create_purchase", { p_plan_id: planId });
      if (error) throw error;
      return data;
    },
    onSuccess: (id) => navigate({ to: "/pix/$id", params: { id } }),
    onError: (e) => toast.error(e.message),
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Planos de lavouras</h1>
        <p className="mt-1 text-sm text-muted-foreground">Ciclos de 30 dias úteis. O rendimento é creditado de segunda a sexta.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(plans.data ?? []).map((p) => {
          const total = Number(p.price) * (1 + (Number(p.daily_yield_pct) / 100) * p.duration_days);
          return (
            <div key={p.id} className={`flex flex-col overflow-hidden rounded-2xl border bg-card ${p.name === "Soja" ? "border-primary shadow-glow" : ""}`}>
              <div className="relative">
                <img src={cropImages[p.name]} alt={p.name} loading="lazy" width={1024} height={768} className="aspect-[16/8] w-full object-cover" />
                {p.name === "Soja" && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Mais escolhido</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                <p className="mt-3 font-display text-3xl font-bold">{brl(p.price)}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm">
                  <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /><span><span className="text-primary">{Number(p.daily_yield_pct)}%</span> por dia útil</span></li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {p.duration_days} dias úteis de ciclo</li>
                  <li>Retorno estimado: <span className="font-semibold text-success">{brl(total)}</span></li>
                </ul>
                <Button className="mt-5" onClick={() => buy.mutate(p.id)} disabled={buy.isPending}>
                  Comprar via Pix
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <p className="max-w-3xl text-xs text-muted-foreground">
        <strong>Importante:</strong> retorno, prazo, liquidez e demais condições constam do plano vigente no momento da adesão. Não há garantia de resultados futuros.
      </p>

      <div className="rounded-2xl border bg-card p-5">
        <p className="mb-3 text-sm font-semibold">Minhas compras</p>
        {(purchases.data ?? []).length === 0 && <p className="text-sm text-muted-foreground">Nenhuma compra ainda.</p>}
        <ul className="divide-y">
          {(purchases.data ?? []).map((p) => (
            <li key={p.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium">{p.plans?.name} · {brl(p.amount)}</p>
                <p className="text-xs text-muted-foreground">{new Date(p.created_at).toLocaleString("pt-BR")}</p>
              </div>
              {p.status === "paid" ? (
                <span className="text-xs font-semibold text-success">Ativo</span>
              ) : (
                <Link to="/pix/$id" params={{ id: p.id }} className="text-xs font-semibold text-gold">
                  Pagar →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
