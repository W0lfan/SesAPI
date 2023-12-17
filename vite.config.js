import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SesAPI/",
  resolve: {
    alias: {
      '@editor': path.resolve(__dirname, '/editor/edit/'),
      // Add more aliases for other subdirectories as needed
    },
  },
})
