import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

const path = require("path")
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
  plugins: [react()],
})
