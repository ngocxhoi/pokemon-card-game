// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-lodash",
  ],
  css: ["@/assets/css/global.css"],
  lodash: {
    prefix: "_.",
    upperAfterPrefix: false,
  },
});
