"""This program will calculate the circumference of a circle."""

from math import pi


def circumference(radius):
    """
    This function calculates the circumference of a circle given the radius.

    Parameters:
    radius (float): The radius of the circle.

    Returns:
    float: The circumference of the circle.
    """
    # Calculate the circumference of the circle
    circle_circumference = 2 * pi * radius
    # Print the circumference of the circle to 2 decimal places
    print(f'The circumference in inches is: {circle_circumference:.2f}')
