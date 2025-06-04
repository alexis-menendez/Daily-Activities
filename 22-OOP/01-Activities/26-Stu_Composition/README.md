# 🏗️ Implement Composition Price Calculation

Work with a partner to implement the following user story:

* As a user, when I add items to my shopping cart, I want to view the correct total price of all items in the shopping cart.

## Acceptance Criteria

The activity is complete when it meets the following criteria:

* A `PriceCalculator` class includes a method named `calculate_total_price` to calculate the total price of an item.

* A `PhysicalItem` class contains a `PriceCalculator` and uses it to calculate the total price of an item.

* A `DigitalItem` class contains a `PriceCalculator` and uses it to calculate the total price of an item.

* A `GiftCard` class contains a `PriceCalculator` and uses it to calculate the total price of an item.

---

## 💡 Hints

* How can you design a `PriceCalculator` class to manage different price calculations for various item types?

* What changes are necessary in the item classes to use the `PriceCalculator` to calculate their total prices?

* How does composition manage complex pricing logic by separating concerns?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could you extend the `PriceCalculator` to handle more complex pricing rules or additional item types?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
