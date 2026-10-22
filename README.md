# Safra Rota

Plataforma de investimentos em experiências turísticas com rede de referência e saque via Pix.

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + TanStack Router
- **Backend**: TanStack Start + Nitro
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: Lovable Cloud Auth
- **UI**: Radix UI + Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Build**: Vite + TypeScript

## 📋 Requisitos

- Node.js 18+
- Bun (recomendado) ou npm/yarn
- PostgreSQL local ou Supabase

## 🛠️ Setup

```bash
# Instalar dependências
bun install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais

# Executar em desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview da build
bun run preview
```

## 📁 Estrutura do Projeto

```
safra-rota/
├── src/
│   ├── routes/              # TanStack Router pages
│   ├── components/          # React components
│   │   ├── Safra/          # Componentes específicos da app
│   │   └── ui/             # UI components (shadcn)
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities e helpers
│   ├── integrations/        # Supabase, Lovable integrations
│   ├── assets/              # Imagens e assets
│   ├── styles/              # CSS global
│   ├── server.ts            # SSR error wrapper
│   ├── start.ts             # App entry point
│   └── router.tsx           # Router configuration
├── drizzle/
│   ├── migrations/          # DB migrations
│   └── schema.ts            # DB schema
├── public/                  # Static files
├── supabase/                # Supabase config
├── vite.config.ts           # Vite configuration
├── drizzle.config.ts        # Drizzle configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## 🔧 Scripts Disponíveis

```bash
bun run dev         # Desenvolvimento
bun run build       # Build produção
bun run preview     # Preview da build
bun run lint        # Lint com ESLint
bun run format      # Format com Prettier
bun run test        # Testes com Vitest
bun run test:watch  # Testes em watch mode
```

## 📚 Documentação

- [TanStack Router](https://tanstack.com/router)
- [TanStack Start](https://tanstack.com/start)
- [Supabase](https://supabase.com/docs)
- [Drizzle ORM](https://orm.drizzle.team)
- [shadcn/ui](https://ui.shadcn.com)

## 📝 Roadmap

Veja [roadmap.md](./roadmap.md) para features planejadas.

## 📄 Licença

MIT
