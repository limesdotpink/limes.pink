// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/a11y', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/hints', '@nuxt/icon/module', '@nuxt/image', '@nuxtjs/i18n', 'nuxt-seo-utils'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: './src',
  site: {
    url: 'https://limes.pink',
    name: 'limes.pink',
  },

})
