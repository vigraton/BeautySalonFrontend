import { Card } from "../../components/ui/card";
import { ServiceCardForm } from "../components/ServiceCard";

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="p-6 flex flex-col items-center gap-4 w-[70%]">{children}</Card>
  );
}

export function Step1() {
  return (
    <FormLayout>
      <div className="grid grid-cols-2 gap-4">
        <ServiceCardForm />
        <ServiceCardForm />
        <ServiceCardForm />
        <ServiceCardForm />
      </div>
    </FormLayout>
  );
}
