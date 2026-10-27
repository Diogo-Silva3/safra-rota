import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Clock, LayoutDashboard, QrCode, ShieldCheck, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { brl } from "@/lib/format";
import { commissionRates, destinationImages } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "season-rental — Viaje e ganhe enquanto investe em turismo" },
      { name: "description", content: "12 destinos turísticos premium, rendimento diário, rede de indicação em 8 níveis e saque via Pix." },
      { property: "og:title", content: "season-rental — Viaje e ganhe" },
      { property: "og:description", content: "Destinos turísticos premium com rendimento diário, rede em 8 níveis e saque via Pix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Plan = { id: string; name: string; description: string; price: number; daily_yield_pct: number; duration_days: number };

function usePlans() {
  return useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data, error } = await supabase.from("plans").select("*").order("sort");
      if (error) throw error;
      return data as Plan[];
    },
  });
}

const upTo = (p: Plan) => Number(p.price) * (1 + (Number(p.daily_yield_pct) / 100) * p.duration_days);

const faqs = [
  {
    q: "O que é a season-rental?",
    a: "Uma plataforma de investimento em turismo premium com 12 destinos internacionais, acompanhamento digital, programa de indicações e saque via Pix.",
  },
  {
    q: "Qual o valor inicial?",
    a: "Os planos começam a partir de $30 USD. Valores, regras e benefícios devem sempre ser confirmados no plano vigente no momento da adesão.",
  },
  {
    q: "Quanto tempo dura um plano?",
    a: "Os ciclos são de 30 dias. O rendimento é creditado diariamente. O prazo e a taxa aplicáveis são os do plano contratado e aceito pelo usuário.",
  },
  {
    q: "Como acompanho minha participação?",
    a: "Pelo painel da season-rental, com visão de saldo, ganhos, planos ativos, rede, histórico e solicitações de saque.",
  },
  {
    q: "Como funcionam as indicações?",
    a: "Você compartilha seu link, acompanha o crescimento da rede e recebe comissões elegíveis conforme as regras do programa, em até 8 níveis.",
  },
  {
    q: "Como funcionam os saques?",
    a: "Com saldo disponível, a solicitação é feita no painel para transferência via Pix, sujeita às regras, verificações e prazos da plataforma.",
  },
  {
    q: "Existe risco?",
    a: "Sim. Toda decisão financeira envolve risco. Leia os termos do plano, os prazos e os critérios de resgate antes de participar. Resultados passados ou simulações não garantem resultados futuros.",
  },
];

