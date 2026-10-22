import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Application } from '@/components/safra/application';
import { accountOptions } from '@/lib/safra.functions';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/_authenticated/minha-rede')({head:()=>pageHead('Minha rede','Veja sua árvore de indicações em até três níveis.'),loader:({context})=>context.queryClient.ensureQueryData(accountOptions),component:Page});
function Page(){const {data}=useSuspenseQuery(accountOptions);return <Application section="network" account={data}/>;}
