export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'peanutbutter',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }],
    script: [
      {
        "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      }, 
      {
        "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      },
      {
        "defer": true,
        "data-domain": "new.peanutbutter.es",
        "data-api": "/lucas/api/event",
        "src": "/lucas/js/script.js"
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //"vue-essential-slices/src/styles/styles.scss",
    "@/assets/scss/main"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-i18n.js'],
  router: {
    middleware: ['i18n']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [// https://go.nuxtjs.dev/eslint
  '@nuxtjs/eslint-module'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["@nuxtjs/prismic", {
    "endpoint": "https://peanutbutter.cdn.prismic.io/api/v2",
    "apiOptions": {
      "routes": [{
        "type": "page",
        "path": "/:uid"
      }]
    }
  }], ["nuxt-sm"], '@nuxtjs/style-resources',],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },

  styleResources: {
    scss: [
      "@/assets/scss/common/_variables.scss",
      "@/assets/scss/common/_mixins.scss"
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.unshift({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      }); // Move uid so it has higuer priority than lang

      let fromIndex = routes.map(route => route.name).indexOf('uid');
      let toIndex = 0;
      var uidRoute = routes[fromIndex];
      routes.splice(fromIndex, 1);
      routes.splice(toIndex, 0, uidRoute); // Move en so it has higuer than uid

      fromIndex = routes.map(route => route.name).indexOf('en');
      toIndex = 0;
      var uidRoute = routes[fromIndex];
      routes.splice(fromIndex, 1);
      routes.splice(toIndex, 0, uidRoute);
    }

  },
  storybook: {
    stories: ["~/slices/**/*.stories.js"]
  },
  ignore: ["**/*.stories.js"]
};
