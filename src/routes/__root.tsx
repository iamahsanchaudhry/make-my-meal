// src/routes/__root.tsx
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar
          onToggleSearch={() => setIsSearchOpen((prev) => !prev)}
          isSearchOpen={isSearchOpen}
        />

        {/* Show search bar only when toggled */}
        {isSearchOpen && (
          <div className=" px-4 py-3">
            <SearchBar />
          </div>
        )}

        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    );
  },
});
