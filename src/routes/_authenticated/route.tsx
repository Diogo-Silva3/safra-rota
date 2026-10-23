import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LayoutDashboard, LogOut, Network, Sprout, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: Layout,
});

const nav = [
  { to: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { to: "/rede", label: "Rede", icon: Network },
  { to: "/planos", label: "Planos", icon: Sprout },
  { to: "/saque", label: "Saque", icon: Wallet },
] as const;

function Layout() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }
  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pl-60">
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col border-r bg-card p-5 md:flex">
        <span className="flex items-center gap-2 font-display text-xl font-bold">
          <Sprout className="h-6 w-6 text-primary" />
          Rend<span className="text-primary">ix</span>
        </span>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted"
              activeProps={{ className: "bg-muted text-foreground" }}
            >
              <n.icon className="h-4 w-4" /> {n.label}
            </Link>
          ))}
        </nav>
        <button onClick={signOut} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted">
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </aside>
      <header className="flex items-center justify-between border-b px-5 py-4 md:hidden">
        <span className="flex items-center gap-2 font-display text-lg font-bold">
          <Sprout className="h-5 w-5 text-primary" />
          Rend<span className="text-primary">ix</span>
        </span>
        <button onClick={signOut} aria-label="Sair" className="text-muted-foreground">
          <LogOut className="h-5 w-5" />
        </button>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-6 md:py-10">
        <Outlet />
      </main>
      <nav className="fixed inset-x-0 bottom-0 grid grid-cols-4 border-t bg-card/95 backdrop-blur md:hidden">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="flex flex-col items-center gap-1 py-3 text-xs text-muted-foreground"
            activeProps={{ className: "text-primary" }}
          >
            <n.icon className="h-5 w-5" /> {n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
