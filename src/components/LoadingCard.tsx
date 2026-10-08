import type { ReactNode } from "react";
import searchDoodle from "@/assets/doodle-search.png";
import sleepDoodle from "@/assets/doodle-sleep.png";
import organizeDoodle from "@/assets/doodle-organize.png";

export type LoadingVariant = "search" | "sleep" | "organize";
export type LoadingState = "loading" | "unavailable" | "ready";

const variants = {
  search: {
    image: searchDoodle,
    alt: "Bonequinho curioso segurando uma lupa",
    title: "Procurando as peças...",
    description: "Só um instante. Estamos buscando as informações para você.",
  },
  sleep: {
    image: sleepDoodle,
    alt: "Bonequinho cochilando com uma xícara de café",
    title: "Só mais um cafezinho...",
    description: "Estamos preparando tudo. Já, já as informações aparecem.",
  },
  organize: {
    image: organizeDoodle,
    alt: "Bonequinho organizando caixas e papéis no ar",
    title: "Arrumando a bagunça",
    description: "Um pouquinho de paciência enquanto colocamos tudo no lugar.",
  },
} satisfies Record<
  LoadingVariant,
  { image: string; alt: string; title: string; description: string }
>;

export function LoadingCard({
  variant = "search",
  state = "loading",
  selected = false,
  children,
}: {
  variant?: LoadingVariant;
  state?: LoadingState;
  selected?: boolean;
  children?: ReactNode;
}) {
  if (state === "ready") return <>{children}</>;
  const content = variants[variant];
  const unavailable = state === "unavailable";

  return (
    <div
      className="sketch-card text-center place-items-center"
      data-variant={variant}
      data-selected={selected}
      role="status"
      aria-live="polite"
      aria-busy={!unavailable}>
      <div className="doodle-frame">
        <img
          src={content.image}
          alt={content.alt}
          width={164}
          height={164}
          loading="lazy"
        />
      </div>
      <h2 className="sketch-title">
        {unavailable ? "Ainda não nos conectamos" : content.title}
      </h2>
      <p className="sketch-description">
        {unavailable
          ? "Assim que a conexão estiver pronta, as informações aparecem por aqui."
          : content.description}
      </p>
      <div className="loading-indicator" aria-hidden="true">
        {unavailable ? (
          <span className="sketch-status">Aguardando conexão</span>
        ) : variant === "search" ? (
          <div className="sketch-track">
            <span />
          </div>
        ) : variant === "sleep" ? (
          <div className="sketch-dots">
            <i />
            <i />
            <i />
          </div>
        ) : (
          <span className="sketch-status">
            <i /> Organizando os dados
          </span>
        )}
      </div>
    </div>
  );
}
