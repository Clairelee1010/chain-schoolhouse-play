// @lovable.dev/vite-tanstack-config already includes the required
// TanStack Start / React / Tailwind / Nitro plugins.
// Do NOT add duplicate plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // SPA mode for static hosting such as GitHub Pages.
    spa: { enabled: true },

    // Keep the existing server entry used by Lovable/Nitro.
    server: { entry: "server" },
  },
});
