import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { FormLayout } from "./step1";

// Acho que aqui vou ter que usar contexto para o formulário
// para pegar as respostas anteriores.
// O nome deve ser outro, mas é próprio para forms.
// Foi usado também na kippis!!!

export function Step4() {
  return (
    <FormLayout>
      <div className="flex flex-row w-full gap-12">
        <div className="flex flex-col gap-4 w-[50%]">
          <Input placeholder="Digite seu nome completo" type="text" />
          <Input placeholder="exemplo@gmail.com" type="email" />
          <Input placeholder="11 99999-9999" type="tel" />
          <Textarea placeholder="Algo mais que possamos fazer por você" />
        </div>
        <div className="w-[40%] bg-[#F7F2EA] rounded-2xl p-6">
          <p className="text-[#CE8E33] font-medium">SEU AGENDAMENTO</p>
        </div>
      </div>
    </FormLayout>
  );
}
