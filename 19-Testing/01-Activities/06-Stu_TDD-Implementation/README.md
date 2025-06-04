# 🏗️ Add Validate Class Implementation to Pass Test Cases

Work with a partner to implement the following user story:

* As a developer, I want to add just enough code to `isValidUsername()` and `isValidPassword()` to ensure the failing tests pass, so that I can confidently refactor and optimize my code before adding another test.

* As a developer, I want to use the "Red, Green, Refactor" approach to improve the test cases and code, after the initial code is working.

## Acceptance Criteria

It's done when the following criteria have been met:

* I've added the least amount of code necessary to pass the failing tests for the `isValidUsername()` and `isPassword()` methods.

* The `isValidPassword()` method returns `true` for a password containing at least eight characters, one capital letter, one lowercase letter, and one number.

* The `isValidPassword()` method throws an exception for an empty password.

* The `isValidPassword()` method otherwise returns `false`.

* The `isValidUsername()` method returns `true` for a username containing at least 8 characters that contains all lowercase characters.

* The `isValidUsername()` method throws an exception for an empty username.

* The `isValidUsername()` method otherwise returns `false`.

* I've added an additional test case and corresponding code implementation to improve the code.

* I can run `npm run test` in the terminal and see that all tests are passing.

---

## 💡 Hints

What is the least amount of code needed to get a function to return `false`?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are Vitest Reporters? How can they improve our testing environment?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
