import { fileURLToPath } from "url";
import { URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // "@style": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       api: 'modern-compiler',
  //       additionalData: `@use "@/assets/styles/abstracts/_functions.scss" as function; @use "@/assets/styles/abstracts/_mixins.scss" as mixin; @use "@/assets/styles/abstracts/_placeholders.scss" as *;`
  //     }
  //   }
  // }
});
