import { z } from "zod";

const serviceSchema = z.object({
  step1: z.object({
    id: z.string({ error: "Escolha um serviço" }).min(1),
  }),
});
// Com name, description, duration e price comentados, o campo é validado normalmente, e a mensagem aparece!
// Dentro do Step1 estou usando esse schema e não o de appointment. O mesmo vale para stylistSchma

const stylistSchema = z.object({
  step2: z.object({
    id: z.string({ error: "Escolha um profissional" }).min(1),
  }),
});

const dateTimeSchema = z.object({
  step3: z.object({
    day: z.iso.date({ error: "Escolha uma data" }),
    time: z.iso.time({ error: "Escolha um horário" }),
  }),
});

const userDetailsSchema = z.object({
  step4: z.object({
    fullname: z.string({ error: "Informe seu nome" }).min(1),
    email: z.email({ error: "Informe seu email" }).min(1, "Informe seu email"),
    telephone: z
      .string({ error: "Informe seu telefone" })
      .min(1, "Informe seu telefone"),
    observations: z.string().optional(),
  }),
});

type NewStepOne = z.infer<typeof serviceSchema>;
type NewStepTwo = z.infer<typeof stylistSchema>;
type NewStepThree = z.infer<typeof dateTimeSchema>;
type NewStepFour = z.infer<typeof userDetailsSchema>;

type NewAppointmentSchema = NewStepOne &
  NewStepTwo &
  NewStepThree &
  NewStepFour;

const DEFAULT_VALUES = {
  step1: {
    id: "",
  },
  step2: {
    id: "",
  },
  step3: {
    day: "",
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
  type NewAppointmentSchema,
  DEFAULT_VALUES,
};
