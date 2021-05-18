export default {
  server: {
    host: '0', // default: localhost
    port: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href:'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'},
            { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.7.2/css/all.css'},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap' },
        ],
        script: [
          {src: "https://code.jquery.com/jquery-3.3.1.min.js", type: "text/javascript"},
          {src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", type: "text/javascript"},
          {src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", type: "text/javascript"},
        ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  auth: {
        localStorage: false,
        cookie: {
            options: {
                expires: 7,
            },
        },
    strategies: {

      local: {
              scheme: 'refresh',
        token: {
          property: 'access'
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false
        },
        endpoints: {
          login: {
            url: '/auth/jwt/verify/',
            method: 'post',
            propertyName: 'access',
          },
          refresh: {url: '/auth/jwt/refresh/', method: 'post', propertyName: 'refresh'},
          logout: {},
          user: {url: '/users/userdata/', method: 'get', propertyName: false}
        }
      },
    }
  },
  axios: {
    baseURL: 'https://172.26.0.134:8000'
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
