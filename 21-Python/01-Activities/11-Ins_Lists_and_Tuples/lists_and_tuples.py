"""This script demonstrates the use of lists and tuples in Python"""

# Lists are ordered, mutable, and allow duplicate elements.
# Python lists are similar to arrays in other programming languages.

# Create an empty list.
hobbies = []
chores = list()

# Create a list of integers.
feb_temperatures = [28, 32, 27, 34, 35, 33, 28, 28, 27, 25, 29, 30, 30, 27,
                    27, 30, 27, 26, 27, 30, 26, 25, 22, 26, 28, 24, 25, 22]
print("feb_temperatures:", feb_temperatures)

# Create a list of strings.
columns = ["Product ID", "Product Name", "Product Price"]
print("columns:", columns)

# Create a list of mixed data types.
row1 = [1, "baseball cap", 14.99]
print("row1", row1)

# Create a list using other variables.
hat = "baseball cap"
pants = "jeans"
shirt = "t-shirt"
clothes_list = [hat, pants, shirt]
print("clothes_list", clothes_list)

# List elements can be accessed by index, starting at 0.
print("The first element in feb_temperatures is", feb_temperatures[0])
feb_temperatures[0] = 24
print("The first element in feb_temperatures is now", feb_temperatures[0])

# List elements can be accessed by negative index. The last element is -1.
print("The last element in feb_temperatures is", feb_temperatures[-1])

# List elements can be accessed by slicing.
# The first index is inclusive, and the second index is exclusive.
# List slicing returns a new list.
# List slicing uses the syntax list[start:stop].
print("The first three elements in feb_temperatures are",
      feb_temperatures[0:3])
print("The last three elements in feb_temperatures are",
      feb_temperatures[-3:])

# List elements can be accessed by slicing with a step.
# List slicing with a step uses the syntax list[start:stop:step].
print("Every other element in feb_temperatures is",
      feb_temperatures[::2])

# Pause the script to review the output.
input("\nPress enter to continue to view tuple examples:")

# Python tuples are ordered, immutable, and allow duplicate elements.
# Tuples are similar to lists, but they cannot be changed after creation.
# Tuples use parentheses instead of square brackets.

# Create an empty tuple.
empty_tuple = ()
empty_tuple = tuple()

# There are multiple ways to create a tuple with elements.
book = tuple(["Kindred", "Octavia E. Butler", 1979, 9780807083697])
book = ("Kindred", "Octavia E. Butler", 1979, 9780807083697)
book = "Kindred", "Octavia E. Butler", 1979, 9780807083697

# To convert a list to a tuple, use the tuple() function.
book = ["Kindred", "Octavia E. Butler", 1979, 9780807083697]
print("book is type", type(book))
book = tuple(book)
print("book is now type", type(book))

# Tuple elements are accessed the same way as list elements.
print("The first element in book is", book[0])
print("The middle elements of book are", book[1:3])

# Unpacking a tuple assigns its elements to multiple variables.
title, author, year, isbn = book
print("title:", title)
print("author:", author)
print("year:", year)
print("isbn:", isbn)

# Pause the script to review the output.
input("\nPress enter to continue to view the error when trying to assign "
      "a value to a tuple element:")

# Tuple elements cannot be changed.
# The following line will raise a TypeError.
try:
    book[0] = "Catch-22"
except TypeError:
    print("Error: Cannot modify a tuple. Tuples are immutable.")
