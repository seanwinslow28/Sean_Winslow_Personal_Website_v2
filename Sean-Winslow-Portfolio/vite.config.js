import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Sean_Winslow_Personal_Website_v2/',
  build: {
    // Enable source maps for better debugging
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'lottie-react', 'lottie-web', '@lottiefiles/lottie-interactivity'],
          // Remove empty lottie chunk by combining with animations
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Use esbuild minifier (faster and sufficient)
    minify: 'esbuild'
  },
  server: {
    // Enable HMR for faster development
    hmr: true,
    // Optimize for performance
    fs: {
      strict: false
    },
    // Allow localtunnel hosts
    allowedHosts: ['witty-peas-press.loca.lt', '.loca.lt']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lottie-react', 'lottie-web', '@lottiefiles/lottie-interactivity'],
    // Exclude unused dependencies
    exclude: ['gsap', 'react-router-dom', 'simplex-noise']
  },
  // Add support for Lottie JSON files
  assetsInclude: ['**/*.json', '**/*.lottie'],
  // Additional performance optimizations
  esbuild: {
    // Remove unused imports
    treeShaking: true,
    // Optimize for production
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    // Remove console.logs in production
    drop: ['console', 'debugger']
  }
})
