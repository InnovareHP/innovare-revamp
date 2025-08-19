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
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
      className={`fixed top-0 left-0 right-0 mx-auto max-w-xl rounded-b-2xl z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-transparent shadow-none text-white"
      }`}
    >
      <div className="flex items-center justify-center px-10 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
          </div>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="block rounded-md p-3 hover:bg-gray-50 transition"
                        >
                          <p className="text-sm font-medium">
                            Healthcare Solutions
                          </p>
                          <p className="text-xs text-gray-500">
                            Tools for healthcare providers
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
                          <p className="text-sm font-medium">
                            Digital Marketing
                          </p>
                          <p className="text-xs text-gray-500">
                            Modern strategies for growth
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
                          <p className="text-sm font-medium">
                            Community Outreach
                          </p>
                          <p className="text-xs text-gray-500">
                            Building stronger communities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Resources
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
                  Integration
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="h-9 px-3 text-sm font-medium"
                  >
                    Log in
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
