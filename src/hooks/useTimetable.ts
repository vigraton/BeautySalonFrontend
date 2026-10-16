import { api } from "../service/api";
import type { Timetable } from "../types";
import { useState } from "react";

export function useTimetable() {
  const [timetable, setTimetable] = useState<Timetable[]>([]);

  async function getTimetable() {
    try {
      const response = await api.getTimetable();
      setTimetable(response);
    } catch (error) {
      console.error("GET TIMETABLE ERROR: ", error);
    }
  }

  return { timetable, getTimetable };
}
