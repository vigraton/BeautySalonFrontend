import type { AppointmentResponse } from "../types/appointment";
import { useAppointment } from "../hooks/useAppointment";

export function BookingCard({ createdBooking }: AppointmentResponse) {
  const { form } = useAppointment();

  const values = form.getValues()
  console.log("SERVICE: ", values.step1.id)
  console.log("STYLIST: ", values.step1.id)
  console.log("DAY: ", values.step1.id)
  console.log("TIME: ", values.step1.id)

  return (
    <div className="grid grid-cols-3 w-full gap-4 mt-8">
      <div
        className="bg-[#F7F2EA] text-left p-4 rounded-xl"
        key={createdBooking.service_id}>
        <p className="font-medium text-[#CE8E33]">SERVIÇO</p>
        <p>{createdBooking.service.name}</p>
      </div>
      <div
        className="bg-[#F7F2EA] text-left p-4 rounded-xl"
        key={createdBooking.stylist_id}>
        <p className="font-medium text-[#CE8E33]">PROFISSIONAL</p>
        <p>{createdBooking.stylist.name}</p>
      </div>
      <div
        className="bg-[#F7F2EA] text-left p-4 rounded-xl"
        key={createdBooking.schedule_id}>
        <p className="font-medium text-[#CE8E33]">HORÁRIO</p>
        <p>
          {createdBooking.schedule.day} {createdBooking.schedule.time}
        </p>
      </div>
      <div
        className="bg-[#F7F2EA] text-left p-4 rounded-xl"
        key={createdBooking.service_id}>
        <p className="font-medium text-[#CE8E33]">PREÇO</p>
        <p>R$ {createdBooking.service.price}</p>
      </div>
      <div
        className="bg-[#F7F2EA] text-left p-4 rounded-xl"
        key={createdBooking.user_id}>
        <p className="font-medium text-[#CE8E33]">OBSERVAÇÕES</p>
        <p>{createdBooking.userDetails.observations}</p>
      </div>
    </div>
  );
}
