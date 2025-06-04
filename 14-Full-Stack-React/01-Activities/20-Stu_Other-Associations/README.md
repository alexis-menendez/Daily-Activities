# 🏗️ Implement One-to-Many and Many-to-Many Association Between Models

Work with a group to implement the following user story:

* As a library manager, I want to see the books in the library, their authors, and the readers who have those books checked out.

## Acceptance Criteria

* It's done when the PostgreSQL table for book data has a foreign key referencing the `Author` table.

* It's done when the `Reader` table uses a junction model to establish a many-to-many relationship with the `Book` table.

* It's done when the response of a GET request to `/api/authors` or `/api/authors/:id` includes the books written by that author.

* It's done when the response of a GET request to `/api/readers` includes the books checked out by a reader.

* It's done when the response of a GET request to `/api/books` includes the readers who have the books checked out.

## 📝 Notes

Refer to the documentation:

* [Sequelize Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)

* [TypeScript and Sequelize v6](https://sequelize.org/docs/v6/other-topics/typescript/)

---

## 💡 Hints

* When you associate these models, what will the relationship look like? Would authors belong to books, or would books belong to authors?

* When establishing a many-to-many relationship, does it matter which model establishes the relationship?

## 🏆 Bonus

If you've completed this activity, work through the following challenge with your group to further your knowledge:

* As a TypeScript developer using Sequelize, why do you still need to know SQL?

* What are Sequelize Literals?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
