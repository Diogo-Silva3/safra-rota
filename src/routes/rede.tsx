import { createFileRoute } from '@tanstack/react-router';
import { Application } from '@/components/safra/application';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/rede')({head:()=>pageHead('Rede de conexões','Conheça a rede de indicações virtual da Safra Rota.'),component:()=> <Application section="network"/>});
