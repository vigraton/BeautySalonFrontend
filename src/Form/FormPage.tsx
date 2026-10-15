import { StepOne } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Form } from "../components/ui/form";
import { FormLayout } from "./step1";
import { StepperList } from "../Stepper";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppointment } from "../hooks/useAppointment";
import type { AppointmentSchema } from "../schema/appointment";

export function FormPage() {
  const { stepper, form, createBooking, booking } = useAppointment();

  async function handleSubmit(data: AppointmentSchema) {
    try {
      await createBooking(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormLayout>
      <StepperList stepper={stepper} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {stepper.match({
            step1: () => <StepOne />,
            step2: () => <Step2 />,
            step3: () => <Step3 />,
            step4: () => <Step4 />,
            step5: () => <Step5 email={booking?.step4.email!} />,
          })}
        </form>

        <div className="flex flex-row justify-between mt-8">
          <Button
            disabled={stepper.isFirst}
            onClick={() => stepper.prev()}
            variant="secondary"
            className="bg-white cursor-pointer p-6 rounded-full hover:bg-accent text-muted-foreground">
            <ArrowLeft />
            Anterior
          </Button>
          <Button
            type="submit"
            onClick={() => stepper.next()}
            className="bg-[#35251B] hover:bg-[#4c3425] cursor-pointer p-6 rounded-full">
            Próximo
            <ArrowRight />
          </Button>
        </div>
      </Form>
    </FormLayout>
  );
}
