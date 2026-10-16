import { useEffect, useState } from "react";
import { StylistCard } from "../components/StylistCard";
import { useStylists } from "../hooks/useStylists";
import type { AppointmentSchema } from "../schema/appointment";
import { Controller, useFormContext } from "react-hook-form";

export function Step2() {
  const { getStylists, stylists } = useStylists();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const { control, setValue } = useFormContext<AppointmentSchema>();

  console.log(
    "STYLIST SELECTED: ",
    stylists.find((s) => s.id === selectedId),
  );

  useEffect(() => {
    getStylists();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4" key={selectedId}>
      {stylists.length ? (
        stylists?.map((stylist) => (
          <Controller
            key={stylist.id}
            control={control}
            name="step2.name"
            render={({ field }) => (
              <StylistCard
                {...field}
                key={stylist.id}
                stylists={stylist}
                mode="form"
                value={String(selectedId)}
                onClick={() => {
                  setSelectedId(stylist.id);
                  setValue("step2.id", stylist.id);
                }}
              />
            )}
          />
        ))
      ) : (
        <div className="flex mt-4 text-center justify-center items-center font-medium">
          <p>Carregando...</p>
        </div>
      )}
    </div>
  );
}
