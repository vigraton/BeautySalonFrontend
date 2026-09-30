import { Card } from "../../components/ui/card";
import { Scissors, Footprints, Hand, Sparkles } from "lucide-react";

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
      {/* virá da API */}
      <p>Corte, lavagem, hidratação e estilização</p>
      <p>45min</p>
    </Card>
  );
}
