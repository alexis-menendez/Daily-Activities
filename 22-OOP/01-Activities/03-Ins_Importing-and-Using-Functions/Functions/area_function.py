"""This program will calculate the area of circle."""

from math import pi, pow


def area(radius):
    """
    This function calculates the area of a circle given the radius.

    Parameters:
    radius (float): The radius of the circle.

    Returns:
    float: The area of the circle.
    """
    # Calculate the area of the circle
    area_circle = pi * pow(radius, 2)
    # Print the area of the circle to 2 decimal places
    print(f'The area in inches is: {area_circle:.2f}')
