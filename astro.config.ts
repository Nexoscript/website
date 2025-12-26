import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        "Content-Security-Policy":
          "frame-ancestors 'self' https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com;",
      },
    },
  },
});
