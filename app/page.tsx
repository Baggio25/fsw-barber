import Image from "next/image";
import { SearchIcon } from "lucide-react";

import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";

import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Footer from "./_components/footer";
import Sections from "./_components/sections";

const Home = async () => {
  const barberShops = await db.barbershop.findMany({});
  const popularBarberShops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rodrigo!</h2>
        <p>Dom. 28 de dezembro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="cursor-pointer gap-2"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner01.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>

        <BookingItem />

        <Sections title="Recomendados">
          {barberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </Sections>

        <Sections title="Populares">
          {popularBarberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </Sections>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
