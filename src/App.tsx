import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-4">🌍 Safra Rota</h1>
        <p className="text-gray-200 text-lg mb-8">Plataforma de turismo e referências virtuais</p>
        
        {user ? (
          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white backdrop-blur">
            <p>Bem-vindo, {user.email}!</p>
            <button 
              onClick={() => supabase.auth.signOut()}
              className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white backdrop-blur">
            <p className="mb-4">Para acessar o app, entre com sua conta:</p>
            <button 
              onClick={() => supabase.auth.signInWithPassword({
                email: 'demo@example.com',
                password: 'demo1234'
              })}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Demo Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
