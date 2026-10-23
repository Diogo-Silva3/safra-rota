# Configuração do Supabase Real para Safra Rota

## Status Atual
- ✅ Modo **MOCK** ativo (desenvolvimento/teste)
- Aplicação funciona 100% em modo demonstrativo
- Contas fictícias, sem banco de dados real

## Como Ativar Supabase Real

### 1. Verificar Credenciais Supabase
Seu projeto Supabase: `https://pixelecsswtmdglynsyi.supabase.co`

**Obtém as chaves em:** Settings → API → Project API keys
- `VITE_SUPABASE_URL` = URL do projeto
- `VITE_SUPABASE_ANON_KEY` = chave anon/publica

### 2. Atualizar `.env.production`
```env
VITE_SUPABASE_URL=https://pixelecsswtmdglynsyi.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
VITE_USE_REAL=true
```

### 3. Atualizar `render.yaml` (para Render)
```yaml
envVars:
  - key: VITE_SUPABASE_URL
    value: https://pixelecsswtmdglynsyi.supabase.co
  - key: VITE_SUPABASE_ANON_KEY
    value: sua_chave_aqui
  - key: VITE_USE_REAL
    value: "true"
```

### 4. Verificar Banco de Dados
No Supabase Dashboard, criar as tabelas:
- `profiles` (id, display_name, invite_code, etc)
- `wallets` (id, user_id, balance_cents)
- `orders` (id, user_id, plan_id, etc)
- `transactions` (id, wallet_id, amount_cents, etc)

Ver arquivo: `drizzle/0001_initial.sql` para schema completo

### 5. Deploy
```bash
git add .env.production
git commit -m "Enable real Supabase"
git push
# Render vai reconstruir automaticamente
```

## Rollback para Mock
Se precisar voltar para modo mock:
```env
# .env.production
VITE_USE_REAL=false
```

## Checklist de Deploy Real
- [ ] Credenciais Supabase verificadas
- [ ] Tabelas do banco criadas
- [ ] Auth habilitado no Supabase (Settings → Auth)
- [ ] Variáveis de ambiente setadas no Render
- [ ] `.env.production` commitado com `VITE_USE_REAL=true`
- [ ] Build local testado com `npm run build`
- [ ] Fluxo de signup/login testado
