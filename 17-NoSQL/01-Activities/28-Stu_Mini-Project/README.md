# Module 18 Mini-Project: Student Statistics Back-End

In this activity, you will start with an existing codebase for a mostly complete application.

You will be adding aggregate methods to the `Student` controller to show a student's overall grade and the number of students.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to be able to view all the students and get a total of the number of students enrolled.

* As a user, I want to be able to view a specific student's overall grade in the class using MongoDB operators and their score on each assignment.

* As a user, I want to be able to execute create, read, update, and delete operations on `courses`, `students`, and `assignments`.

### Specifications

The completed application should meet the following specifications:

* The application must make use of a MongoDB database, the Mongoose ODM, and Express.js.

* The database must be seeded with sample data.

* The `Student` controller should have a `headCount` aggregate function to get the total number of students by making use of MongoDB aggregate operators.

* The `Student` controller should have a `grade` aggregate function that returns a single student and also the student's overall grade using MongoDB aggregate operators.

* The project will require research of MongoDB operators such as `$addToSet`, `$unwind`, `$group`, `$match`, and `$avg`.

* `Student` lookup will require use of the `ObjectId()` method.

* The endpoints `api/students/<student id>` and `api/students/` should be tested using Insomnia to ensure that the aggregate functions return the student's overall grade and headcount respectively.

## 💡 Hints

* Be sure to run `npm run seed` to seed your database before testing with Insomnia.

* Run `npm run start` to build and start the server.

* How can we use the `$avg` [MongoDB operator](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/) to calculate the overall grade for a student?

* How can we use the `ObjectId` [Mongoose `Type` method](https://mongoosejs.com/docs/schematypes.html#objectids) to ensure we are able to query a student based on the value in their `_id` field?

## 🏆 Bonus

* What is the difference between Mongoose and MongoDB? What are the advantages and disadvantages of both?

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
