import { useEffect } from "react";
import { StylistCard } from "../components/StylistCard";
import { useStylists } from "../hooks/useStylists";

export function Step2() {
  const { getStylists, stylists } = useStylists();

  useEffect(() => {
    getStylists();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {stylists &&
        stylists.map((stylist) => (
          <StylistCard key={stylist.id} stylists={stylist} mode="form" />
        ))}
    </div>
  );
}
