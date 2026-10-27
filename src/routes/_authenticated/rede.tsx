import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { commissionRates } from "@/lib/crops";

export const Route = createFileRoute("/_authenticated/rede")({
  head: () => ({ meta: [{ title: "Minha rede — season-rental" }, { name: "description", content: "Árvore de indicações em até 8 níveis." }] }),
  component: Rede,
});

type Node = { id: string; full_name: string; referral_code: string; referrer_id: string | null; level: number; created_at: string; active_plans: number };

function Rede() {
  const { user } = Route.useRouteContext();
  const q = useQuery({
    queryKey: ["network"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_network");
      if (error) throw error;
      return data as Node[];
    },
  });
  const nodes = q.data ?? [];
  const children = (pid: string) => nodes.filter((n) => n.referrer_id === pid);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Minha rede</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sua árvore de indicações em até 8 níveis, com comissões de 12% a 0,5%.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {commissionRates.map((r, i) => (
          <div key={i} className="rounded-2xl border bg-card p-4">
            <p className="text-xs text-muted-foreground">Nível {i + 1} · {r}</p>
            <p className="font-display text-2xl font-bold">{nodes.filter((n) => n.level === i + 1).length}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-4 w-4" />
          </span>
          Você
        </div>
        {nodes.length === 0 && !q.isLoading && (
          <p className="mt-4 text-sm text-muted-foreground">Você ainda não tem indicados. Compartilhe seu link no painel.</p>
        )}
        <Tree items={children(user.id)} getChildren={children} />
      </div>
    </div>
  );
}

function Tree({ items, getChildren }: { items: Node[]; getChildren: (id: string) => Node[] }) {
  if (!items.length) return null;
  return (
    <ul className="ml-4 mt-2 space-y-2 border-l pl-4">
      {items.map((n) => (
        <li key={n.id}>
          <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm">
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
            <span className="font-medium">{n.full_name || "Sem nome"}</span>
            <span className="rounded bg-accent px-1.5 text-xs">N{n.level}</span>
            <span className={`ml-auto text-xs ${n.active_plans > 0 ? "text-success" : "text-muted-foreground"}`}>
              {n.active_plans > 0 ? `${n.active_plans} plano(s)` : "inativo"}
            </span>
          </div>
          <Tree items={getChildren(n.id)} getChildren={getChildren} />
        </li>
      ))}
    </ul>
  );
}
