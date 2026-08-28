import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => ({
  // Use root base during development for local preview, keep /portfolio/ for production builds (GitHub Pages).
  base: command === 'serve' ? '/' : '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2018',
    emptyOutDir: true,
  },
}))
