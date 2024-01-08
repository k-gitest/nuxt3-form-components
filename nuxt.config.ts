// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 9000
      },
      watch: {
        usePolling: true,
      }
    }
  }
})
