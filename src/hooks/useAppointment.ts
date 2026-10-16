import { defineStepper } from "@stepperize/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../service/api";
import {
  appointmentSchema,
  dateTimeSchema,
  serviceSchema,
  stylistSchema,
  userDetailsSchemas,
  type AppointmentSchema,
} from "../schema/appointment";
import { useState } from "react";

const { useStepper } = defineStepper([
  { id: "step1", title: "Serviço", schema: serviceSchema },
  { id: "step2", title: "Estilistas", schema: stylistSchema },
  { id: "step3", title: "Data & Hora", schema: dateTimeSchema },
  { id: "step4", title: "Detalhes", schema: userDetailsSchemas },
  { id: "step5", title: "Agendamento", schema: appointmentSchema },
]);

export function useAppointment() {
  const stepper = useStepper();
  const currentSchema = stepper.current.schema;
  const [booking, setBooking] = useState<AppointmentSchema>();

  const form = useForm<AppointmentSchema>({
    resolver: currentSchema ? zodResolver(currentSchema as any) : undefined,
  });

  async function createBooking(data: AppointmentSchema) {
    try {
      await api.post(data);
      setBooking(data);
      console.log("Agendamento criado!");
    } catch (error) {
      console.error(`POST APPOINTMENT ERROR: ${error}`);
    }
  }

  return { createBooking, form, useStepper, stepper, booking };
}
