import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";
import { StylistCard } from "./components/StylistCard";
import { LoadingCard } from "./components/LoadingCard";
import { FormPage } from "./Form/FormPage";
import { Footer } from "./components/Footer";

import { useEffect } from "react";
import { useServices } from "./hooks/useServices";
import { useStylists } from "./hooks/useStylists";

export default function App() {
  const { getServices, services } = useServices();
  const { getStylists, stylists } = useStylists();

  const bookings = [
    {
      id: 1,
      title: "SERVIÇO",
      description: "Manicure",
    },
    {
      id: 2,
      title: "PROFISSIONAL",
      description: "Fulaninho",
    },
    {
      id: 3,
      title: "HORÁRIO",
      description: "Sexta-feira, 24 de julho - 11:00",
    },
    {
      id: 4,
      title: "PREÇO",
      description: "R$ 25,00",
    },
    {
      id: 5,
      title: "OBSERVAÇÕES",
      description: "Nenhuma obeservação",
    },
  ];

  useEffect(() => {
    getServices();
    getStylists();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-8 items-start gap-y-5 min-h-screen justify-center">
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
          <h3 className="font-[Cormorant-Garamond] text-lg text-[#CE8E33]">
            Nosso menu
          </h3>
          <div className="font-[IM-FELL-French-Canon] text-lg ">
            <h1>Serviços para você</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pr-20 pl-20">
            {services.length > 0 ? (
              services?.map((service) => (
                <ServiceCard
                  key={service.id}
                  services={service}
                  mode="default"
                />
              ))
            ) : (
              <LoadingCard variant="sleep" />
            )}
          </div>
        </div>

        <div className="h-150 w-full bg-[#F2EADD] flex flex-col items-center pt-8">
          <h4 className="font-[Cormorant-Garamond] text-lg text-[#CE8E33]">
            CONHEÇA NOSSO TIME
          </h4>
          <div className="font-[IM-FELL-French-Canon] text-lg ">
            <h1>Quem você pode confiar</h1>
          </div>
          <div className="flex flex-row gap-4">
            {stylists.length > 0 ? (
              stylists.map((stylist) => (
                <StylistCard
                  stylists={stylist}
                  key={stylist.id}
                  mode="default"
                />
              ))
            ) : (
              <LoadingCard variant="sleep" />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center pt-8">
          <h4 className="font-[Cormorant-Garamond] text-lg text-[#CE8E33]">
            A G E N D A M E N T O
          </h4>
          <div className="font-[IM-FELL-French-Canon] text-lg">
            <h1>Faça sua reserva</h1>
          </div>
        </div>
        <div className="p-10 flex items-center justify-center ">
          <FormPage />
        </div>
      </section>

      <Footer />
    </div>
  );
}
