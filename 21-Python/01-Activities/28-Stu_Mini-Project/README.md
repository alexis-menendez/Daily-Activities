# Module 21 Mini-Project: Toy Library

In this mini-project, you will build a Python program that represents a toy library and runs from the command line. Users will be able to view the complete library, add or remove items in the library, and check items in and out from the library.

## User Stories

* As a toy librarian, I want to view a list of the toys in the toy library.

* As a toy librarian, I want to view all the details about every toy in the toy library.

* As a toy librarian, I want to check toys out of the library for patrons.

* As a toy librarian, I want to check toys in to the library when a patron returns them.

* As a toy librarian, I want to add and remove toys from the collection.

## Acceptance Criteria

* It's done when I select a toy to check out and the `print_library` is called with the optional parameter `status` set to "Available" and prints out the available items.

* It's done when I select a toy to check out and the `checkout` function updates an item in the `toy_library` to change the `status` to "Checked Out," includes an updated value for `checkout_date` and `due_date`, and returns `True`. If the item's status was already "Checked Out", then the toy is not updated and the function returns `False`.

* It's done when I select a toy to return and the `print_library` is called with the optional parameter `status` set to "Checked Out" and prints out the checked out items.

* It's done when I select a toy to return and the `return_toy` function updates an item in the `toy_library` to change the `status` to "Available," updates the values of `checkout_date` and `due_date` to empty strings, and returns `True`. If the item's status was already "Available", then the toy is not updated and the function returns `False`.

* It's done when I select the option to add a toy and the `add_toy` function adds a new toy to the `toy_library`. This function should accept the toy's name and optional parameters for `toy_type`, `status`, and `replacement_cost`. The default values should be `""`, `"Available"`, and `0.0` respectively.

* It's done when I select the option to remove a toy and the `remove_toy` function removes a toy from the `toy_library` using the `pop()` list method and returns the dictionary that was removed.

* It's done when I select the option to view the library and the `print_library` function prints the index, toy name, and status of each item in the `toy_library`.

* It's done when I select the option to view the detailed library and the `print_library` function prints the index, toy name, status, toy type, checkout count, and replacement cost of each item in the `toy_library`. If the status of the toy is "Checked Out", it will also print the checked out and return dates.

* It's done when the `print_library` function accepts two optional parameters: `status` with a default value of `None` and `view_details` with a default value of `False`. If the `status` parameter is set, a list comprehension is used to filter the `toy_library` by status. This function will loop through the (filtered) toy library and print out the index, name of the toy, and its status. If the `view_details` parameter is `True`, then the function will additionally print out the remaining dictionary values.

* It's done when there is a `check_if_index_in_library` function that checks if a user input can be converted to an integer, then converts the input to an integer and checks if it's a valid index of the `toy_library` using the `len()` function. If the value is a valid index, it will be returned as an integer, otherwise `None` is returned.

* It's done when the `check_if_index_in_library` function is called whenever a user types in a value to represent an index in the `toy_library`.

* It's done when the main function uses the `library_menu` to present options to the user, and all of the options are available to the user using the previously created functions and no errors are present.

* It's done when I have the option to return to the main menu from each of the options to check out a toy, return a toy, add a toy, or remove a toy, instead of completing those functions. I can return to the main menu by pressing "Enter" at the first prompt instead of typing in what is requested of me.

---

## Notes

Refer to the documentation:

[Dictionary Unpacking](https://python-reference.readthedocs.io/en/latest/docs/operators/dict_unpack.html)

## 💡 Hints

Do you get errors when someone inputs a string that cannot be converted to a float or integer when they should?

How can you use optional parameters in a function to make them more versatile?

How do you send parameters to a function when the parameters are stored in a dictionary?

How do you loop through a list to extract and use its index?

How do you build a list comprehension?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you add an option to update an existing toy in the toy library?

Use [Google](www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
