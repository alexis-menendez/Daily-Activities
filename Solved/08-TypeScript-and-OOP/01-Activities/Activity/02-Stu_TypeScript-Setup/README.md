# 📖 Set Up and Configure TypeScript

Work with a partner to implement the following user story:

* As a team's lead developer, I want to convert our existing codebase to TypeScript.

## Acceptance Criteria

* It's done when `typescript` is installed as a development dependency in the `package.json` file.

* It's done when the project contains a `tsconfig.json` file with the following configuration:

  * Points to the `dist` output directory

  * Allows and checks JavaScript files

  * Does not emit files on errors

  * Targets `ES2020`

  * Includes the `src` folder and uses it as the root directory

  * Uses `commonjs` as the module code

* It's done when all `.js` files have been converted to TypeScript.

* It's done when the `package.json` file contains a script that runs `npx tsc`. When I run the script, the code compiles without issue.

* It's done when I open the output file; it matches the existing JavaScript file.

## 📝 Notes

Refer to the documentation:

* [TypeScript documentation](https://www.typescriptlang.org/docs/)

* [TypeScript tooling](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

* [TSConfig reference](https://www.typescriptlang.org/tsconfig)

* [Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)

---

## 💡 Hint

* Remember, the answer is often found in multiple places when reading documentation.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How would we use the `tsc` command-line tool to generate a `tsconfig` file?

  * What do the generated rules do?

* What rules can we include to increase the strictness of our tsconfig?

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
