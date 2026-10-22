import { createFileRoute } from '@tanstack/react-router';
import { AuthScreen } from '@/components/safra/auth-screen';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/auth')({head:()=>pageHead('Entre na sua jornada','Entre ou crie sua conta virtual na Safra Rota com seu indicador.'),component:AuthScreen});
