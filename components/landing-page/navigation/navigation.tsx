"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toHomeSection = (id: string) =>
    pathname === "/" ? `#${id}` : `/#${id}`;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: toHomeSection("services") },
    { label: "Clients", href: toHomeSection("clients") },
    { label: "Branches", href: toHomeSection("branches") },
    { label: "Team", href: toHomeSection("team") },
    { label: "Contact Us", href: toHomeSection("contact-us") },
  ];

  return (
    <nav>
      <div className="relative z-50 flex items-center justify-between md:justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="InnovareHP"
            width={100}
            height={100}
            className="sm:w-full sm:h-16 w-12 h-12"
          />
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="text-gray-800">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label} asChild>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="text-sm font-medium hover:text-blue-600 duration-200"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="block md:hidden p-2" aria-label="Open menu">
              <MenuIcon className="w-6 h-6 text-gray-900" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 sm:w-80">
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/assets/logo.png"
                  alt="InnovareHP"
                  width={28}
                  height={28}
                />
                Innovare HP
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
