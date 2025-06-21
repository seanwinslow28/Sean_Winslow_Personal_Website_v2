import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for better debugging
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'lottie-react', 'lottie-web'],
          lottie: ['@lottiefiles/lottie-interactivity']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  server: {
    // Enable HMR for faster development
    hmr: true,
    // Optimize for performance
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lottie-react', 'lottie-web', '@lottiefiles/lottie-interactivity']
  },
  // Add support for Lottie JSON files
  assetsInclude: ['**/*.json', '**/*.lottie']
})
