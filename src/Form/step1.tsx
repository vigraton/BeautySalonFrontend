import { Card } from "../components/ui/card";
import { ServiceCard } from "../components/ServiceCard";
import { useServices } from "../hooks/useServices";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type {
  // NewAppointmentSchema,
  NewStepOne
} from "../schema/newAppointments";

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="p-12 flex flex-col items-center gap-4 w-[90%] drop-shadow-2xl drop-shadow-[#221811]/25">
      {children}
    </Card>
  );
}

export function Step1() {
  const { getServices, services } = useServices();
  const { control } = useFormContext<NewStepOne>();

  useEffect(() => {
    getServices();
  }, []);

  return (
    <Controller
      name="step1.id"
      control={control}
      render={({ field, fieldState }) => (
        <>
          <div className="grid grid-cols-2 gap-4">
            {services?.map((service) => (
              <ServiceCard
                {...field}
                key={service.id}
                services={service}
                mode="form"
                selected={field.value === service.id}
                onClick={() => {
                  field.onChange(service.id);
                  console.log("SELECTED SERVICE: ", service.name);
                }}
              />
            ))}
          </div>
          {fieldState.error && (
            <p className="text-sm text-destructive">
              {fieldState.error.message}
            </p>
          )}
        </>
      )}
    />
  );
}
