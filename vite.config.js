import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external devices to access
    port: 5173, // Default port
  },
  plugins: [react()],
});
