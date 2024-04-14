import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react()],
  define: {
    "process.env": {},
  },
});