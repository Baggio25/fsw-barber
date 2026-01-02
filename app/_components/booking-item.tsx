import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/26611668?v=4"
                  alt="RB"
                />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <p className="text-sm">Vintage Barber</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Janeiro</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">18:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingItem;
