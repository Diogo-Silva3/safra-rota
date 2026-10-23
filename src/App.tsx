import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Safra Rota</h1>
        <p className="text-xl text-gray-700 mb-8">Plataforma de referência de turismo - 12 destinos, 3 planos, sistema de afiliação</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Plano Bronze</h3>
            <p className="text-gray-600">Acesso básico com comissões</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Plano Prata</h3>
            <p className="text-gray-600">Mais destinos e comissões altas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Plano Ouro</h3>
            <p className="text-gray-600">Acesso total com suporte premium</p>
          </div>
        </div>

        <Link to="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-700">
          Entrar / Cadastrar
        </Link>
      </div>
    </div>
  )
}

function Auth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Autenticação</h1>
        <p className="text-gray-600 text-center mb-6">Integração com Supabase</p>
        <Link to="/" className="block text-center bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
          Voltar
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
