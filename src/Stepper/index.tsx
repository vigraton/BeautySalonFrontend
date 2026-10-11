import { cn } from "../../lib/utils";
import type { Stepper, Step } from "@stepperize/react";
import { Check } from "lucide-react";

// extends significa herdar e ampliar o formato de outra interface:
// A interface nova inclui as propriedades da base e pode acrescentar outras.

// BaseStepProps contém todas as propriedades de Step mais title: string.
// Se Step já tiver uma propriedade title, ela precisa ser compatível com
// essa declaração.

interface BaseStepProps extends Step {
  title: string;
}

// extends está sendo usado como restrição de tipo genérico. Quer dizer que
// T deve ser um array de objetos que estendem BaseStepProps. Por exemplo,
// arrays de etapas com id e title seriam aceitos, desde que também atendam
// ao tipo Step.

interface StepperProps<T extends BaseStepProps[]> {
  stepper: Stepper<T>;
}

export function StepperList<T extends BaseStepProps[]>({
  stepper,
}: StepperProps<T>) {
  function getStepStatus(stepIndex: number) {
    const currentIndex = stepper.index;

    if (stepIndex === currentIndex) return "active";
    if (stepIndex < currentIndex) return "success";
    return "inactive";
  }

  return (
    <ul className="flex items-center gap-10">
      {stepper.steps.map((step, index) => {
        const status = getStepStatus(index);

        return (
          <li
            key={step.id}
            data-status={status}
            className="group flex flex-col items-center ">
            <div
              className={cn(
                "size-10 flex items-center justify-center bg-[#FCF8F1] border border-[#E5DED4] rounded-full",
                "group-data-[status=active]:bg-[#35251B] group-data-[status=active]:border-0",
              )}>
              <span
                className={cn(
                  "group-data-[status=success]:hidden block group-data-[status=active]:text-white",
                )}>
                {index + 1}
              </span>
              <Check className="hidden group-data-[status=success]:block" />
            </div>
            <p>{step.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
