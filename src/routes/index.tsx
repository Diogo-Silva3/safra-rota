import { createFileRoute } from "@tanstack/react-router";
import { Application } from '@/components/safra/application';
import { pageHead } from '@/lib/safra';
export const Route = createFileRoute("/")({
  head: () => pageHead('Seu próximo destino', 'Explore a Safra Rota, seu simulador educativo de turismo, planos e conexões com saldo inteiramente virtual.'),
  component: Index,
});
function Index() {
  return <Application/>;
}
