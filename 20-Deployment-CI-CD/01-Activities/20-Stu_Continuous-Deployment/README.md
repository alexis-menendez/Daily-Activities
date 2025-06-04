# 🐛 Deploy to Staging and Production Produces a curl Error

Work with a partner to resolve the following issue(s):

* When a change is made to the `main` branch, the code should deploy to staging and production if the tests pass.

## Expected Behavior

* When a change is made to the `main` branch, the tests should pass and the deploy steps should succeed.

## Actual Behavior

* When a change is made to the `main` branch, the tests pass but the deploy steps fail.

## Steps to Reproduce the Problem

1. Add a comment and push to the `develop` branch.

2. Make a Pull Request and merge the change into the `main` branch.

3. The staging and production deploy steps fail.

## 💡 Hints

What environment variables are necessary for the deploy steps to succeed?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are the risks of continuous deployment?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
