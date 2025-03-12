# 🏗️ Create Objects Using a Class Constructor

Work with a partner to implement the following user story:

* As a developer, I want to create new objects using a class constructor.

## Acceptance Criteria

* It's done when a class constructor is created named `BlogPost()` and it takes in five parameters: `authorName`, `title`, `text`, `createdOn`, and `comments`. The first four parameters should be strings and the last one should be an array of `BlogComments`.

* It's done when the final parameter `comments` has a default parameter in the constructor to use an empty array of `BlogComment` objects.

* It's done when the parameters are passed into the object's keys as their values.

* It's done when the `BlogPost` class has a method called `printMetaData()` with a `void` return type that prints a message in the console saying `Created by (authorName) on (createdOn)`.

* It's done when the `BlogPost` class has a method called `addComment()` with a `void` return type that takes in a `BlogComment` and adds it to the `comments` array on the BlogPost.

* It's done when I create a new object using the `BlogPost()` class constructor with my own custom values and omit a value for the `comments` parameter.

* It's done when a class constructor is created named `BlogComment()` and it takes in three parameters: `authorName`, `text`, and `createdOn`. All of these parameters should be strings.

* It's done when the `BlogComment` class has a method called `printMetaData()` with a `void` return type that prints a message in the console saying `Created by (authorName) on (createdOn) with (text)`.

* It's done when I create a new object using the `BlogComment()` class constructor with my own custom values.

* It's done when I add the newly created `BlogComment` to the `BlogPost` using the `addComment()` method.

* It's done when the metadata for both the `BlogPost` and `Comment` are printed to the console.

---

## 💡 Hint

What method needs to be written inside the class to initialize its properties?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Suppose that you have multiple classes that may be similar and have some overlap. What are some ways that you could model this relationship between classes?

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
