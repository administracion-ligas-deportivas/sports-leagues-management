import { defineConfig } from "vite";
// https://github.com/vitejs/vite-plugin-react-swc
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // https://vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
