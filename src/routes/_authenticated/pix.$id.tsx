import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Copy } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { brl } from "@/lib/format";

export const Route = createFileRoute("/_authenticated/pix/$id")({
  head: () => ({ meta: [{ title: "Pagamento Pix — season-rental" }, { name: "description", content: "Pague seu plano via Pix." }] }),
  component: Pix,
});

function Pix() {
  const { id } = Route.useParams();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const q = useQuery({
    queryKey: ["purchase", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("purchases").select("*, plans(name)").eq("id", id).single();
      if (error) throw error;
      return data;
    },
  });
  const pay = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.rpc("simulate_pix_payment", { p_purchase_id: id });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Pagamento confirmado! Plano ativado.");
      qc.invalidateQueries();
    },
    onError: (e) => toast.error(e.message),
  });
  const p = q.data;
  if (!p) return <p className="text-muted-foreground">Carregando...</p>;
  const paid = p.status === "paid";

  return (
    <div className="mx-auto max-w-md space-y-5">
      <Link to="/planos" className="text-sm text-muted-foreground">← Voltar aos planos</Link>
      <div className="rounded-2xl border bg-card p-6 text-center">
        <p className="text-sm text-muted-foreground">Plano {p.plans?.name}</p>
        <p className="font-display text-3xl font-bold">{brl(p.amount)}</p>
        {paid ? (
          <div className="py-10">
            <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
            <p className="mt-4 font-semibold">Pagamento confirmado</p>
            <Button className="mt-6" onClick={() => navigate({ to: "/dashboard" })}>Ir para o painel</Button>
          </div>
        ) : (
          <>
            <div className="mx-auto mt-6 w-fit rounded-xl bg-foreground p-4">
              <QRCodeSVG value={p.pix_code} size={200} bgColor="transparent" fgColor="var(--background)" />
            </div>
            <p className="mt-2 text-xs text-gold">QR Code fictício — ambiente de teste</p>
            <div className="mt-4 flex gap-2">
              <input readOnly value={p.pix_code} className="min-w-0 flex-1 rounded-lg border bg-muted px-3 font-mono text-xs" />
              <Button
                variant="secondary"
                size="icon"
                aria-label="Copiar código"
                onClick={() => {
                  navigator.clipboard.writeText(p.pix_code);
                  toast.success("Código copiado");
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" className="mt-6 w-full shadow-glow" onClick={() => pay.mutate()} disabled={pay.isPending}>
              {pay.isPending ? "Processando..." : "Simular Pagamento"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
