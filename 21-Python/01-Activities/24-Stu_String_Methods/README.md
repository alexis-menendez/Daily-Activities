# 🐛 User Dictionary System Not Functioning as Expected

Work with a partner to resolve the following issue(s):

* As an administrator, I should be able to add new users and remove users from the system without error.

## Expected Behavior

When a user types in their menu selection, it should only proceed if the value can be converted to an integer. Otherwise, it will print "Invalid choice. Please try again." Then, it will return to the beginning of the menu.

When a user chooses to add users to the `users` dictionary, that string should be checked that it only contains alphabetic characters, spaces, and commas.

Whether a user chooses to add a single user to the `users` dictionary or a list of users separated by a comma, those names should be converted to title case and each name should be added to the `users` dictionary as the key.

When a user is added to the `users` dictionary with the name as the key, the associated value should be the username, which is the name converted to lowercase and spaces replaced by underscores.

When a username is added to the `users` dictionary, the name should be converted to lowercase and the space should be converted to an underscore.

When a name is being added to the `users` dictionary and there is leading or trailing whitespace found in a name, that whitespace should be removed only from the beginning and end of the name.

When a user types a name to remove from the `users` dictionary, the name should be converted to title case in case the user typed the name in mismatched characters.

## Actual Behavior

When a user types in their menu selection, if the value does not contain alphabetic characters, the program will exit with an error if the value cannot be converted to an integer.

When a user chooses to add users to the `users` dictionary, that string will be accepted if it contains alphabetic characters, numbers, and spaces, but not commas.

When a user chooses to add a user to the `users` dictionary (single or multiple), that name(s) is converted to title case but then each character of that name is separately added to the `users` dictionary as the key. The associated value is then the dictionary key's character in uppercase.

When the previous bug is fixed, the spaces in the username are converted to periods rather than underscores.

When leading or trailing whitespace is found in a name, all spaces are removed from the name, including in the middle of the name.

When a user types a name to remove from the `users` dictionary, if the user typed the name in mismatched characters, the name will not be found or removed.

---

## 💡 Hints

Work through the bugs in order. Some of the "actual behavior" may only show up once you fix the previous bug.

Where should you start looking for the problems in the code, in the main function or individual functions that are called from the main function?

Use the official Python documentation on [string methods](https://docs.python.org/3/library/stdtypes.html#string-methods) if you need help looking up the correct method to use, or how to use it.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Can you convert the menu from if/elif to match case?

* Are there other string methods that weren't explicitly demonstrated that could be useful?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
