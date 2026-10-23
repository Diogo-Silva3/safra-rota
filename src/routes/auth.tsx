import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authErrorPt, parseReferral } from "@/lib/format";

type Search = { mode?: "login" | "signup" | undefined; ref?: string | undefined };

export const Route = createFileRoute("/auth")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    mode: s["mode"] === "signup" || s["ref"] ? "signup" : undefined,
    ref: typeof s["ref"] === "string" ? s["ref"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Entrar ou cadastrar — Rendix" },
      { name: "description", content: "Acesse sua conta ou cadastre-se com o código do seu indicador." },
      { property: "og:title", content: "Entrar ou cadastrar — Rendix" },
      { property: "og:description", content: "Cadastre-se com o código do seu indicador." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">(search.mode ?? "login");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState(search.ref ?? "");
  const [refName, setRefName] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  useEffect(() => {
    const code = parseReferral(referral);
    if (code.length < 4) return setRefName(null);
    const t = setTimeout(async () => {
      const { data } = await supabase.rpc("check_referral_code", { p_code: code });
      setRefName(data ?? "");
    }, 350);
    return () => clearTimeout(t);
  }, [referral]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/dashboard" });
      } else {
        const code = parseReferral(referral);
        const { data: check } = await supabase.rpc("check_referral_code", { p_code: code });
        if (check !== "__first__" && !check) throw new Error("Código ou link do indicador inválido.");
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/dashboard",
            data: { full_name: name, referrer_code: code },
          },
        });
        if (error) throw error;
        if (data.session) navigate({ to: "/dashboard" });
        else {
          setEmailSent(true);
        }
      }
    } catch (err) {
      toast.error(authErrorPt(err));
    } finally {
      setLoading(false);
    }
  }

  if (emailSent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-hero px-5 py-10">
        <div className="w-full max-w-md text-center">
          <Link to="/" className="font-display text-2xl font-bold">
            Rend<span className="text-primary">ix</span>
          </Link>
          <div className="mt-6 rounded-2xl border bg-card p-8 shadow-glow">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl">
              📧
            </div>
            <h2 className="mb-2 text-xl font-bold">Verifique seu e-mail</h2>
            <p className="mb-1 text-sm text-muted-foreground">
              Enviamos um link de confirmação para:
            </p>
            <p className="mb-5 font-medium text-primary">{email}</p>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Clique no botão <strong>"Confirmar minha conta"</strong> dentro do e-mail para ativar sua conta e começar a investir.
            </p>
            <div className="rounded-lg border border-border bg-muted/50 p-3 mb-6 text-xs text-muted-foreground text-left">
              💡 <strong>Não encontrou?</strong> Verifique a pasta de spam ou lixo eletrônico. O e-mail pode levar alguns minutos para chegar.
            </div>
            <button
              onClick={() => { setEmailSent(false); setMode("login"); }}
              className="w-full rounded-lg border border-border py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition"
            >
              Voltar para o login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-5 py-10">
      <div className="w-full max-w-md">
        <Link to="/" className="font-display text-2xl font-bold">
          Rend<span className="text-primary">ix</span>
        </Link>
        <div className="mt-6 rounded-2xl border bg-card p-6 shadow-glow">
          <div className="mb-6 grid grid-cols-2 rounded-lg bg-muted p-1 text-sm">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-md py-2 font-medium transition ${mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                {m === "login" ? "Entrar" : "Cadastrar"}
              </button>
            ))}
          </div>
          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="ref">ID ou link do indicador *</Label>
                  <Input id="ref" required value={referral} onChange={(e) => setReferral(e.target.value)} placeholder="Ex: AB12CD34 ou link de convite" />
                  {refName === "__first__" ? (
                    <p className="text-xs text-muted-foreground">Primeiro usuário da plataforma — qualquer código é aceito.</p>
                  ) : refName ? (
                    <p className="text-xs text-success">Indicado por {refName} ✓</p>
                  ) : refName === "" ? (
                    <p className="text-xs text-destructive">Código não encontrado</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw">Senha</Label>
              <Input id="pw" type="password" minLength={6} required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Aguarde..." : mode === "login" ? "Entrar" : "Criar conta"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
