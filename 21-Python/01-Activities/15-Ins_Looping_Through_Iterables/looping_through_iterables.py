"""This script demonstrates how to loop through iterables (strings, lists,
and tuples) in Python"""

print("Looping through a string's characters:")

# Strings are iterable. Iterate through each character in the string.
for letter in "I love Python!":
    print(letter)

# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a list:")

# Lists are iterable. Iterate through each element in the list.
students = ['Adeel Ahmad', 'Asuka Takenaka', 'Bent Hanburry',
            'Charlie Clewlow', 'Clarisse Surgeon', 'Denise Tan',
            'Gabriella Rossi', 'Hae-Won Park', 'Izel Xiu', 'Janetta Bolduc',
            'Jason Woo', 'Javier Martinez', 'Juanita Hernandez', 'Kath Beeres',
            'Kevin Fuwape', 'Leonard Jennings', 'Patty Singleton',
            'Rodd Camier', 'Sundar Jayaram', 'Zachariah Spikings']

for student in students:
    print(student)

# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a tuple:")

# Tuples are also iterable. Iterate through each element in the tuple.
students_tuple = ('adeel ahmad', 'asuka takenaka', 'bent hanburry',
                  'charlie clewlow')

for student in students_tuple:
    # Perform an operation on each element in the tuple.
    print("Original Name: ", student)
    print("Uppercase Name: ", student.upper())
    print("Titlecase Name: ", student.title())

# Pause the script to review the output.
input("\nPress enter to continue:")

print("Looping through a list without making changes:")

# Print out changes to the values of list elements without modifying the list.
prices = [3, 2, 5]

print("Original prices:")
print(prices)

for price in prices:
    price += 1
    print(price)

# The list remains unchanged.
print("Prices after the loop:")
print(prices)

print("\nLooping through a list to make changes:")

# Use the `enumerate()` function to fix the previous code so that it will
# update the prices.
# It is useful in returning both the index and value of
# each element in the list.
for index, price in enumerate(prices):
    prices[index] += 1
    print(f"Old price: {price}, Updated price: {prices[index]}")

print("Prices after the loop:")
print(prices)

# Pause the script to review the output.
input("\nPress enter to continue:")

print("\nLooping through two lists at once:")

# Use the `zip()` function to loop through two lists of the same length.
grades = [98, 67, 87, 57, 78, 96, 79, 65, 46, 88, 66, 67, 58, 96, 84, 70, 55,
          72, 81, 49]

for student, grade in zip(students, grades):
    print(f"{student} | {grade}")
