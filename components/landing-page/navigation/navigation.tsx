"use client";

import { useUser } from "@/components/provider/app-provider";
import { Button } from "@/components/ui/button";
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
import { useEffect, useState } from "react";

const Navigation = () => {
  const { session } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // control mobile sheet
  const pathname = usePathname();

  // desktop-only scroll behavior
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper: link to section whether you're on "/" or not
  const toHomeSection = (id: string) =>
    pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 max-w-2xl mx-auto rounded-b-2xl transition-colors duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-sm"
            : "bg-white sm:bg-primary"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between md:justify-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="InnovareHP"
            width={40}
            height={40}
          />
        </div>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList
            className={
              pathname === "/"
                ? isScrolled
                  ? "text-gray-800"
                  : "text-white"
                : "text-gray-800"
            }
          >
            <NavigationMenuItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  className={`h-9 px-3 text-sm font-medium ${
                    pathname === "/"
                      ? isScrolled
                        ? "text-gray-800"
                        : "text-white"
                      : "text-gray-800"
                  }`}
                >
                  Home
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={toHomeSection("services")}
                className="text-sm font-medium"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={toHomeSection("clients")}
                className="text-sm font-medium"
              >
                Clients
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={toHomeSection("team")}>
                <Button
                  variant="ghost"
                  className={`h-9 px-3 text-sm font-medium ${
                    pathname === "/"
                      ? isScrolled
                        ? "text-gray-800"
                        : "text-white"
                      : "text-gray-800"
                  }`}
                >
                  Team
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/brochure">
                <Button
                  variant="ghost"
                  className={`h-9 px-3 text-sm font-medium ${
                    pathname === "/"
                      ? isScrolled
                        ? "text-gray-800"
                        : "text-white"
                      : "text-gray-800"
                  }`}
                >
                  Brochure
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={session ? "/callback" : "/login"}>
                <Button
                  variant="ghost"
                  className={`h-9 px-3 text-sm font-medium ${
                    pathname === "/"
                      ? isScrolled
                        ? "text-gray-800"
                        : "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {session ? "Dashboard" : "Log in"}
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="block md:hidden p-2" aria-label="Open menu">
              {/* Mobile navbar background is white, keep icon dark for contrast */}
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
                InnovareHP
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
              >
                Home
              </Link>
              <Link
                href={toHomeSection("services")}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
              >
                Services
              </Link>
              <Link
                href={toHomeSection("clients")}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
              >
                Clients
              </Link>
              <Link
                href={toHomeSection("team")}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
              >
                Team
              </Link>
              <Link
                href="/brochure"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
              >
                Brochure
              </Link>

              <div className="h-px my-2 bg-border" />

              <Link
                href={session ? "/callback" : "/login"}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold hover:bg-muted"
              >
                {session ? "Dashboard" : "Log in"}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
