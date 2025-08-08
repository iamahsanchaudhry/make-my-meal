import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
