""" This program simulates a coin toss. """
import sys
from random import randint


class CoinToss:
    """A class representing a coin toss.
    Attributes:
      side_up (str): The current side of the coin facing up.
    """
    def __init__(self):
        # TODO: Initialize the side up attribute to `None`.


    # TODO: Create a `toss` method that simulates a coin toss.

        """
        Simulates a coin toss by randomly setting the side up
        attribute to either 'Heads' or 'Tails'.
        """
        # TODO: Use the randint function to set the side up attribute.
        # TODO: If the number is 0 set the side up to 'Heads'
        # TODO: Else set the side up to 'Tails'.

    # TODO: Add a method to get the side of the coin.
    # TODO: The method should return the current side of the coin facing up.


if __name__ == "__main__":
    # Create an instance of the CoinToss class.
    my_coin = CoinToss()

    # Ask the user which side of the coin to choose.
    user_choice = input("Choose a side of the coin: " +
                        "Heads or Tails: ").capitalize()

    # Ensure the user input is valid.
    if user_choice not in ["Heads", "Tails"]:
        print("Invalid choice. Please choose 'Heads' or 'Tails'.")
        sys.exit()

    # Toss the coin.
    print("I am tossing the coin...")
    # TODO: Call the toss method on the my_coin instance.


    # TODO: Display the side of the coin that is facing up.

    # Determine who starts based on the coin toss result.
    # TODO: Check if the side up attribute is equal to the user choice.

        # TODO: Print "You start first!" if the condition is met.
        # TODO: Else print "Your opponent starts first
