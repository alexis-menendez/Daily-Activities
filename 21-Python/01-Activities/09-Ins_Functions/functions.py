"""This script demonstrates how to define and call functions in Python."""


# Define a function called make_email.
# Use a docstring to describe the function.
def make_email(given_name, family_name):
    """Returns the employee's email address
    Args:
        given_name (str): The employee's given name (letters only)
        family_name (str): The employee's family name (letters only)
    Returns:
        str: The employee's email address (company domain)
    """
    # Convert the given name and family name to lowercase.
    # Concatenate the given name, a period, the family name, and the domain.
    # Return the email address.
    return given_name.lower() + "." + family_name.lower() + "@company.com"


# Define a function called greet_employee.
# Positional vs Keyword arguments
# Positional arguments are the same as Javascript, where the order
# of arguments must be considered when passing values.
# Keyword arguments are when the value is defined with an equal sign
# When the keyword is referred, the value is passed in regardless of position.
def greet_employee(given_name, family_name, greeting="Hello",
                   time_of_day=None):
    """Prints a message to the employee
    Args:
        given_name (str): The employee's given name
        family_name (str): The employee's family name
        greeting (str): The greeting to use
        time_of_day (str): The time of day
    """
    given_name = given_name.title()
    family_name = family_name.title()

    if time_of_day:
        print(f"{greeting}, {given_name} {family_name}! Good {time_of_day}!")
    else:
        print(f"{greeting}, {given_name} {family_name}!")


# Define the main function.
if __name__ == "__main__":
    # Get the employee's name from the user.
    first_name = input("Enter your first name: ")
    last_name = input("Enter your last name: ")

    # Call the make_email function and store the result in the email variable.
    email = make_email(first_name, last_name)

    # Print the email address.
    print("Your email address is", email)

    # Greet the employee with the default values.
    greet_employee(first_name, last_name)

    # Greet the employee with a different greeting using positional arguments.
    greet_employee(first_name, last_name, "Hola", "afternoon")

    # Greet the employee with a different greeting using keyword arguments.
    greet_employee(first_name, last_name, time_of_day="morning",
                   greeting="Bonjour")
