import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/c52af65e-7738-41e4-8b23-fc8166e2a7b3/preview',
  plugins: [react()],
  server: {
    port: 5179,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5179,
    },
  },
})
