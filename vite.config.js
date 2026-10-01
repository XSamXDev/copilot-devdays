import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/twtapi": {
        target: "https://api.twtapi.com/api/v1/twitter/TweetDetail",
        changeOrigin: true,
        rewrite: () => "",
      },
    },
  },
})
