import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Sparkles, Calendar, User } from "lucide-react";
import type { NewStepFour } from "../schema/newAppointments";
import { useFormContext } from "react-hook-form";
import { useAppointment } from "../hooks/useAppointment";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";

export function Step4() {
  const { control } = useFormContext<NewStepFour>();
  const { booked, form } = useAppointment();

  const bookingInfo = form.getValues();

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
            <div key={bookingInfo.step1.id}>
              <p>{String(booked?.service.name)}</p>
              <p className="text-muted-foreground">
                {String(booked?.service.description)}
              </p>
            </div>
          </div>
          <div
            className="flex flex-row gap-2 items-start"
            key={bookingInfo.step2.id}>
            <User size={18} className="text-[#CE8E33]" />
            <div>
              <p>{String(booked?.stylist.name)}</p>
              <p className="text-muted-foreground">
                {String(booked?.stylist.specialistIn)}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <Calendar size={18} className="text-[#CE8E33]" />
            <div>
              <p>{bookingInfo.step3.day}</p>
              <p className="text-muted-foreground">
                {bookingInfo.step3.time}
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div
          className="flex flex-row justify-between mt-4 font-[IM-FELL-French-Canon] text-lg"
          key={bookingInfo.step1.id}>
          <p className="text-[#795B53]">Total</p>
          <p>R$ {String(booked?.service.price)}</p>
        </div>
      </div>
    </div>
  );
}
