import { useState, useEffect } from "react";
import { useTimetable } from "../hooks/useTimetabe";
import { Calendar } from "../components/ui/calendar";

export function Step3() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>(undefined);
  const { timetable, getTimetable } = useTimetable();

  useEffect(() => {
    getTimetable();
  }, []);

  console.log("SELECTED DATE: ", date);
  // console.log("TIME: ", time);

  return (
    <div className="flex items-top w-full justify-between gap-4">
      <Calendar
        className=" bg-[#FCF8F1] border border-[#E4DDD3] rounded-2xl p-6"
        captionLayout="dropdown-months"
        mode="single"
        selected={date}
        onSelect={setDate}
      />
      <div className="grid grid-cols-4 gap-4 w-full h-30">
        {timetable.map((schedule) => (
          <button
            value={time}
            onClick={() => {
              setTime(String(schedule));
              console.log("SCHEDULE: ", schedule);
            }}
            key={String(schedule)}
            className="bg-[#FCF8F1] w-15 cursor-pointer p-2 border border-[#E4DDD3] rounded-lg text-center text-black">
            {String(schedule)}
          </button>
        ))}
      </div>
    </div>
  );
}
