import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// You shouldn't need to manually configure `devSourcemap` for Tailwind

export default defineConfig({
  plugins: [react()],
})
