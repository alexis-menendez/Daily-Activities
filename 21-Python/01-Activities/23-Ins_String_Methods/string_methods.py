"""This script demonstrates string methods in Python"""

# Define some example strings and a list.
example_string = "Welcome! How can I help you today?"
example_string_with_whitespace = "    This is a string with whitespace.    "
example_name_random_case = "aTsUkO oKaTsUkA"
example_string_with_lines = "This is a string\nwith multiple\nlines."
example_string_with_digits = "12345"
example_string_with_decimals = "123.45"
example_list = ["Dr. jason LEONG", "aTsUkO oKaTsUkA", "Hasan Minhaj",
                "Ali Wong", "Kumail Nanjiani", "Trevor Noah",
                "hannah gadsby", "KAVIN JAY", "Ronny Chieng",
                "Chris Rock", "Kevin Hart", "Michelle Wolf",
                "Taylor Tomlinson", "PATTON OswalT"]

####################################################
# String Manipulation
####################################################

print("\nString manipulation examples:\n")

print("\nUsing the replace() method examples:\n")
print("\nOriginal string:", example_string)

# .replace() method to remove a substring from a string.
print("Remove spaces:", example_string.replace(" ", ""))
print("Remove a substring:", example_string.replace("Welcome! ", ""))

# .replace() method to replace a substring with another substring.
print("Replace a substring:", example_string.replace("Welcome", "Hello"))

# .replace() method to replace a substring with another substring a specific
# number of times.
print("Specify number of times to replace a substring:",
      example_string.replace(" ", "INSERTED STRING", 2))

# Pause the script to review the output.
input("\nPress Enter to continue... ")

print("\nStripping whitespace examples:\n")

# .strip() method removes whitespace from the beginning and end of a string.
# This is like the .trim() method in JavaScript.
print(
    f"'{example_string_with_whitespace}'\n"
    "\nConverted using .strip():\n"
    f"'{example_string_with_whitespace.strip()}'"
)

# .lstrip() method removes whitespace from the beginning of a string.
print(
    "\nConverted using .lstrip():\n"
    f"'{example_string_with_whitespace.lstrip()}'"
)

# .rstrip() method removes whitespace from the end of a string.
print(
    "\nConverted using .rstrip():\n"
    f"'{example_string_with_whitespace.rstrip()}'"
)

# Pause the script to review the output.
input("\nPress Enter to continue... ")

print("\nChanging case examples:\n")

# Change the case of a string.
print("Original string:", example_name_random_case)

# .upper() method converts a string to uppercase.
print(".upper():", example_name_random_case.upper())

# .lower() method converts a string to lowercase.
print(".lower():", example_name_random_case.lower())

# .title() method converts the first letter of each word to uppercase.
print(".title():", example_name_random_case.title())

# .capitalize() method converts the first letter of the string to uppercase.
print(".capitalize():", example_name_random_case.capitalize())

# .swapcase() method converts uppercase letters to lowercase and lowercase
# letters to uppercase.
print(".swapcase():", example_name_random_case.swapcase())

# Pause the script to review the output.
input("\nPress Enter to continue... ")

####################################################
# List Conversion
####################################################

print("\nList conversion examples:\n")

print("\nUsing the split() and splitlines() methods:\n")
print("Original string:", example_string)

# .split() method converts a string into a list of strings.

# .split() method with no arguments splits on whitespace.
words_list = example_string.split()
print("Words split on space:", words_list)

# .split() method with an argument splits on that argument.
words_list = example_string.split("! ")
print("Words split on '! ':", words_list)

# .splitlines() method splits a string on newlines.
print("\nThis string contains multiple lines:", example_string_with_lines)
lines_list = example_string_with_lines.splitlines()
print("\nConverted to a list with splitlines():", lines_list)

# Pause the script to review the output.
input("\nPress Enter to continue... ")

print("\nUsing the join() method:\n")
print("Original list:", example_list)

# .join() method converts a list of strings into a single string.
# The string that the method is called on is used as a separator between each
# string in the list.
comedians = ", ".join(example_list)
print("\nExample list converted to string, joined with ', ':", comedians)

# Like JavaScript, Python can chain methods together.
comedians_titlecase = ", ".join(example_list).title()
print("\nFix the comedians to title case:", comedians_titlecase)

# Pause the script to review the output.
input("\nPress Enter to continue... ")

####################################################
# Input Validation
####################################################

print("\nInput validation examples:\n")

# .isalpha() method checks if a string contains only alphabetic characters.

if example_name_random_case.replace(" ", "").isalpha():
    print(
        f"'{example_name_random_case}' contains only alphabetic "
        "characters and spaces."
    )

# .isdigit() method checks if a string contains only digits.

if example_string_with_digits.isdigit():
    print(f"'{example_string_with_digits}' contains only digits.")

# To check if a string can be converted to a float, you can use the .replace()
# method to remove the decimal point and then check if the remaining string
# contains only digits.

if example_string_with_decimals.replace(".", "", 1).isdigit():
    print(f"'{example_string_with_decimals}' can be converted to a float.")

# .isalnum() method checks if a string contains only alphanumeric characters.
if example_name_random_case.replace(" ", "0").isalnum():
    print(
        f"'{example_name_random_case.replace(' ', '0')}' contains only "
        "alphanumeric characters."
    )

# .isspace() method checks if a string contains only whitespace characters.
if "      \n   ".isspace():
    print("'      \\n   ' contains only whitespace characters.")

# .islower() method checks if a string contains only lowercase characters.
if example_name_random_case.lower().islower():
    print(
        f"'{example_name_random_case.lower()}' contains only lowercase "
        "characters."
    )

# .isupper() method checks if a string contains only uppercase characters.
if example_name_random_case.upper().isupper():
    print(
        f"'{example_name_random_case.upper()}' contains only uppercase "
        "characters."
    )

# .startswith() method checks if a string starts with a substring.
if example_string_with_whitespace.startswith(" "):
    print(
        f"'{example_string_with_whitespace}' starts with whitespace."
    )

# .endswith() method checks if a string ends with a substring.
if example_string_with_whitespace.endswith(" "):
    print(
        f"'{example_string_with_whitespace}' ends with whitespace."
    )
