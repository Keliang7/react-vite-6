import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "~": path.join(__dirname, "./src/assets"),
      "~root": path.join(__dirname, "."),
    },
  },
});
