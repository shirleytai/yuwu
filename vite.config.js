import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production builds are served from https://shirleytai.github.io/yuwu/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/yuwu/' : '/',
  plugins: [react()],
  build: { target: 'es2018' },
}))
