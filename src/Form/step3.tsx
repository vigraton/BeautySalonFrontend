import { useEffect } from "react";
import { useTimetable } from "../hooks/useTimetable";
import { Calendar } from "../components/ui/calendar";
import { useFormContext } from "react-hook-form";
import type { AppointmentSchema } from "../schema/appointment";

export function Step3() {
  const { setValue, watch } = useFormContext<AppointmentSchema>();
  const { timetable, getTimetable } = useTimetable();
  const selectedDate = watch("step3.date");
  const selectedTime = watch("step3.time");
  const calendarDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : undefined;

  useEffect(() => {
    getTimetable();
  }, [getTimetable]);

  return (
    <div className="flex items-top w-full justify-between gap-4">
      <Calendar
        className=" bg-[#FCF8F1] border border-[#E4DDD3] rounded-2xl p-6"
        captionLayout="dropdown-months"
        mode="single"
        selected={calendarDate}
        onSelect={(date) => {
          const formattedDate = date
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
            : "";
          setValue("step3.date", formattedDate, {
            shouldDirty: true,
            shouldValidate: true,
          });
          console.log("FORMATTED DATE: ", formattedDate)
        }}
      />
      <div className="grid grid-cols-4 gap-4 w-full h-30">
        {timetable.map((schedule) => (
          <button
            value={selectedTime}
            onClick={() => {
              setValue("step3.time", String(schedule));
              console.log("SCHEDULE: ", String(schedule));
            }}
            key={schedule.time}
            className="bg-[#FCF8F1] w-15 cursor-pointer p-2 border border-[#E4DDD3] rounded-lg text-center text-black">
            {String(schedule)}
          </button>
        ))}
      </div>
    </div>
  );
}
