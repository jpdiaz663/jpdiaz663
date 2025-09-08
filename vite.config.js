import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/jpdiaz663/',
  resolve: {
    alias: {
          '@': path.resolve(__dirname, './src'), // Alias '@' to the 'src' directory
          '@components': path.resolve(__dirname, './src/components'), // Alias '@components' to 'src/components'
          // Add more aliases as needed
        },
  }
})
