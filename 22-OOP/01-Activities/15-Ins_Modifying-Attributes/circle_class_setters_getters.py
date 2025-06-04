""" This program calculates the area and circumference of a circle """
from math import pi


class Circle:
    """ This class calculates the area of a circle """
    def __init__(self, radius=None):
        if radius is not None:
            self.radius = radius

    def get_radius(self):
        """ This method gets the radius of a circle """
        return self.radius

    def set_radius(self, value):
        """ This method sets the radius of a circle """
        if not isinstance(value, float) or value <= 0:
            raise ValueError("A positive integer or " +
                             "floating point number is expected.")
        self.radius = value

    def calculate_area(self):
        """ This method calculates the area of a circle """
        area = round(pi * self.get_radius()**2, 2)
        return f"The area of the circle is: {area} inches squared"

    def calculate_circumference(self):
        """ This method calculates the circumference of a circle """
        circumference = round(2 * pi * self.get_radius(), 2)
        return f"The circumference of the circle is: {circumference} inches"


if __name__ == "__main__":
    # Create an instance of the Circle class
    c = Circle()
    # Prompt the user for the radius of the circle
    circle_radius = input("Enter the radius of the circle in inches: ")

    try:
        # Set the radius of the circle.
        c.set_radius(float(circle_radius))

        # Print the area of the circle
        print(c.calculate_area())

        # Print the circumference of the circle
        print(c.calculate_circumference())

    except ValueError as e:
        print(f"Error: {e}")