function Index() {
  const plans = usePlans();
  const all = plans.data ?? [];
  const featured = all.filter((p) => ["Paris", "Maldivas", "Tóquio"].includes(p.name));

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="flex items-center gap-2 font-display text-xl font-bold">
            season<span className="text-primary">-rental</span>
          </span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <a href="#planos" className="hover:text-foreground">Planos</a>
            <a href="#rede" className="hover:text-foreground">Indicações</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/auth">Entrar</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/auth" search={{ mode: "signup" }}>Criar conta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 text-center md:pt-24">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            ✈️ season-rental · TURISMO PREMIUM
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Viaje para destinos <span className="text-primary">premium.</span> Ganhe enquanto investe.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            A season-rental conecta você a 12 destinos turísticos internacionais com rendimento diário. Escolha seu destino, acompanhe os ganhos e construa sua rede.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/auth" search={{ mode: "signup" }}>Começar agora <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><LayoutDashboard className="h-4 w-4 text-primary" /> Painel completo</span>
            <span className="flex items-center gap-1.5"><QrCode className="h-4 w-4 text-primary" /> Saque via Pix</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> Rede de 8 níveis</span>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {all.map((p) => (
              <Link key={p.id} to="/auth" search={{ mode: "signup" }} className="group overflow-hidden rounded-2xl border bg-card text-left shadow-sm transition hover:shadow-md">
                <img src={destinationImages[p.name]} alt={p.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="p-3">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    ${p.price} → <span className="font-semibold text-primary">até ${upTo(p).toFixed(0)}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-y bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { t: "A partir de", v: "$30 USD", s: "Destino mais acessível" },
              { t: "Ciclos de", v: "30 dias", s: "Rendimento diário completo" },
              { t: "Indique e cresça", v: "Até 8 níveis", s: "Comissões por indicação" },
            ].map((s) => (
              <div key={s.v} className="px-5 py-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.t}</p>
                <p className="font-display text-2xl font-bold">{s.v}</p>
                <p className="text-sm text-muted-foreground">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Como funciona</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
          Três passos. <span className="text-primary">Tudo sob seu controle.</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Uma jornada direta para entender as condições, escolher com consciência e acompanhar cada movimento.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Escolha um plano", d: "Compare valores, prazo e condições antes de confirmar sua escolha.", icon: Sprout },
            { n: "02", t: "Acompanhe no painel", d: "Veja saldo, atividades, rede e rendimentos em um só lugar.", icon: LayoutDashboard },
            { n: "03", t: "Receba conforme o plano", d: "Acompanhe os créditos e solicite saques conforme as regras vigentes.", icon: QrCode },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <s.icon className="h-6 w-6 text-primary" />
                <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="border-y bg-secondary/50 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Destinos season-rental</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
            Doze paradisíacos à sua escolha.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            12 destinos turísticos com ciclo de 30 dias. Confira as condições de cada um antes de confirmar seu investimento.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <img src={destinationImages[p.name]} alt={p.name} loading="lazy" width={1024} height={768} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    {p.name === "Maldivas" && <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Mais escolhido</span>}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  <p className="mt-4 text-xs text-muted-foreground">A partir de</p>
                  <p className="font-display text-3xl font-bold">${p.price}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {p.duration_days} dias</li>
                    <li className="flex items-center gap-2"><LayoutDashboard className="h-4 w-4 text-primary" /> Acompanhamento diário</li>
                    <li className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Comissões de rede</li>
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link to="/auth" search={{ mode: "signup" }}>Ver destino</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
            <strong>Importante:</strong> os valores acima são exemplos de entrada. Retorno, prazo, liquidez, elegibilidade e demais condições constam do plano e do contrato vigentes. Não há garantia de resultados futuros.
          </p>
        </div>
      </section>

      {/* Rede */}
      <section id="rede" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Indique e cresça</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Sua rede cresce <span className="text-primary">com você.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Compartilhe seu link, acompanhe cada etapa e receba comissões elegíveis conforme as regras do programa.
            </p>
            <ol className="mt-6 space-y-3">
              {[
                { t: "Compartilhe", d: "Envie seu link para pessoas interessadas." },
                { t: "Acompanhe", d: "Veja cadastros e crescimento no painel." },
                { t: "Receba", d: "Comissões elegíveis conforme as regras." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <div>
                    <p className="font-semibold">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-7">
              <Link to="/auth" search={{ mode: "signup" }}>Construir minha rede</Link>
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-sm font-semibold">Sua rede · até 8 níveis</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {commissionRates.map((r, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-muted px-3 py-2.5 text-sm">
                  <span className="text-muted-foreground">Nível {i + 1}</span>
                  <span className="font-display font-bold text-primary">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saque Pix */}
      <section className="border-y bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Saque via Pix</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Disponível, simples e direto do painel.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Solicite o saque dos saldos elegíveis e acompanhe o status sem sair da plataforma.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-card px-3 py-1.5 font-medium shadow-sm">Saldo disponível</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="rounded-full bg-card px-3 py-1.5 font-medium shadow-sm">Solicitar saque</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="rounded-full bg-primary px-3 py-1.5 font-medium text-primary-foreground">Pix enviado</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Sujeito a validação, disponibilidade e regras vigentes.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Saque concluído</p>
              <ShieldCheck className="h-5 w-5 text-success" />
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-primary">R$ 250,00</p>
            <p className="text-sm text-muted-foreground">Enviado via Pix</p>
            <div className="mt-4 space-y-2 border-t pt-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Destino</span><span className="font-medium">•••• 2841</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Horário</span><span className="font-medium">14:32</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Perguntas frequentes</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Informações claras <span className="text-primary">antes de decidir.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final */}
      <section className="bg-balance">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center text-primary-foreground md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Comece sua jornada de viagens e ganhos.</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Explore os destinos, leia as condições e acompanhe cada etapa no painel da season-rental.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-7">
            <Link to="/auth" search={{ mode: "signup" }}>Criar conta grátis</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2 font-display font-bold text-foreground">
            season-rental
          </span>
          <p>Resultados passados ou simulações não garantem resultados futuros em investimentos de turismo.</p>
        </div>
      </footer>
    </div>
  );
}
