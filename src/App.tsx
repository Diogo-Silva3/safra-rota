import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from '@/integrations/supabase/client'
import { AuthScreen } from '@/components/Safra/auth-screen'
import { Application } from '@/components/Safra/application'

export default function App() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
      if (session?.user) {
        loadProfile(session.user.id)
      } else {
        setLoading(false)
      }
    })

    // Escutar mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null)
      if (session?.user) {
        await loadProfile(session.user.id)
      } else {
        setProfile(null)
        setLoading(false)
      }
    })

    return () => subscription?.unsubscribe()
  }, [])

  async function loadProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      setProfile(data)
    } catch (err) {
      console.error('Erro ao carregar perfil:', err)
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/auth" element={!user ? <AuthScreen /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={user && profile ? <Application section="dashboard" account={profile} /> : <Navigate to="/auth" />} />
      <Route path="/" element={user && profile ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
    </Routes>
  )
}
