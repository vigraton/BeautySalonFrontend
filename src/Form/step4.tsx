import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Sparkles, Calendar, User } from "lucide-react";
import type { AppointmentSchema } from "../schema/appointment";
import { useFormContext } from "react-hook-form";
import { useAppointment } from "../hooks/useAppointment";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";

// Acho que aqui vou ter que usar contexto para o formulário
// para pegar as respostas anteriores.
// useFormContext - algo assim
// Foi usado também na kippis!!!

export function Step4() {
  const { control } = useFormContext<AppointmentSchema>();
  const { booking } = useAppointment();

  return (
    <div className="flex flex-row w-full justify-between gap-12">
      <div className="flex flex-col gap-4 w-[50%]">
        <FormField
          name="step4.fullname"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Digite seu nome completo"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="step4.email"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="exemplo@gmail.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="step4.telephone"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="11 99999-9999" type="tel" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="step4.observations"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Algo mais que possamos fazer por você"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-[40%] bg-[#F7F2EA] rounded-2xl p-6">
        <p className="text-[#CE8E33] font-medium">SEU AGENDAMENTO</p>
        <div className="flex flex-col gap-2 mt-4 mb-4">
          <div className="flex flex-row gap-2 items-start">
            <Sparkles size={18} className="text-[#CE8E33]" />
            <div>
              <p>{String(booking?.step1.name)}</p>
              <p className="text-muted-foreground">
                {String(booking?.step1.duration)}
              </p>
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
