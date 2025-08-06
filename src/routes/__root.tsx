// src/routes/__root.tsx
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
      
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
