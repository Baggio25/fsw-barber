import BarberShopItem from "../_components/barbershop-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface BarberShopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  const barberShops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <Search />
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultado para - {searchParams.search}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberShopsPage;
