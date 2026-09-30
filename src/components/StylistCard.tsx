import { Card } from "../../components/ui/card";

export function StylistCard() {
  return (
    <Card className="p-6 flex flex-col items-center gap-4">
      <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-full">
        <p>EM</p>
      </div>
      <p>Elena Marchetti</p>
      <p>Especilista em estilização</p>
      <p>Cachos & textura capilar</p>
    </Card>
  );
}
