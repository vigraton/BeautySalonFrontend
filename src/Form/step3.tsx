import { useState } from "react";
import { Calendar } from "../components/ui/calendar";

export function Step3() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const timetable = [
    {
      id: 1,
      time: "09:00",
    },
    {
      id: 2,
      time: "10:00",
    },
    {
      id: 3,
      time: "11:00",
    },
    {
      id: 4,
      time: "09:00",
    },
    {
      id: 5,
      time: "12:00",
    },
    {
      id: 6,
      time: "13:30",
    },
    {
      id: 7,
      time: "14:30",
    },
    {
      id: 8,
      time: "15:30",
    },
    {
      id: 9,
      time: "15:30",
    },
    {
      id: 10,
      time: "15:30",
    },
    {
      id: 11,
      time: "16:30",
    },
    {
      id: 12,
      time: "17:30",
    },
    {
      id: 13,
      time: "18:30",
    },
  ];

  return (
    <div className="flex flex-row min-w-full gap-4">
      <Calendar
        className="w-[30%] bg-[#FCF8F1] border border-[#E4DDD3] rounded-2xl p-6"
        captionLayout="dropdown-months"
        mode="single"
        selected={date}
        onSelect={setDate}
      />
      <div className="grid grid-cols-4 gap-4 w-full h-30">
        {timetable.map((time) => (
          <div
            key={time.id}
            className="bg-[#FCF8F1] cursor-pointer p-2 border border-[#E4DDD3] rounded-lg text-center">
            {time.time}
          </div>
        ))}
      </div>
    </div>
  );
}
