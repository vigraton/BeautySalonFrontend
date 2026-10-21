import { Check } from "lucide-react";
import type { AppointmentResponse } from "../types/appointment";
import { BookingCard } from "../components/BookingCard";

export function Booking({ createdBooking }: AppointmentResponse) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] flex items-center justify-center">
          <Check />
        </div>
        <div className="font-[IM-FELL-French-Canon] text-lg mt-2">
          <h2>Agendamento concluído</h2>
        </div>
        <p className="text-muted-foreground text-center">
          A confirmação do agendamento será enviada para o email
          {createdBooking.userDetails.email}
        </p>
      </div>
      <BookingCard createdBooking={createdBooking} />
    </>
  );
}
