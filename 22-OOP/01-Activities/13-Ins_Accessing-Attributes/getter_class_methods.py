"""Creating a Car class with methods and instances"""


# Define the Car class
class Car:
    """A class representing a car.

    Attributes:
        make (str): The make of the car.
        model (str): The model of the car.

    Methods:
        get_make: Returns the make of the car.
        get_model: Returns the model of the car.
    """
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def get_make(self):
        """Gets the make of the car."""
        return self.make

    def get_model(self):
        """Gets the model of the car."""
        return self.model


if __name__ == "__main__":
    try:
    # Prompt the user to enter the information for the car for each parameter.
        car_make = input("Enter the make of the car: ")
        car_model = input("Enter the model of the car: ")

        # Create an instance of the Car class.
        my_car = Car(car_make, car_model)

        # Print the details of the car
        print('Here is the information you enter for the car.')
        print(f"Make: {my_car.get_make()}")
        print(f"Model: {my_car.get_model()}")
    except ValueError as e:
        print(f"Input error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
