import { z } from "zod";

const appointmentResponse = z.object({
  createdBooking: z.object({
    id: z.string(),
    user_id: z.string(),
    schedule_id: z.string(),
    stylist_id: z.string(),
    service_id: z.string(),
    service: {
      id: z.string(),
      name: z.string(),
      description: z.string(),
      duration: z.string(),
      price: z.number(),
    },
    stylist: {
      id: z.string(),
      name: z.string(),
      specialistIn: z.string(),
      description: z.string(),
    },
    schedule: {
      id: z.string(),
      day: z.string(),
      time: z.string(),
    },
    userDetails: {
      id: z.string(),
      fullname: z.string(),
      email: z.string(),
      telephone: z.number(),
      observations: z.string().optional(),
    },
  }),
});

type AppointmentResponseSchema = z.infer<typeof appointmentResponse>;

export { appointmentResponse, type AppointmentResponseSchema };
