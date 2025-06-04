"""This program demonstrates how to import and use modules in Python."""

# PEP8: Imports should be grouped in the following order:
# 1. Standard library imports.
# 2. Related third-party imports.
# 3. Local application/library-specific imports.
# You should put a blank line between each group of imports.
# See https://peps.python.org/pep-0008/#imports

# Import the modules needed for this program.
from random import shuffle
from math import pi
from datetime import datetime

####################################################
# Importing a function from a module.
####################################################


# Add the appropriate parameter to the calculate_circumference function.
def calculate_circumference(radius):
    """This function calculates the circumference of a circle."""
    # Calculate the circumference of the circle.
    circumference = 2 * pi * radius
    # Print the circumference of the circle to two decimal places.
    print(f"The circumference of the circle is {circumference:.2f} inches.")


if __name__ == "__main__":
    # Call the function with a radius of 5 inches.
    calculate_circumference(5)


####################################################
# Importing a method from a module.
####################################################


# Add the parameter to the shuffle_deck function.
def shuffle_deck(card_deck):
    """This function shuffles the deck of cards."""
    # Shuffle the deck
    shuffle(card_deck)
    # Print the shuffled deck
    print(f"Shuffled deck: {card_deck}")


if __name__ == "__main__":
    # Define a deck of cards as a list.
    deck = ['Ace', '2', '3', '4', '5', '6', '7', '8',
            '9', '10', 'Jack', 'Queen', 'King']
    # Pass the deck of cards to the function.
    shuffle_deck(deck)


####################################################
# Importing classes from a module.
####################################################


def get_current_date():
    """This function gets the current date, year, month, and day."""
    # Get the current date and time
    current_date = datetime.now()

    # Extract the year, month, and day from the current date.
    current_year = current_date.year
    current_month = current_date.month
    current_day = current_date.day

    # Print the current year, month, and day.
    print(f"The year is: {current_year}")
    print(f"The month is: {current_month}")
    print(f"The day is: {current_day}")


if __name__ == "__main__":
    # Call the function to get the current date, year, month, and day.
    get_current_date()
