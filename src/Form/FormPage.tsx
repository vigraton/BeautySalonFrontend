import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Form } from "react-hook-form";
import { FormLayout } from "./step1";
import { StepperList } from "../Stepper";

import { useAppointment } from "../hooks/useAppointment";

export function FormPage() {
  const { stepper, form } = useAppointment();

  return (
    <FormLayout>
      <StepperList stepper={stepper} />

      <Form {...form}>
        {stepper.match({
          step1: () => <Step1 />,
          step2: () => <Step2 />,
          step3: () => <Step3 />,
          step4: () => <Step4 />,
          step5: () => <Step5 />,
        })}
      </Form>
    </FormLayout>
  );
}
