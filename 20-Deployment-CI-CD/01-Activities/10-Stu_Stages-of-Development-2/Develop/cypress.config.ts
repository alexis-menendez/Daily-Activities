import { defineConfig } from "cypress";
import coverageTask from "@cypress/code-coverage/task";

export default defineConfig({
	component: {
		devServer: {
			framework: "react",
			bundler: "vite"
		},
		specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
		setupNodeEvents(on, config) {
			coverageTask(on, config);

			return config;
		},
	},

	e2e: {
		baseUrl: "http://localhost:3000",
		setupNodeEvents(on, config) {
			// implement node event listeners here
			coverageTask(on, config);

			return config;
		},
	},
});
