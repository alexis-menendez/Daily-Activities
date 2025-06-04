# The PEP 8 convention for naming constants is to use SCREAMING_SNAKE_CASE.
# See https://peps.python.org/pep-0008/#constants

# Create a constant called 'FULL_NAME' with a string value of
# "Nakia Shauku".
FULL_NAME = "Nakia Shauku"

# The PEP 8 convention for naming variables is to use snake_case.
# See https://peps.python.org/pep-0008/#function-and-variable-names

# Create a variable called 'profession' with a string "software engineer".
profession = "software engineer"

# Create a variable called 'years' with an integer 20.
years = 20

# Create a variable called 'hourly_wage' with a floating point value 72.12.
hourly_wage = 72.12

# Create a variable called 'expert_status' with the Boolean value of True.
expert_status = True

# Print a statement with the 'profession' string.
# When you use the print function to print string and a variable separated by a
# comma, Python will automatically add a space between the string and the
# variable.
print(FULL_NAME, "is a professional", profession)

# Variables sent to the print function will be automatically converted to
# strings.
# Print a statement with the 'years' integer.
print("They have been working for", years, "years")

# Print a statement with the 'hourly_wage' float.
print("Their hourly wage is", hourly_wage)

# Print a statement with the 'expert_status' Boolean.
print("Expert status:", expert_status)

# Collect the user's input for the prompt "What is your name?"
# The input() function always returns a string.
user_name = input("What is your name? ")

# Print the data type of user_name.
# F-strings are a cleaner way to write out string concatenations
# Similar to template literals in Javascript
print(f"user_name {user_name} is type {type(user_name)}")

# Collect the user's input for the prompt "How old are you?"
# Use the int() function to convert the string to an integer.
age = int(input("How old are you? "))

# Print the data type of age.
print(f"The value of age {age} is type {type(age)}")

# Collect the user's input for the prompt "What is your average weekly grocery
# bill?"
# Use the float() function to convert the string to a float.
grocery_bill = float(input("What's your average weekly grocery bill? "))

# Print the data type of grocery_bill
print(f"The value of grocery_bill {grocery_bill} is type {type(grocery_bill)}")

# Collect the user's input for the prompt "Will you eat healthy? Answer yes or no" and
# convert it to a boolean. Note that non-zero, non-empty objects return True.
true_or_false = bool(input("Will you eat healthy? Answer yes or no "))

# Print the data type of true_or_false
print(f"true_or_false is type {type(true_or_false)}")

# Create four print statements that displays text about the user's inputs
print(f"My name is {user_name}")
print(f"I am {age} years old.")
# Strings can be concatenated with the + operator.
# Non-string variables need to be converted to strings before they can be
# concatenated with other strings.
print(f"I spend an average of ${str(grocery_bill)} per week on groceries")
print(f"The input was converted to {str(true_or_false)}")

# Calculations can be performed inside functions that accept variables.
# Calculate and print the total cost of groceries for the year.
print(f"The total grocery bill for the year is ${str(grocery_bill * 52)}")
