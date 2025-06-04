"""This script demonstrates string formatting in Python"""

# Quotation mark issues
# Like JavaScript, double quotes (") and single quotes (') can be used
# interchangeably but the same type of quotation mark must be used to open and
# close the string.
# It is best practice to remain consistent with your use of quotation marks.
# If a string needs to include one type of quotation mark, you can use the
# other kind to open and close the string.
print("I'm having a great day!")
print('Mary said, "This is my home."')

# What if you want to use both types of quotation marks in your string?
# Then you can use the backslash (\) escape character. This tells Python to
# treat the following character differently than it ordinarily would.
print('Jose said, "My son\'s bringing dinner home tonight."')

# When using string concatenation to join two strings, you need to ensure that
# non-string data types are converted to strings before concatenation.
# This can be done using the str() function.
age = 42
print("I am " + str(age) + " years old.")

# You can also use triple quotes to print over multiple lines.
print(
    """Name: Michelle Yeoh
Date of Birth: August 6, 1962
Birth place: Ipoh, Malaysia"""
)

# Often, we don't want to use triple quotes to store text across multiple
# lines, as the text can't be indented when we get to complex decisions.
# In those situations, we can insert a new line character instead.

# Print a new line character: \n
print("Welcome to Python!\nHow are you enjoying class so far?")

# Ask the user for an input string and concatenate it with a new line.
input_string = input("What is your answer? ") + "\n"

# When you use an f-string, you don't need to use the str() function to convert
# non-string data types to strings. Python will do it for you.
# f-strings are similar to template literals in JavaScript.

# f-strings
print(f"You said: {input_string}")

# Inside the curly braces in an f-string, you can perform operations, just
# like in JavaScript template literals.
# If you use the multiplication operator with a string variable, the string
# will be repeated that many times.
print(f"Let's print your answer 5 times:\n{input_string * 5}")

# Multiline f-strings
radius = 4
pi = 3.14159265358979323846
print(
    f"Radius: {radius}cm\n"
    f"Circumference: {2 * pi * radius}cm\n"
    f"Area: {pi * radius ** 2}cm\n"
)

# You can format floating point values with an f-string by using a colon at
# the end of the variable and specifying the number of decimal places you want
# to display.
print(f"Pi to three decimal places is {pi:.3f}\n")

# You can also add a thousands comma to format a number over 1,000.
print(f"I have ${3500:,} to spend on my vacation this year.")

# Combining the thousands comma and decimal formatting is a great way to print
# currency values.
print(f"I have ${3500:,.2f} to spend on my vacation this year.")

# Create a string of 50 dashes.
dash_string = "-" * 50

# Long text as an f-string
long_text = f"""Welcome to Python class!
Your answer to "How are you enjoying Python class" was {input_string}
What was that?
{input_string * 5}
{dash_string}

Radius: {radius}cm
Circumference: {2 * pi * radius}cm
Area: {pi * radius ** 2}cm

Pi to three decimal places is {pi:.3f}

I have ${3500:,.2f} to spend on my vacation this year."

Bye now!
"""

# Pause the script before printing the long text.
input("Press enter to print out information from a single string variable.")

# Print the long text.
print(long_text)
