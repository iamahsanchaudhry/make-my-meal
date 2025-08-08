// src/components/Navbar.tsx
import { CookingPot } from "lucide-react";
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
import type { JSX } from "react";
import { cn } from "../lib/utils";
import { Link } from "@tanstack/react-router";

// Types
type SimpleSubItem = { href: string; label: string; description?: string };

type NavigationLink =
  | {
      href: string;
      label: string;
      submenu: false;
    }
  | {
      label: string;
      submenu: true;
      type: "simple" | "description" | "icon";
      items: SimpleSubItem[];
    };

const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home", submenu: false },
  {
    label: "Categories",
    submenu: true,
    type: "description",
    items: [
      {
        href: "/components",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "/docs",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "/templates",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  {
    label: "Area",
    submenu: true,
    type: "simple",
    items: [
      { href: "/area/american", label: "American" },
      { href: "/area/british", label: "British" },
      { href: "/area/canadian", label: "Canadian" },
      { href: "/area/chinese", label: "Chinese" },
    ],
  },
  { href: "/about", label: "About", submenu: false },
];

export default function Navbar(): JSX.Element {
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
                <ModeToggle/>
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
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link to={item.href} className="py-1.5 block">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
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
                  <NavigationMenuItem key={index}>
                    {"submenu" in link && link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground bg-transparent px-2 py-1.5 font-semibold">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 p-1">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={item.href}
                                  className="block px-2 py-1.5"
                                >
                                  {link.type === "description" &&
                                  item.description ? (
                                    <div className="space-y-1">
                                      <div className="font-medium">
                                        {item.label}
                                      </div>
                                      <p className="text-muted-foreground text-xs">
                                        {item.description}
                                      </p>
                                    </div>
                                  ) : (
                                    <div>{item.label}</div>
                                  )}
                                </Link>
                              </li>
                            ))}
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
