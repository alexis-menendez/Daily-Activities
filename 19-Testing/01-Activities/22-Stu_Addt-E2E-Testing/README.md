# 🐛 Add Additional Tests to E2E Testing using Cypress

Work with a partner to resolve the following issue:

* As a developer, I should be able to write end-to-end tests for both positive and negative test case scenarios.

## Expected Behavior

* As a developer, when I run `npm run cypress` and run the tests through Electron, I should see all test cases pass.

## Actual Behavior

* As a developer, when I run `npm run cypress` and run the tests through Electron, some of the test cases are failing.

## Steps to Reproduce the Problem

1. Run `npm i` at the root level of the `Unsolved` folder.

2. Run `npm run start:dev` to start up the application.

3. Run `npm run cypress` on a separate terminal/Bash, while the application is still running separately.

4. Click on **E2E Testing** and start the E2E testing by selecting **Electron**.

5. Run the tests from the `techThoughts.cy.js` file and observe the response.

---

## 💡 Hints

* Where can we find documentation about working with the additional syntax provided by `@testing-library/cypress`?

* If the output from the `cy.get` returns an array of objects, how can we grab the specific values from that array?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
