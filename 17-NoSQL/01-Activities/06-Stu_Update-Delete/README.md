# 🏗️ Delete Data Using MongoDB and Express.js

Work with a partner to implement the following user story:

* As a developer, I want to be able to delete a single existing document in a MongoDB database.

## Acceptance Criteria

* It is done when I add a new `/books/:id` DELETE route that uses a filter to find a single document by its unique `_id` and deletes that document. The `_id` value should be provided as a route parameter.

* It is done when I test the route using Insomnia and the document that I just created is deleted. No other documents should be changed.

## 💡 Hints

* Why is it important to specify a filter when updating and deleting documents?

* Why do you need to require the `ObjectId()` when sending an `_id` string as a route parameter?

* When deleting a document, how can we inform users that the document associated with the `ObjectId` they provided was found in our collection?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are indexes? How do they support the efficient execution of queries in MongoDB?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
