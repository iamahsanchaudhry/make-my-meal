import {
  CookingPot,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import type { JSX } from "react";
import { cn } from "../lib/utils";

// Type definitions
type SimpleSubItem = { href: string; label: string; description?: string };
type IconSubItem = { href: string; label: string; icon: "BookOpenIcon" | "LifeBuoyIcon" | "InfoIcon" };

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
    }
  | {
      label: string;
      submenu: false;
      type: "icon";
      items: IconSubItem[];
    };

const navigationLinks: NavigationLink[] = [
  { href: "#", label: "Home", submenu: false },
  {
    label: "Categories",
    submenu: true,
    type: "simple",
    items: [
      {
        href: "#",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "#",
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
      { href: "#", label: "American" },
      { href: "#", label: "British" },
      { href: "#", label: "Canadian" },
      { href: "#", label: "Chinese" },
    ],
  },
  { href: "#", label: "About", submenu: false },
];

export default function Navbar(): JSX.Element {

  return (
    <header className="border-b px-4 md:px-6 dark:bg-black dark:text-white">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden font-bold text-white bg-neutral-900 dark:bg-white dark:text-black"
                variant="ghost"
                size="icon"
              >
                {/* Hamburger Icon */}
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
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <div className="flex items-center justify-between px-2 py-2 border-b border-border">
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
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={""} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
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

          {/* Logo and Desktop Nav */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary hover:text-primary/90 flex justify-between gap-2"
            >
              <CookingPot />
              <h3 className="font-bold hidden md:block">MAKE MY MEAL</h3>
            </a>

            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {"submenu" in link && link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 font-semibold">
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
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {link.type === "description" && item.description && (
                                    <div className="space-y-1">
                                      <div className="font-medium">
                                        {item.label}
                                      </div>
                                      <p className="text-muted-foreground text-xs">
                                        {item.description}
                                      </p>
                                    </div>
                                  )}

                                  {link.type === "simple" && (
                                    <div>{item.label}</div>
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={""}
                        className="text-primary hover:text-muted-foreground py-1.5 font-semibold"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <Button asChild variant="outline" size="sm" className="text-sm">
            <a href="#">Sign In</a>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <a href="#">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
