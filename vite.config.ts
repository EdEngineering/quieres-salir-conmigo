import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://EdEngineering.github.io/quieres-salir-conmigo",
  plugins: [react()],
});
