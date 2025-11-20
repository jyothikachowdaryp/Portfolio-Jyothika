import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Website-Jyothika/", // Assuming this will be the repo name for GitHub Pages
});
