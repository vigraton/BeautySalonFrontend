import { Card } from "../components/ui/card";
import { ServiceCard } from "../components/ServiceCard";
import { useServices } from "../hooks/useServices";
import { useEffect } from "react";

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="p-12 flex flex-col items-center gap-4 w-[90%] drop-shadow-2xl drop-shadow-[#221811]/25">
      {children}
    </Card>
  );
}

export function Step1() {
  const { getServices, services } = useServices();

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {services &&
        services.map((service) => (
          <ServiceCard
            key={service.id}
            services={service}
            mode="form"
            onClick={() => {}}
          />
        ))}
    </div>
  );
}
