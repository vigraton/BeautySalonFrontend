import { defineStepper } from "@stepperize/react";
import {
  appointmentSchema,
  dateTimeSchema,
  serviceSchema,
  stylistSchema,
  userDetailsSchemas,
} from "../schema/appointment";

const formStepper = defineStepper([
  { id: "step1", title: "Serviço", schema: serviceSchema },
  { id: "step2", title: "Estilistas", schema: stylistSchema },
  { id: "step3", title: "Data & Hora", schema: dateTimeSchema },
  { id: "step4", title: "Detalhes", schema: userDetailsSchemas },
  { id: "step5", title: "Agendamento", schema: appointmentSchema },
]);

export function useAppointment() {}
