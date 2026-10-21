import { defineStepper } from "@stepperize/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../service/api";
import { useState } from "react";
import type { AppointmentResponse } from "../types/appointment";

import {
  DEFAULT_VALUES,
  type NewAppointmentSchema,
  serviceSchema,
  stylistSchema,
  dateTimeSchema,
  userDetailsSchema,
} from "../schema/newAppointments";

type CreatedBooking = AppointmentResponse["createdBooking"];
// ["createdBooking"] é um tipo de acesso indexado do Typescript.
// Ele pega o tipo da propriedade createdBooking dentro de AppointmentResponse

const { useStepper } = defineStepper([
  { id: "step1", title: "Serviço", schema: serviceSchema },
  { id: "step2", title: "Profissionais", schema: stylistSchema },
  { id: "step3", title: "Data & Hora", schema: dateTimeSchema },
  { id: "step4", title: "Detalhes", schema: userDetailsSchema },
  { id: "booking", title: "Agendamento", schema: undefined },
]);

export function useAppointment() {
  const stepper = useStepper();
  const currentSchema = stepper.current.schema;
  const [booked, setBooked] = useState<CreatedBooking | null>(null);

  const [newBooking, setNewBooking] = useState<NewAppointmentSchema>();

  const form = useForm<NewAppointmentSchema>({
    resolver: currentSchema ? zodResolver(currentSchema as any) : undefined,
    defaultValues: DEFAULT_VALUES,
  });

  async function createBooking(data: NewAppointmentSchema) {
    try {
      const response = await api.post(data);
      setBooked(response.data.createdBooking);
      setNewBooking(response.data);
      console.log("Agendamento criado: ", data);

      return response.data.createdBooking;
    } catch (error) {
      console.error(`POST APPOINTMENT ERROR: ${error}`);
      console.log("DATA: ", data);
    }
  }

  return {
    createBooking,
    form,
    useStepper,
    stepper,
    booked, // uso no Step5 - na hora de mostrar o agendamento pronto
    newBooking,
  };
}
