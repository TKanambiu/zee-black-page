import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Overrides the framework setting to build a standard browser-safe SPA
  server: {
    prerender: false
  },
  // Tells TanStack Start to output client-only static entry files
  tanstackStart: {
    spa: true
  }
});
