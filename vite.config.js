import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/frontapp1/',   // ← context path for Tomcat
  server: {
    port: 3000,
    open: true
  }
})
