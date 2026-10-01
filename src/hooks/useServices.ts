import type { Service } from "../types/service";
import { api } from "../service/api";
import { useState } from "react";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);

  async function getServices() {
    try {
      const response = await api.getServices();
      setServices(response);
    } catch (error) {
      console.error("GET SERVICES ERROR: ", error);
    }
  }

  return { services, getServices };
}
