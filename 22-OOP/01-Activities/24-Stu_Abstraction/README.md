# 🏗️ Refactor Shopping Cart Items to Use Abstraction

Work with a partner to implement the following user story:

* As a user, when I add items to my shopping cart, I want to view the correct total price of all items in the shopping cart.

## Acceptance Criteria

The activity is complete when it meets the following criteria:

* An abstract base class named `Item` includes an abstract method named `calculate_total_price` to calculate the total price of an item.

* A `PhysicalItem` class inherits from the `Item` class and provides its own method for calculating the total price of an item.

* A `DigitalItem` class inherits from the `Item` class and provides its own method for calculating the total price of an item.

* A `GiftCard` class inherits from the `Item` class and provides its own method for calculating the total price of an item.

---

## 💡 Hints

* How can you define an abstract base class in Python to enforce implementation of a method in subclasses?

* What changes are necessary in the existing item classes to ensure they properly extend the abstract base class?

* How does abstraction help manage different item types and their price calculations?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could you refactor the code to use multiple abstract base classes to handle more complex scenarios?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
