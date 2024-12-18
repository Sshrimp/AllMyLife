// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/theme.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@vant/nuxt', '@nuxtjs/svg-sprite'],
  vant: {
  },
  supabase: {
    redirect: false
  }
  
})