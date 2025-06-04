"""This is the Python equivalent of the associated script.js file."""

# Declaring variables does not require a keyword like let, var, or const
# Note the lack of semicolons
# Variable naming conventions use snake_case
# See https://peps.python.org/pep-0008/#function-and-variable-names
person_name = 'Sakura'
pets = 3
fun_fact = 'I like pineapple on my pizza.'

# Use f-strings to combine data and variable names in a single print statement.
print(f"My name is {person_name}.")
print(f"I have {pets} pet(s).")
print(f"Fun fact: {fun_fact}")

# Python uses colons and indentation to define a block of code.
# Indentation is typically four spaces.
# See https://www.python.org/dev/peps/pep-0008/#indentation
# Loops and conditionals don't require the use of parentheses (We will cover when to use parentheses in future activities).
for i in range(5):
    # This is the block of code that will run each time.
    if i % 2 == 0:
        print(f"{i} is even.")
    print(f"This is the current value of i: {i}.")
