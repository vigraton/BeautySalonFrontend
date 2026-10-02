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
