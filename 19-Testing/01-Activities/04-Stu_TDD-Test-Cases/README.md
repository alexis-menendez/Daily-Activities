# 🏗️ TDD Test Cases

Work with a partner to implement the following user story:

* As a developer using test-driven development, I want to write test cases as the first step in the development process.

* As a developer, I expect each of the test cases to fail, as the code has yet to be implemented.

Use the code found in [validate.test.ts](./Unsolved/src/test/validate.test.ts) as your starting point for implementation.

## Acceptance Criteria

* It's done when my test cases provide coverage for the following:

  * The `isValidUsername()` method returns `false` for a username that consists of fewer than eight characters.

  * The `isValidUsername()` method returns `false` for a username that doesn't contain all lowercase characters.

  * The `isValidUsername()` method returns `true` for an all lowercase username with at least eight characters.

  * The `isValidPassword()` method returns `false` for a password that consists of fewer than eight characters.

  * The `isValidPassword()` method returns `false` for a password that doesn't contain at least one uppercase character.

  * The `isValidPassword()` method returns `true` for a password that contains at least eight characters and one uppercase character.

* It's done when I can run `npm run test` and see failing tests for all of the above in the terminal.

---

## 💡 Hints

* What is the purpose of Vitest's `expect()` function?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we leverage Vitest to handle the testing of types?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
