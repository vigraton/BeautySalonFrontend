export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
}

export interface Services {
  services: Service
  mode?: "default" | "form";
  onClick?: () => void
}

export interface Stylist {
  id: string;
  name: string;
  specialistIn: string;
  description: string;
}

export interface Stylists {
  stylists: Stylist
  mode?: "default" | "form"
}

// Esse futuramente vai substituir Services e Stylists 
// para ser usado nos Cards, que tbm se tornará um só.
export interface CardProps {
  items: Service | Stylist
  mode: "default" | "form"
  onClick?: () => void
}
