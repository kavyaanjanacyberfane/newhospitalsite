// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Hospital Site",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
       link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
        }
      ],
    },
  },
});
