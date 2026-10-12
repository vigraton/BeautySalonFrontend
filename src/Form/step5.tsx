import { Check } from "lucide-react";

interface BookingCardProps {
  title: string;
  description: string;
}

interface BookingCards {
  bookings?: BookingCardProps[]
  email: string;
}

export function BookingCard({ title, description }: BookingCardProps) {
  return (
    <div className="bg-[#F7F2EA] text-left p-4 rounded-xl">
      <p className="font-medium text-[#CE8E33]">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export function Step5({ bookings, email }: BookingCards) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#E2A43C] to-[#AF7F2E] flex items-center justify-center">
          <Check />
        </div>
        <div className="font-[IM-FELL-French-Canon] text-lg mt-2">
          <h2>Agendamento concluído</h2>
        </div>
        <p className="text-muted-foreground text-center">
          A confirmação do agendamento será enviada para o email
          {email}
        </p>
      </div>
      <div className="grid grid-cols-3 w-full gap-4 mt-8">
        {bookings?.map((book) => (
          <BookingCard title={book.title} description={book.description} />
        ))}
      </div>
    </>
  );
}
