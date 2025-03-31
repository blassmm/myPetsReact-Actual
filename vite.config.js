import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Agrupa las bibliotecas de iconos
          icons: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/react-fontawesome",
          ],
        },
      },
    },
    // Habilitar la generación de versiones para mejorar el rendimiento
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  // Optimización para imágenes
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    // Comprimir las respuestas para mejorar la velocidad
    compress: true,
  },
});
