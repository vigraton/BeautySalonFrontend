import { Check } from "lucide-react";
import type { AppointmentResponse } from "../types/appointment";
import { BookingCard } from "../components/BookingCard";
import { Button } from "../components/ui/button";
import { useAppointment } from "../hooks/useAppointment";

export function Booking({ createdBooking }: AppointmentResponse) {
  const { stepper } = useAppointment();

  return (
    <div className="flex flex-col gap-y-8 justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] flex items-center justify-center">
          <Check />
        </div>
        <div className="font-[IM-FELL-French-Canon] text-lg mt-2">
          <h2>Agendamento concluído</h2>
        </div>
        <p className="text-muted-foreground text-center">
          A confirmação do agendamento será enviada para o email{" "}
          {createdBooking.userDetails.email}
        </p>
      </div>
      <BookingCard key={createdBooking.id} createdBooking={createdBooking} />
      <Button
        type="reset"
        onClick={() => {
          stepper.reset({ keepCompleted: true, keepData: true });
        }}
        className="bg-[#FCF8F1] hover:bg-[#F6ECDA] cursor-pointer rounded-full border border-[#E4DDD3] text-[#221811] w-1/4">
        Novo agendamento
      </Button>
    </div>
  );
}
