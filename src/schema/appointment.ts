import { z } from "zod";

const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  price: z.number(),
});

const stylistSchema = z.object({
  id: z.string().nonoptional(),
  name: z.string(),
  specialistIn: z.string(),
  description: z.string(),
});

const dateTimeSchema = z.object({
  date: z.iso.date().nonoptional("Escolha uma data"),
  time: z.iso.time().nonoptional("Escolha um horário")
});

const userDetailsSchemas = z.object({
  fullname: z.string().nonoptional("Informe seu nome"),
  email: z.email().nonoptional("Informe seu email"),
  telephone: z.string().nonoptional("Informe seu telefone"),
  observations: z.string().optional(),
});

const appointmentSchema = z.object({
  step1: serviceSchema.nonoptional("Escolha um servio"),
  step2: stylistSchema.nonoptional("Escolha um profissional"), 
  step3: dateTimeSchema.nonoptional("Escolha uma data e horário"),
  step4: userDetailsSchemas.nonoptional("Preencha seus dados"),
});

type Step1 = z.infer<typeof serviceSchema>;
type Step2 = z.infer<typeof stylistSchema>;
type Step3 = z.infer<typeof dateTimeSchema>;
type Step4 = z.infer<typeof userDetailsSchemas>;
type AppointmentSchema = z.infer<typeof appointmentSchema>;

export {
  serviceSchema,
  type Step1,
  stylistSchema,
  type Step2,
  dateTimeSchema,
  type Step3,
  userDetailsSchemas,
  type Step4,
  appointmentSchema,
  type AppointmentSchema,
};
