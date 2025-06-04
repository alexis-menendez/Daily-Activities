"""
This program creates a Car class with make and model attributes
and creates an instance of the class using user input.
"""


# Define the Car class
class Car:
    """
    A class that represents a car.

    Attributes:
      make (str): The make of the car.
      model (str): The model of the car.
    """
    def __init__(self, make=None, model=None):
        """
        Initializes the Car class with make and model attributes.

        Args:
            make (str): The make of the car.
            model (str): The model of the car.
        """
        # Note: The __init__ function is the constructor in Python.
        # Here we will initialize the make and model attributes.
        self.make = make
        self.model = model


if __name__ == "__main__":
    # Prompt the user to enter the make of the car.
    car_make = input("Enter the make of the car: ")
    # Prompt the user to enter the model of the car.
    car_model = input("Enter the model of the car: ")

    # Create an instance of the Car class with the user input as arguments.
    my_car = Car(car_make, car_model)

    # Print the details of the car
    print(f"The make of the car is, {my_car.make}")
    print(f"The car model is, {my_car.model}")
