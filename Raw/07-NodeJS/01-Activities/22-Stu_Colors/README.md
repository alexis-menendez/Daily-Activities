# 📖 Install and Use the Colors Package

Work with a partner to implement the following user story:

* As a developer, I want to initialize my project and create a `package.json` file.

* As a developer, I want to use ESM style imports in my project.

* As a developer, I want to be able to save packages to my project.

* As a developer, I want to install and use the `colors` npm package.

## Acceptance Criteria

* It's done when I see a `package.json` file created.

* It's done when I set the `"type"` property to `"module"` in my `package.json` to allow for ESM style imports.

* It's done when I have installed the `colors` package successfully and see it listed in the `package.json` file.

* It's done when I type `node index.js Sally 500` and the following is logged, with `Sally` highlighted with a bright yellow background and `500` highlighted with a bright green background, since the profit is a number greater than `0`:

  * `My name is Sally and I made 500 dollars this quarter.`

* It's done when I type `node index.js Bob -300` and the following is logged with `Bob` highlighted with a bright yellow background and `-300` highlighted with a bright red background since the profit is a number less than or equal to `0`:

  * `My name is Bob and I made -300 dollars this quarter.`

## 📝 Notes

Refer to the documentation:

* [colors](https://www.npmjs.com/package/colors)

**Note**: In the documentation, there will be two ways to use the `colors` package. We will be using the option that does not extend the String prototype. We will learn more about prototypes later.

## 💡 Hints

Remember that we can access command line arguments using `process.argv`.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is a String prototype?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
