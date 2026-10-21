import axios from "axios";
import type { NewAppointmentSchema } from "../schema/newAppointments";
import type { Stylist, Service, Timetable } from "../types/index";

const apiUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
});

async function postAppointment(data: NewAppointmentSchema) {
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

async function getTimetable() {
  try {
    const response = (await apiUrl.get<Timetable[]>("/timetable")).data;
    return response;
  } catch (error) {
    throw error
  }
}

export const api = {
  post: postAppointment,
  getServices,
  getStylists,
  getTimetable,
};
