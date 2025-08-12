// src/components/Navbar.tsx
import { CookingPot, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useEffect, useState, type JSX } from "react";
import { cn } from "../lib/utils";
import { Link } from "@tanstack/react-router";
import { getAllAreas, getAllCategories } from "@/api/mealsAPI";
import type { MealCategory } from "@/types/categoriesType";
import type { MealArea } from "@/types/AreaType";

type NavigationLink =
  | {
      href: string;
      label: string;
      submenu: false;
    }
  | {
      label: string;
      submenu: true;
      type: "category" | "area";
      itemCategory: MealCategory[];
      itemArea: MealArea[];
    };

    type SearchBarProps = {
  onToggleSearch?: () => void; // optional callback, no params, no return
  isSearchOpen ?: boolean; // optional callback with query
};

export default function Navbar({ onToggleSearch, isSearchOpen  }: SearchBarProps): JSX.Element {
  const [categories, setCategories] = useState<MealCategory[]>([]);
  const [areas, setAreas] = useState<MealArea[]>([]);
  const navigationLinks: NavigationLink[] = [
    { href: "/", label: "Home", submenu: false },
    {
      label: "Categories",
      submenu: true,
      type: "category",
      itemCategory: categories,
      itemArea: [],
    },
    {
      label: "Area",
      submenu: true,
      type: "area",
      itemCategory: [],
      itemArea: areas,
    },
    { href: "/about", label: "About", submenu: false },
  ];
  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
    getAllAreas()
      .then((res) => {
        setAreas(res);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
    console.log(navigationLinks);
  }, []);
  return (
    <header className="border-b px-4 md:px-6 dark:bg-black dark:text-white">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden font-bold "
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12L20 12" />
                  <path d="M4 12H20" />
                  <path d="M4 12H20" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <div className=" flex items-center justify-between px-2 py-2 border-b border-border">
                <h3 className="text-md font-bold">MAKE MY MEAL</h3>
                <ModeToggle />
              </div>
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {"submenu" in link && link.submenu ? (
                        <>
                          <div className="text-black font-bold px-2 py-1.5 text-md">
                            {link.label}
                          </div>
                          <ul className="max-h-48 overflow-y-auto px-2">
                            {link.type === "category"
                              ? link.itemCategory.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      to="/category/$categoryName"
                                      params={{
                                        categoryName: item.strCategory,
                                      }}
                                      className="py-1.5 blockrounded-md hover:bg-slate-200"
                                    >
                                      {item.strCategory}
                                    </Link>
                                  </li>
                                ))
                              : link.type === "area"
                                ? link.itemArea.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <Link
                                        to="/area/$areaName"
                                        params={{ areaName: item.strArea }}
                                        className="py-1.5 block rounded-md hover:bg-slate-200"
                                      >
                                        {item.strArea}
                                      </Link>
                                    </li>
                                  ))
                                : null}
                          </ul>
                        </>
                      ) : (
                        <Link to={link.href} className="py-1.5 block">
                          {link.label}
                        </Link>
                      )}
                      {index < navigationLinks.length - 1 && (
                        <Separator className="my-1" />
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo + Desktop Menu */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-primary hover:text-primary/90 flex items-center gap-2"
            >
              <CookingPot />
              <h3 className="font-bold hidden md:block">MAKE MY MEAL</h3>
            </Link>

            <NavigationMenu className=" max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="relative z-10">
                    {"submenu" in link && link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground bg-transparent px-2 py-1.5 font-semibold">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-1 z-auto">
                          <ul className={cn("h-52 overflow-y-auto min-w-64")}>
                            {link.type === "category"
                              ? link.itemCategory.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      to="/category/$categoryName"
                                      params={{
                                        categoryName: item.strCategory,
                                      }}
                                      className="block px-2 py-1.5 rounded-md hover:bg-slate-200"
                                    >
                                      <div>{item.strCategory}</div>
                                    </Link>
                                  </li>
                                ))
                              : link.itemArea.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      to="/area/$areaName"
                                      params={{ areaName: item.strArea }}
                                      className="py-1.5 px-2 block rounded-md hover:bg-slate-200"
                                    >
                                      <div>{item.strArea}</div>
                                    </Link>
                                  </li>
                                ))}
                            {}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="text-primary hover:text-muted-foreground py-1.5 font-semibold"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSearch}
            aria-label="Toggle Search"
          >
            <Search className={isSearchOpen ? "text-primary" : ""} />
          </Button>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
