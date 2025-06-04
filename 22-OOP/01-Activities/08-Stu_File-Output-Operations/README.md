# 🏗️ Add Data to a File

Work with a partner to implement the following user story:

* As a sales manager, I want a program that provides employees with an interface to add sales data to the [book_sales.csv](Unsolved/Resources/book_sales.csv).

## Acceptance Criteria

### For the `CSV_handler.py` file

* It's done when the `csv` module is imported.

* It's done when the `add_data` function is created to append data to a CSV file using UTF-8 encoding.

* It's done when the `add_data` function writes the new data to the file using a CSV writer object.

* It's done when the `read_csv` function is created to read and print the contents of a CSV file using UTF-8 encoding.


### For the `book_data.py` file.

* It's done when the `add_data` and `read_csv` functions are imported from the `CSV_handler.py` file.

* It's done when the user is asked for a book title, author, how many copies were sold, and the price of each book; the book title and author are string data types; the number of copies sold is an integer; and the price of the book is a floating-point decimal.

* It's done when each variable for the book data is added to a list.

* It's done when the file path and the list of new data are passed to the `add_data` function to append the data to the CSV file.

* It's done when the book sales data is printed and the new data is at the end of the file.

---

## 💡 Hints

When adding new data to the end of a file, use the `'a'` mode in the `with open()` statement.

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What other read and write modes are available for the `with open()` statement? When would we use these modes?

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
