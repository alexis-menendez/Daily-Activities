# 🐛 Lists Not Looping Correctly

Work with a partner to resolve the following issue(s):

* As a tourist, I should be able to look up travel destinations and daily costs, and update the daily costs when the exchange rate fluctuates.

## Expected Behavior

When a user runs the program, they should see a printout of the cities and their costs in the following format: `Daily cost of {city} is ${city_daily_cost}`.

When a user says they want to update the costs, the program should loop through both lists using the `zip()` function, as well as the index of the lists using the `enumerate()` function.

## Actual Behavior

When a user runs the program, they get the following error: `ValueError: too many values to unpack`. But even if that error is fixed, they get the following error: `NameError: name 'sentence' is not defined`.

If the previous two errors are fixed, when a user runs the program, then the city and cost are printed in the wrong order.

When a user says they want to update the costs, the program closes with the following error: `TypeError: cannot unpack non-iterable int object`.

---

## 💡 Hints

How do you use the `zip()` and `enumerate()` functions to loop through multiple lists and a list with its index?

What keyword must be used to loop through iterables?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Can you add a new function that allows you to insert a new city and cost into the different lists using the `insert()` method?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
