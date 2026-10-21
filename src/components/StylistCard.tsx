import { Card } from "./ui/card";
import type { Stylists } from "../types/index";
import { cn } from "../../lib/utils";

export function StylistCard({ stylists, mode, onClick, selected }: Stylists) {
  return (
    <>
      {mode === "default" ? (
        <Card
          className="p-6 flex flex-col items-center justify-start text-center gap-4 w-1/2"
          key={stylists.id}>
          <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-full">
            <p>EM</p>
          </div>
          <h3 className="text-2xl font-[IM-FELL-French-Canon]">
            {stylists.name}
          </h3>
          <p className="text-[#CE8E33]">{stylists.specialistIn}</p>
          <p className="text-muted-foreground text-[13px]">
            {stylists.description}
          </p>
        </Card>
      ) : (
        <Card
          className={cn(selected ? "bg-muted" : "", "p-4 cursor-pointer")}
          key={stylists.id}
          onClick={onClick}>
          <div className="flex flex-row items-center gap-4 text-nowrap">
            <div className="bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] p-3 rounded-lg">
              <p>EM</p>
            </div>
            <div className="flex flex-row justify-between text-nowrap items-start">
              <div className="flex flex-col">
                <h3> {stylists.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {stylists.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
