import { createFileRoute } from '@tanstack/react-router';
import { Application } from '@/components/safra/application';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/extrato')({head:()=>pageHead('Carteira demonstrativa','Explore uma carteira e suas transações fictícias na Safra Rota.'),component:()=> <Application section="transactions"/>});
