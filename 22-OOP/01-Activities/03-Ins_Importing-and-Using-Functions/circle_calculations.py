"""
This program calculates the area
and circumference of a circle given the radius.
"""

# Import the area and circumference functions from the Circle_Functions file.
from Functions.area_function import area
from Functions.circumference_function import circumference

# Prompt the user for the radius of the circle.
radius = float(input("Enter the radius in inches: "))

# Call the area function and pass the radius as an argument.
area(radius)
# Call the circumference function and pass the radius as an argument.
circumference(radius)
