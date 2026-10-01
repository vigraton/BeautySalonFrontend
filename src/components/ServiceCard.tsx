import { Card } from "../../components/ui/card";
import { Scissors, Footprints, Hand, Sparkles } from "lucide-react";

// Quero criar um 'mode' para este primeiro card. Por exemplo, quando estiver no mode "form" fica como 
// ServiceCardForm. E quando estiver no mode "default" fica como ServiceCard.7

// Não esquece que os dados virão da API

export function ServiceCard() {
  return (
    <Card className="p-6">
      <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg">
        <Scissors />
      </div>
      <div className="flex flex-row justify-between">
        <h3>Tratamento capilar</h3>
        <p>R$100</p>
      </div>
      <p>Corte, lavagem, hidratação e estilização</p>
      <p>45min</p>
    </Card>
  );
}

export function ServiceCardForm() {
  return (
    <Card className="p-4">
      <div className="flex flex-row items-center gap-4 text-nowrap">
        <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg">
          <Scissors size={16} />
        </div>
        <div className="flex flex-row justify-between text-nowrap items-start">
          <div className="flex flex-col">
            <h3>Corte de cabelo</h3>
            <p className="text-sm text-muted-foreground">
              45 min - Consulta, lavagem, corte & estilização
            </p>
          </div>
          <p>R$ 100,00</p>
        </div>
      </div>
    </Card>
  );
}
