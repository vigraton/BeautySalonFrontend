import { useEffect } from "react";
import { StylistCard } from "../components/StylistCard";
import { useStylists } from "../hooks/useStylists";
import type { AppointmentSchema } from "../schema/appointment";
import { Controller, useFormContext } from "react-hook-form";

export function Step2() {
  const { getStylists, stylists } = useStylists();
  const { control } = useFormContext<AppointmentSchema>();

  // console.log(
  //   "STYLIST SELECTED: ",
  //   stylists.find((s) => s.id === selectedId),
  // );

  useEffect(() => {
    getStylists();
  }, []);

  return (
    <Controller
      name="step1.id"
      control={control}
      render={({ field, fieldState }) => (
        <>
          <div className="grid grid-cols-2 gap-4">
            {stylists?.map((stylist) => (
              <StylistCard
                {...field}
                key={stylist.id}
                stylists={stylist}
                mode="form"
                selected={field.value === stylist.id}
                onClick={() => {
                  field.onChange(stylist.id);
                  console.log("SELECTED stylist: ", stylist.name);
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
