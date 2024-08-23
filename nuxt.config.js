const googleFontsLink =
  'https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "William Hatcher - Résumé",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "William Hatcher's résumé. Built with NuxtJS and Tailwind CSS." },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'William Hatcher - Résumé',
      },
      {
        property: 'og:description',
        content:
          "William Hatcher's résumé. Built with NuxtJS and Tailwind CSS.",
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        crossorigin: true,
        href: googleFontsLink,
      },
      {
        rel: 'stylesheet',
        href: googleFontsLink,
      },
    ],
  },

   /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/utilities.css', '@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/global-data'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  },
  env: {
    isProduction: Boolean(process.env.CI),
    gitlabCi: {
      timestamp: new Date().toISOString(),
      projectUrl: process.env.CI_PROJECT_URL,
      commitSha: process.env.CI_COMMIT_SHORT_SHA,
    },
  }
}
