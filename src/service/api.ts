import axios from "axios";
import { type AppointmentSchema } from "../schema/appointment";

const apiUrl = axios.create({
  baseURL: `${import.meta.env.API_ENDPOINT}/appointments`,
});

async function postAppointment(data: AppointmentSchema) {
  try {
    const response = await apiUrl.post("", data)
    return response
  } catch (error) {
    throw error;
  }
}

export const api = { post: postAppointment };
