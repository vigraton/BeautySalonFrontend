import { useEffect, useState } from "react";
import { StylistCard } from "../components/StylistCard";
import { useStylists } from "../hooks/useStylists";

export function Step2() {
  const { getStylists, stylists } = useStylists();
  const [selectedId, setSelectedId] = useState<String | undefined>(undefined);

  useEffect(() => {
    getStylists();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {stylists &&
        stylists.map((stylist) => (
          <StylistCard
            mode="form"
            key={stylist.id}
            stylists={stylist}
            value={String(selectedId)}
            onClick={() => setSelectedId(selectedId)}
          />
        ))}
    </div>
  );
}
