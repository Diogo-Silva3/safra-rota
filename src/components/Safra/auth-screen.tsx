import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Brand } from './brand'
import { supabase } from '@/integrations/supabase/client'
import { inviterCode, registrationSchema } from '@/lib/safra'
import resort from '@/assets/resort.jpg'

export function AuthScreen() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot' | 'complete'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [inviter, setInviter] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('indicador')
    if (code) {
      setInviter(code)
      setMode('signup')
    }

    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return
      const { data: profile } = await supabase
        .from('profiles')
        .select('registered')
        .eq('id', data.user.id)
        .single()

      if (profile?.registered) navigate('/dashboard', { replace: true })
      else setMode('complete')
    })
  }, [navigate])

  async function finish() {
    const { data } = await supabase.auth.getUser()
    if (!data.user) return

    const { data: profile } = await supabase
      .from('profiles')
      .select('registered')
      .eq('id', data.user.id)
      .single()

    if (profile?.registered) {
      navigate('/dashboard', { replace: true })
    } else setMode('complete')
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    console.log('[AuthScreen] Submit clicked, mode:', mode)
    setError('')
    setMessage('')
    setBusy(true)

    try {
      if (mode === 'complete') {
        const code = inviterCode(inviter)
        if (!code || name.trim().length < 2) throw new Error('Informe seu nome e um indicador válido.')

        const { error: rpcError } = await supabase.rpc('finish_registration', {
          p_name: name,
          p_inviter: code,
        })

        if (rpcError) throw rpcError
        await finish()
      } else if (mode === 'signup') {
        const parsed = registrationSchema.safeParse({
          name,
          inviter: inviterCode(inviter),
          email,
          password,
        })

        if (!parsed.success) throw new Error(parsed.error.issues[0]?.message)

        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: {
              display_name: name,
              inviter: inviterCode(inviter),
            },
          },
        })

        if (signUpError) throw signUpError
        if (data.session) await finish()
        else setMessage('Confira seu e-mail e clique no link para confirmar seu cadastro. Depois, entre na sua conta.')
      } else if (mode === 'forgot') {
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        })

        if (resetError) throw resetError
        setMessage('Se este e-mail estiver cadastrado, você receberá um link para criar uma nova senha.')
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError
        await finish()
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String((err as { message?: string })?.message || 'Não foi possível continuar.')
      setError(
        msg.includes('Invalid login')
          ? 'E-mail ou senha incorretos.'
          : msg.includes('Email not confirmed')
            ? 'Confirme seu e-mail antes de entrar.'
            : msg.includes('Database error')
              ? 'Indicador inválido. Verifique o link ou use SAFRAROTA para sua primeira conta.'
              : msg
      )
    } finally {
      setBusy(false)
    }
  }

  const title =
    mode === 'signup'
      ? 'Sua jornada começa aqui.'
      : mode === 'forgot'
        ? 'Uma nova senha, uma nova rota.'
        : mode === 'complete'
          ? 'Complete sua jornada.'
          : 'Bom ter você de volta.'

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <img src={resort} alt="Resort em Maragogi à beira do mar" width={1600} height={912} />
        <div className="auth-shade" />
        <a href="/" className="auth-brand">
          <Brand />
        </a>
        <div className="auth-visual-copy">
          <Compass size={36} />
          <h1>Safra Rota</h1>
          <p>
            Um novo olhar para
            <br />
            o seu próximo destino.
          </p>
          <span>
            <ShieldCheck size={16} />
            100% virtual. Zero dinheiro real.
          </span>
        </div>
      </div>

      <main className="auth-main">
        <a href="/" className="auth-mobile-brand">
          <Brand />
        </a>

        <div className="auth-form-wrap">
          <span className="eyebrow">TURISMO & POSSIBILIDADES</span>
          <h2>{title}</h2>
          <p>
            {mode === 'signup'
              ? 'Crie sua conta e explore novas possibilidades.'
              : mode === 'forgot'
                ? 'Receba um link seguro no seu e-mail.'
                : mode === 'complete'
                  ? 'Seu perfil precisa de um nome e um indicador.'
                  : 'Entre para acompanhar sua evolução.'}
          </p>

          {(mode === 'login' || mode === 'signup') && (
            <div className="auth-tabs">
              <button
                type="button"
                className={mode === 'login' ? 'auth-tab-active' : ''}
                onClick={() => {
                  setMode('login')
                  setError('')
                  setMessage('')
                }}
              >
                Entrar
              </button>
              <button
                type="button"
                className={mode === 'signup' ? 'auth-tab-active' : ''}
                onClick={() => {
                  setMode('signup')
                  setError('')
                  setMessage('')
                }}
              >
                Criar conta
              </button>
            </div>
          )}

          <form onSubmit={submit}>
            {(mode === 'signup' || mode === 'complete') && (
              <>
                <label>
                  Nome completo
                  <input
                    required
                    minLength={2}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos chamar você?"
                    autoComplete="name"
                  />
                </label>
                <label>
                  ID ou link do indicador <span className="text-destructive">*</span>
                  <input
                    required
                    value={inviter}
                    onChange={(e) => setInviter(e.target.value)}
                    placeholder="Ex.: SAFRAROTA ou link de convite"
                  />
                  <small>Primeira conta? Use o indicador de entrada SAFRAROTA.</small>
                </label>
              </>
            )}

            {mode !== 'complete' && (
              <label>
                E-mail
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </label>
            )}

            {(mode === 'login' || mode === 'signup') && (
              <label>
                Senha
                <div className="password-input">
                  <input
                    required
                    minLength={mode === 'signup' ? 8 : 1}
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === 'signup' ? 'Pelo menos 8 caracteres' : 'Sua senha'}
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
                    onClick={() => setShow(!show)}
                  >
                    {show ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </label>
            )}

            {mode === 'login' && (
              <Button
                type="button"
                variant="link"
                className="forgot-button"
                onClick={() => {
                  setMode('forgot')
                  setError('')
                  setMessage('')
                }}
              >
                Esqueci minha senha
              </Button>
            )}

            {error && (
              <div role="alert" className="form-error">
                {error}
              </div>
            )}

            {message && (
              <div role="status" className="form-message">
                {message}
              </div>
            )}

            <Button className="w-full auth-submit" disabled={busy}>
              {busy
                ? 'Aguarde…'
                : mode === 'signup'
                  ? 'Criar minha conta'
                  : mode === 'forgot'
                    ? 'Enviar link de recuperação'
                    : mode === 'complete'
                      ? 'Concluir cadastro'
                      : 'Entrar na minha conta'}
              <ArrowRight />
            </Button>
          </form>

          {mode === 'forgot' && (
            <Button
              variant="link"
              className="w-full mt-4"
              onClick={() => setMode('login')}
            >
              Voltar para entrar
            </Button>
          )}

          {mode === 'complete' && (
            <Button
              variant="link"
              className="w-full mt-4"
              onClick={async () => {
                await supabase.auth.signOut()
                setMode('login')
              }}
            >
              Sair e usar outra conta
            </Button>
          )}

          <div className="auth-disclaimer">
            <ShieldCheck size={16} />
            <span>Simulação educativa. Sem depósitos, saques ou dinheiro real.</span>
          </div>
        </div>

        <footer>© 2026 Safra Rota · Todas as rotas começam com você.</footer>
      </main>
    </div>
  )
}
