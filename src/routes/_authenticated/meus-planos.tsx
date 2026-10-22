import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Application } from '@/components/safra/application';
import { accountOptions } from '@/lib/safra.functions';
import { pageHead } from '@/lib/safra';
export const Route=createFileRoute('/_authenticated/meus-planos')({head:()=>pageHead('Meus planos','Explore adesões de turismo com pagamento virtual.'),loader:({context})=>context.queryClient.ensureQueryData(accountOptions),component:Page});
function Page(){const {data}=useSuspenseQuery(accountOptions);return <Application section="plans" account={data}/>;}
