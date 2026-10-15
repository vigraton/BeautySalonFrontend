import { Card } from "../components/ui/card";
import { ServiceCard } from "../components/ServiceCard";
import { useServices } from "../hooks/useServices";
import { useEffect, useState } from "react";
import type { AppointmentSchema } from "../schema/appointment";
import { useFormContext, Controller } from "react-hook-form";
import { FormMessage } from "../components/ui/form";

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="p-12 flex flex-col items-center gap-4 w-[90%] drop-shadow-2xl drop-shadow-[#221811]/25">
      {children}
    </Card>
  );
}

export function StepOne() {
  const { getServices, services } = useServices();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const { control, setValue } = useFormContext<AppointmentSchema>();

  console.log("SELECTED ID: ", selectedId);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {services?.map((service) => (
        <Controller
          control={control}
          name="step1.name"
          render={({ field }) => (
            <ServiceCard
              {...field}
              key={service.id}
              services={service}
              mode="form"
              value={String(selectedId)}
              onClick={() => {
                setSelectedId(service.id);
                setValue("step1.id", service.id);
              }}
            />
          )}
        />
      ))}
      <FormMessage />
    </div>
  );
}
