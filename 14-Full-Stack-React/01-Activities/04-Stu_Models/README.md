# 🐛 PostgreSQL Table Isn't Being Created to Specifications

Work with a group to resolve the following issues:

* As a developer, I want a PostgreSQL table with the same name as the Sequelize model.

* As a developer, I don't want to include the `created_at` and `updated_at` columns in the PostgreSQL table.

## Expected Behavior

When Sequelize syncs the model with the database, the table name should be `book` (singular) and the `created_at` and `updated_at` columns shouldn't be in the `book` table.

## Actual Behavior

The table is named `Book` and contains the `created_at` and `updated_at` columns.

## Steps to Reproduce the Problem

1. Run `npm run build` then `npm start` from the command line to start the server and sync the database.

2. Run `psql -U postgres` to log in to the PostgreSQL shell.

3. In the PostgreSQL shell, run `\c library_db;` to switch to the library database.

4. Try to run `\d book;` to describe the `book` table. It will fail because the table name is `Book`.

5. Run `\d Book;`. Note that the table contains the `created_at` and `updated_at` columns.

---

## 💡 Hints

What options does Sequelize provide when it comes to naming tables and fields?

## 🏆 Bonus

If you've completed this activity, work through the following challenge with your group to further your knowledge:

* How can you globally define table-naming rules for your Sequelize connection?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
