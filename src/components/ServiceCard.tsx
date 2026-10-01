import { Card } from "../../components/ui/card";
import {
  Scissors,
  // Footprints, Hand, Sparkles
} from "lucide-react";

import type { Services } from "../types/service";

// Quero criar um 'mode' para este primeiro card. Por exemplo, quando estiver no mode "form" fica como
// ServiceCardForm. E quando estiver no mode "default" fica como ServiceCard.

export function ServiceCard({services}: Services) {
  return (
    <Card className="p-6" key={services.id}>
      <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg">
        <Scissors />
      </div>
      <div className="flex flex-row justify-between">
        <h3>{services.name}</h3>
        <p>R${" "}{services.price}</p>
      </div>
      <p>{services.description}</p>
      <p>{services.duration}</p>
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
