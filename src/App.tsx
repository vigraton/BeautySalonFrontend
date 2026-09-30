import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";
import { StylistCard } from "./components/StylistCard";

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
        <div className="p-14">
          <h3>Nosso menu</h3>
          <h1>Serviços feitos para você</h1>

          <div className="grid grid-cols-2 gap-4 mt-8 pr-20 pl-20">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
        <div className="h-150 w-full bg-[#F2EADD] flex flex-col items-center pt-8">
          <h4>CONHEÇA NOSSO TIME</h4>
          <h1>Quem você pode confiar</h1>
          <div className="flex flex-row gap-4">
            <StylistCard />
            <StylistCard />
            <StylistCard />
          </div>
        </div>
      </section>
    </div>
  );
}
