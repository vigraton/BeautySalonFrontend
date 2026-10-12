import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Sparkles, Calendar, User } from "lucide-react";
// import type { AppointmentSchema } from "../schema/appointment";
// import { useFormContext, useForm } from "react-hook-form";
import { useAppointment } from "../hooks/useAppointment";

// Acho que aqui vou ter que usar contexto para o formulário
// para pegar as respostas anteriores.
// useFormContext - algo assim
// Foi usado também na kippis!!!

// Não sei qual usar O)-(O

export function Step4() {
  // const { getValues } = useFormContext<AppointmentSchema>();
  const { booking } = useAppointment();

  return (
    <div className="flex flex-row w-full justify-between gap-12">
      <div className="flex flex-col gap-4 w-[50%]">
        <Input placeholder="Digite seu nome completo" type="text" />
        <Input placeholder="exemplo@gmail.com" type="email" />
        <Input placeholder="11 99999-9999" type="tel" />
        <Textarea placeholder="Algo mais que possamos fazer por você" />
      </div>
      <div className="w-[40%] bg-[#F7F2EA] rounded-2xl p-6">
        <p className="text-[#CE8E33] font-medium">SEU AGENDAMENTO</p>
        <div className="flex flex-col gap-2 mt-4 mb-4">
          <div className="flex flex-row gap-2 items-start">
            <Sparkles size={18} className="text-[#CE8E33]" />
            <div>
              <p>{String(booking?.step1.name)}</p>
              <p className="text-muted-foreground">{String(booking?.step1.duration)}</p>
            </div>
          </div>
          <div
            className="flex flex-row gap-2 items-start"
            key={booking?.step2.id}>
            <User size={18} className="text-[#CE8E33]" />
            <div>
              <p>{String(booking?.step2.name)}</p>
              <p className="text-muted-foreground">
                {String(booking?.step2.specialistIn)}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <Calendar size={18} className="text-[#CE8E33]" />
            <div>
              <p>{String(booking?.step3.date)}</p>
              <p className="text-muted-foreground">
                {String(booking?.step3.time)}
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div
          className="flex flex-row justify-between mt-4 font-[IM-FELL-French-Canon] text-lg"
          key={booking?.step1.id}>
          <p className="text-[#795B53]">Total</p>
          <p>R$ {String(booking?.step1.price)}</p>
        </div>
      </div>
    </div>
  );
}
