import { useState } from "react";
import { api } from "../service/api";
import type { Stylist } from "../types";

export function useStylists() {
  const [stylists, setStylists] = useState<Stylist[]>([]);

  async function getStylists() {
    try {
      const response = await api.getStylists();
      setStylists(response);
    } catch (error) {
      console.error("GET STYLISTS ERROR: ", error);
    }
  }
  
  return { stylists, getStylists };
}
