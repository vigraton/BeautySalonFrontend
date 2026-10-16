import { Card } from "./ui/card";
import { Scissors, Footprints, Hand, Sparkles, Clock } from "lucide-react";
import type { Services } from "../types";

export function ServiceCard({ services, mode, onClick }: Services) {
  const icon =
    services.name === "Tratamento capilar" ? (
      <Scissors />
    ) : services.name === "Pedicure" ? (
      <Footprints />
    ) : services.name === "Manicure" ? (
      <Hand />
    ) : (
      <Sparkles />
    );

  return (
    <>
      {mode === "default" ? (
        <Card className="p-6" key={services.id}>
          <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg w-12">
            {icon}
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-2xl font-[IM-FELL-French-Canon]">
              {services.name}
            </h3>
            <p className="text-[#D49838] text-lg font-medium font-sans">
              R$ {services.price}
            </p>
          </div>
          <p className="text-[#9C9FA6]">{services.description}</p>
          <div className="flex flex-row text-muted-foreground items-center gap-1">
            <Clock size={12} />
            <p>{services.duration}</p>
          </div>
        </Card>
      ) : (
        <Card
          className="p-4 cursor-pointer"
          key={services.id}
          onClick={onClick}>
          <div className="flex flex-row items-center gap-4 text-nowrap">
            <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg">
              {icon}
            </div>
            <div className="flex flex-row justify-between text-nowrap items-start">
              <div className="flex flex-col">
                <h3> {services.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {services.duration} - {services.description}
                </p>
              </div>
              <p>R$ {services.price}</p>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
