import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";

import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/Logo.svg" height={18} width={120} alt="FSW Barber" />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="cursor-pointer">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
