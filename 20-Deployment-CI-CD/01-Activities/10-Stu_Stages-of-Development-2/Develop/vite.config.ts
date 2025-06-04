import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		istanbul({
			exclude: ["node_modules", "dist", "test", "cypress"],
			cypress: true,
			requireEnv: false
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/_tests_/setup.ts",
	}
});
