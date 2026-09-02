import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Forces TanStack Start to output standard standalone client SPA assets
    spa: {}
  }
});
