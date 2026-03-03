import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/ds-interview-prep/', // This MUST match your GitHub repo name exactly
})