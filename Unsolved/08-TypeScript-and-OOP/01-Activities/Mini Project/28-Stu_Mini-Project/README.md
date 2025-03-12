# 🏗️ Module 08 Mini-Project: Zoo Animal and Employee Tracker Using TypeScript and OOP

In this mini-project, you will work with a group to complete the Zoo Animal and Employee Tracking app by filling in the missing classes while using TypeScript to build a robust fault-tolerant application.

* As a developer, I want a robust fault-tolerant application built using TypeScript that will take in user inputs via Inquirer.js on the different animals living and employees working at the zoo.

* As a developer, I want to follow the object-oriented programming (OOP) paradigm to build a modular, reuseable system for future development cycles.

## Acceptance Criteria

* It's done when I update the variables in the `index.ts` file to have a typed array.

* It's done when I create an `Employee` class that the `ZooKeeper` and `ZooWorker` classes can inherit properties from.

* It's done when I create a `Work` interface that the `Employee` class will implement method `receivePay()` from.

* It's done when I create an `Animal` class that will implement the `ZooAnimals` interface.

* It's done when I can call the `startAnimalCli()` method in the `Cli.ts` file to create a new `Animal` object and push it to the `animals` array.

* It's done when I can call the `startZooKeeperCli()` method in the `Cli.ts` file to create a new `ZooKeeper` object and push it to the `employees` array.

* It's done when I am able to store the `Animal` objects after calling the `startAnimalCli()` method in the associated `animals` array to see the list later.

* It's done when I am able to store the `Employee` objects after calling the `startEmployeeCli()` method in the associated `employees` array to see the list later.

* It's done when I can call the `feedAnimals()` method in the `Cli.ts` file to iterate through the `animals` array and, if the animal is hungry, console that the animal species will be fed.

* It's done when I can call the `payEmployees()` method in the `Cli.ts` file to iterate through the `employees` array and, if the employee's name exists, console that the employee is paid an amount specified in the prompt.

## Additional Requirements

The following is a specification guide as to how the classes and interfaces should be created:

* `Animal` class
  * `species` as a string
  * `hungry` as a boolean
  * `weight` as a number
  * `amount` as a number
  * `makeRollCall()` as a method that returns how many animals of that species are in the zoo and whether they are hungry

* `Employee` class
  * Implements `Work` interface
  * `name` as a string
  * `id` as a number
  * `title` as a string
  * `salary` as a number
  * `receivePay()` as a method that takes in a pay(number) as a parameter and returns pay as a number

---

## 📝 Notes

Refer to the documentation:

* [.find() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

* [Inquirer package](https://www.npmjs.com/package/inquirer)

* [Recursion in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

## 💡 Hints

How can we set up inheritance between classes?

How can we use interfaces to have a polymorphic application?

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
