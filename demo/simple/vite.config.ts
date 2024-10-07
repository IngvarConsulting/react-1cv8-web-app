import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2018"
  },
  plugins: [
    react(),
    viteSingleFile()
  ],
})
