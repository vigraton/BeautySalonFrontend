import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-8 items-start gap-y-5 min-h-screen">
        <h3 className="flex flex-row gap-4 text-white">CABELO UNHAS PELE</h3>
        <div className="text-white">
          <h1>A arte de sentir bela</h1>
        </div>
        <p className="text-white">
          Potter ipsum wand elf parchment wingardium. Parchment orbs
          peruvian-night-powder them godric’s.
        </p>

        <div className="flex flex-row gap-4 text-white w-full">
          <button className="cursor-pointer p-3 text-center rounded-full h-1/2 bg-[#35251B] flex flex-row items-center gap-1">
            Agendar um horário
            <ArrowRight />
          </button>
          <button className="cursor-pointer border border-white w-40 h-1/2 backdrop-blur-sm p-3 text-center rounded-full font-medium bg-white/20">
            Ver serviços
          </button>
        </div>
      </div>

      <section className="bg-[#FCF8F1]">
        <h3>Nosso menu</h3>
        <h1>Serviços feitos para você</h1>
      </section>
    </div>
  );
}
