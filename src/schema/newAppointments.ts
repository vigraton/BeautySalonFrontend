import { z } from "zod";

const serviceSchema = z.object({
  id: z.string().min(1, "Escolha um serviço"),
});

const stylistSchema = z.object({
  id: z.string().min(1, "Escolha um profissional"),
});

const dateTimeSchema = z.object({
  date: z.iso.date().nonoptional("Escolha uma data"),
  time: z.iso.time().nonoptional("Escolha um horário"),
});

const userDetailsSchema = z.object({
  fullname: z.string().min(1, "Informe seu nome"),
  email: z.email().min(1, "Informe seu email"),
  telephone: z.string().min(1, "Informe seu telefone"),
  observations: z.string().optional(),
});

const appointmentSchema = z.object({
  step1: serviceSchema,
  step2: stylistSchema,
  step3: dateTimeSchema,
  step4: userDetailsSchema,
});

type NewStepOne = z.infer<typeof serviceSchema>;
type NewStepTwo = z.infer<typeof stylistSchema>;
type NewStepThree = z.infer<typeof dateTimeSchema>;
type NewStepFour = z.infer<typeof userDetailsSchema>;
type NewAppointmentSchema = z.infer<typeof appointmentSchema>;

const DEFAULT_VALUES: NewAppointmentSchema = {
  step1: {
    id: "",
  },
  step2: {
    id: "",
  },
  step3: {
    date: "",
    time: "",
  },
  step4: {
    email: "",
    fullname: "",
    telephone: "",
    observations: "",
  },
};

export {
  serviceSchema,
  type NewStepOne,
  stylistSchema,
  type NewStepTwo,
  dateTimeSchema,
  type NewStepThree,
  userDetailsSchema,
  type NewStepFour,
  appointmentSchema,
  type NewAppointmentSchema,
  DEFAULT_VALUES,
};
