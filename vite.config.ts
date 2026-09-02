import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Passes the object type required by the schema validator to trigger an SPA layout
    spa: {}
  }
});
