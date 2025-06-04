# 🏗️ Student Profile Creator

Work with a partner to implement the following user story:

* As a school administrator, I want a program that allows students to create profiles and store their information in a CSV file.

## Acceptance Criteria

### The `Student_Profile.py` File

* It's done when the `sys` module is imported.

* It's done when the `validation` function is defined with the email and password parameters.

* It's done when the `validation` function is enclosed in a `try/except` block to catch invalid input for email and password.

* It's done when the `validation` function uses an `if "@" not in email:` to check the email under the `try` clause. If an "@" is not in the email address, it raises a `ValueError` and prints "Invalid email."

* It's done when the `validation` function `try` clause checks if the password length is less than 8 characters. If the password is less than 8 characters, it raises a `ValueError` adnd prints "Password must be at least 8 characters long."

* It's done when the `validation` function has an `except` clause to catch the `ValueError`, prints either error message from the `try` clause, and uses the `sys.exit()` function to print the reason for exiting the program.

* It's done when the `create_ID` function creates a student ID by joining the lowercase first initial of the first name, the lowercase last name, and the string of the total length of the first and last names.

* It's done when the `create_ID` function returns the student ID.

### The `create_profile.py` File

* It's done when the `validation` and `create_id` functions are imported from the `Student_Profile.py` file.

* It's done when the `create_csv` and `read_csv` functions are imported from the `csv_handler.py` file.

* It's done when user prompts are created for the student to enter their first and last name, email, and password.

* It's done when the `validation` function is called with the email and password.

* It's done when the `create_id` function is called with the first and last name and the return value id assigned to the `student_id` variable.

* It's done when all the student data and IDs are added to a list of lists.

* It's done when the `create_csv` function is called with the file path, column data, and student data to add the data to the CSV file.

* It's done when the `read_csv` function is called to print the contents of the `students.csv` file.

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we read and write data to a JSON file instead of a CSV file?

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
