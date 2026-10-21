import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Booking } from "./booking";
import { Form } from "../components/ui/form";
import { FormLayout } from "./step1";
import { StepperList } from "../Stepper";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppointment } from "../hooks/useAppointment";

export function FormPage() {
  const { stepper, form, createBooking, booked } = useAppointment();

  async function handleSubmit() {
    try {
      if (!stepper.isLast) {
        stepper.next();
        return;
      }
      await createBooking(form.getValues());
      
    } catch (error) {
      console.error("HANDLE SUBMIT ERROR: ",error);
    }
  }

  return (
    <FormLayout>
      <StepperList stepper={stepper} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {stepper.match({
            step1: () => <Step1 />,
            step2: () => <Step2 />,
            step3: () => <Step3 />,
            step4: () => <Step4 />,            
            booking: () => (booked ? <Booking createdBooking={booked} /> : null),
          })}
          <div className="flex flex-row justify-between mt-8">
            <Button
              type="button"
              disabled={stepper.isFirst}
              onClick={() => stepper.prev()}
              variant="secondary"
              className="bg-white cursor-pointer p-6 rounded-full hover:bg-accent text-muted-foreground">
              <ArrowLeft />
              Anterior
            </Button>
            <Button
              type="submit"
              className="bg-[#35251B] hover:bg-[#4c3425] cursor-pointer p-6 rounded-full">
              Próximo
              <ArrowRight />
            </Button>
          </div>
        </form>
      </Form>
    </FormLayout>
  );
}
