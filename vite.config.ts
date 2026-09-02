import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Tells the internal Nitro engine to compile this as a static pre-rendered website
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/"],
      crawlLinks: true
    }
  }
});
