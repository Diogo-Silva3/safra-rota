import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { Application } from '@/components/Safra/application'
import { AuthScreen } from '@/components/Safra/auth-screen'

export default function App() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription?.unsubscribe()
  }, [])

  if (loading) return <div className="p-8">Carregando...</div>

  return user ? <Application /> : <AuthScreen />
}
