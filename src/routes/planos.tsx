import { createFileRoute } from '@tanstack/react-router';
import { Application } from '@/components/safra/application';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/planos')({head:()=>pageHead('Explorar planos','Planos demonstrativos de turismo e hotelaria na Safra Rota.'),component:()=> <Application section="plans"/>});
