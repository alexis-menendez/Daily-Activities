# 🐛 Query Not Deleting Row from Table

Work with a partner to resolve the following issue(s):

* As a user, I want to be able to delete a specific book from the `favorite_books` table.

## Expected Behavior

When I run `server.ts`, the row with the `id` of `2` should be deleted from the table and the updated table displayed in the console.

## Actual Behavior

When I run `server.ts`, an error is returned and the table is not updated.

## Steps to Reproduce the Problem

1. In Postgres Shell, execute the `db/schema.sql` file.

2. Next, execute the `db/seeds.sql` file.

3. Run `npm run build` then `npm run start` to start the Express.js server. The results of the query and the table are shown in the console.

## Assets

The following image demonstrates the web application's appearance and functionality:

![A successful console log displays results for id values of 1 through 7, but the row with the id of 2 has been deleted.](./assets/image_1.png)

---

## 💡 Hints

What does the `$1` represent in a parameterized query?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you set user-defined values using a SQL statement?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
