import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    istanbul({
			exclude: ["node_modules", "dist", "test", "cypress"],
			cypress: true,
			requireEnv: false,
		}),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
