"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 max-w-2xl mx-auto rounded-b-2xl transition-colors duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
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
              <Link href="/login">
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
              <NavigationMenuTrigger className="bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block rounded-md p-3 hover:bg-gray-50 transition"
                      >
                        <p className="text-sm font-medium">Case Studies</p>
                        <p className="text-xs text-gray-500">
                          Real-world success stories
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block rounded-md p-3 hover:bg-gray-50 transition"
                      >
                        <p className="text-sm font-medium">Blog</p>
                        <p className="text-xs text-gray-500">
                          Insights & trends
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block rounded-md p-3 hover:bg-gray-50 transition"
                      >
                        <p className="text-sm font-medium">Whitepapers</p>
                        <p className="text-xs text-gray-500">
                          In-depth research
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="block rounded-md p-3 hover:bg-gray-50 transition"
                      >
                        <p className="text-sm font-medium">Templates</p>
                        <p className="text-xs text-gray-500">
                          Ready-to-use tools
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-sm font-medium">
                Clients
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/login">
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
              <Link href="/login">
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
                  Log in
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger className="block md:hidden text-white">
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
