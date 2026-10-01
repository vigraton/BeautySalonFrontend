export interface AppointmentResponse {
  createdBooking: {
    id: string;
    user_id: string;
    schedule_id: string;
    stylist_id: string;
    service_id: string;
    service: {
      id: string;
      name: string;
      description: string;
      duration: string;
      price: number;
    };
    stylist: {
      id: string;
      name: string;
      specialistIn: string;
      description: string;
    };
    schedule: {
      id: string;
      day: string;
    };
    userDetails: {
      id: string;
      fullname: string;
      email: string;
      telephone: number;
      observations?: string;
    };
  };
}
