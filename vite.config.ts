import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables based on mode
  const env = loadEnv(mode, process.cwd(), '')
  
  console.log(`Running in ${mode} mode`)
  
  return {
    plugins: [react()],
    define: {
      // Make environment variables available to the app
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV || mode)
    },
    server: {
      // Development server settings
      port: 5173,
      strictPort: false,
      open: true
    },
    build: {
      // Build settings
      outDir: 'dist',
      sourcemap: mode !== 'production',
      minify: mode === 'production',
      // Customize based on environment
      rollupOptions: {
        output: {
          manualChunks: mode === 'production' ? {
            vendor: ['react', 'react-dom', 'styled-components'],
            app: ['./src/main.tsx']
          } : undefined
        }
      }
    }
  }
})
