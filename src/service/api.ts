import axios from "axios";
import { type AppointmentSchema } from "../schema/appointment";
import type { Service } from "../types";
import type { Stylist } from "../types/index";

const apiUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
});

async function postAppointment(data: AppointmentSchema) {
  try {
    const response = await apiUrl.post("/appointments", data);
    return response;
  } catch (error) {
    throw error;
  }
}

async function getServices() {
  try {
    const response = (await apiUrl.get<Service[]>("/services")).data;
    return response;
  } catch (error) {
    throw error;
  }
}

async function getStylists() {
  try {
    const response = (await apiUrl.get<Stylist[]>("/stylists")).data;
    return response;
  } catch (error) {
    throw error;
  }
}

export const api = { post: postAppointment, getServices, getStylists };
