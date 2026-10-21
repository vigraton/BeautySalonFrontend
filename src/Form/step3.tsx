import {cn} from "../../lib/utils"
import { useEffect } from "react";
import { useTimetable } from "../hooks/useTimetable";
import { Calendar } from "../components/ui/calendar";
import { useFormContext } from "react-hook-form";
import type { NewStepThree } from "../schema/newAppointments";
import { Controller } from "react-hook-form";

export function Step3() {
  const { setValue, watch, control } = useFormContext<NewStepThree>();
  const { timetable, getTimetable } = useTimetable();
  const selectedDate = watch("step3.day");
  const selectedTime = watch("step3.time");
  const calendarDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : undefined;

  useEffect(() => {
    getTimetable();
  }, []);

  return (
    <div className="flex items-top w-full justify-between gap-4">
      <Controller
        name="step3.day"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Calendar
              {...field}
              className=" bg-[#FCF8F1] border border-[#E4DDD3] rounded-2xl p-6"
              captionLayout="dropdown-months"
              mode="single"
              selected={calendarDate}
              onSelect={(date) => {
                const formattedDate = date
                  ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
                  : "";
                setValue("step3.day", formattedDate, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                console.log("FORMATTED DATE: ", formattedDate);
              }}
            />
            <>
              {fieldState.error && (
                <p className="text-sm text-destructive">
                  {fieldState.error.message}
                </p>
              )}
            </>
          </>
        )}
      />

      <div className="grid grid-cols-4 gap-4 w-full h-30">
        <Controller
          name="step3.time"
          control={control}
          render={({ field, fieldState }) => (
            <>
              {timetable?.map((schedule) => {
                const selected = field.value === String(schedule);

                return (
                  <button
                    {...field}
                    value={selectedTime}
                    onClick={() => {
                      setValue("step3.time", String(schedule));
                      console.log("SCHEDULE: ", String(schedule));
                    }}
                    key={String(schedule)}
                    className={cn(
                      "bg-[#FCF8F1] w-30 cursor-pointer p-2 border border-[#E4DDD3] rounded-lg text-center text-black",
                      selected ? "bg-[#F6ECDA]" : "hover:bg-[#F6ECDA]",
                    )}>
                    {String(schedule)}
                  </button>
                );
              })}
              {fieldState.error && (
                <p className="text-sm text-destructive">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}
