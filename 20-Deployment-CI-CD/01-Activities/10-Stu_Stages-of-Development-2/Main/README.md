# Coverage Reporting

## Packages

* Explain the added packages to the root `package.json`.

  * `@cypress/code-coverage`: Plugin created by Cypress that provides popular code coverage libraries and reporters

  * `@vite-plugin-istanbul`: Plugin for Vite that allows us to instrument our client-side code for code coverage reporting on the fly.

  * `@istanbuljs/nyc-config-typescript`: Plugin that allows the `nyc` code reporter to be configured by TypeScript

* Explain the updates to the npm scripts.

  * The scripts are organized into appropriate sections.
  * There are now scripts to run both the component and e2e tests without opening the Cypress app.
  * The new `test:coverage` script will run all of our tests and output the coverage report for our client.
  * The new `clean` script deletes any existing generated files and folders, such as `dist`.
  * The new `prestart:dev` script will run `clean` before starting the application, removing old build files and folders to ensure the most recent code updates are running.

* Explain the contents of the `.nycrc` file.

  * The `.nycrc` file provides configuration options for the `nyc` coverage reporter, such as limiting the output to only `text` and `html` files.

## Cypress

* Explain the updates to the `cypress.config.ts` file.

  * A new node event was added to the file so that Cypress will provide code coverage information.

* Explain any additions to the `cypress/support` files.

  * `import '@cypress/code-coverage/support'` was added to the `component.ts` and `e2e.ts` files so that each test type uses the new plugin.

## Vite

* Explain the updates in the `vite.config.ts` files.

  * The client `vite.config` added new config options for the `istanbul` plugin. These options tell `istanbul` to use Cypress, exclude certain files, and if it should use an environment variable to enable coverage.

  * The root `vite.config` removed unnecessary server config options and added the new config options for `istanbul`.

    * Though we only provide code coverage reporting for the client, we installed the coverage plugins at the root. Therefore, we need to make the whole project aware of this plugin.

## Coverage

* Run the new `test:coverage` script. Explain the generated folders and final response in the console.

  * The `coverage` folder contains files generated based on the provided `reporter` configuration in the `.nycrc` file.

  * `.nyc_output` contains JSON files that store the raw coverage data `nyc` converts into readable reports.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
