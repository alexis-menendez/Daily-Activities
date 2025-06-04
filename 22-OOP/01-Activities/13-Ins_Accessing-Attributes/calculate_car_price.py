"""
Create a class, TotalCarPrice,
with a method to get the total price of the car.
"""


# Define the TotalCarPrice class
class TotalCarPrice:
    """A class representing the total price of a car.

    This class calculates the total price of
    a car based on the given car price.

    Attributes:
      car_price (int): The price of the car.

    Methods:
      get_total_price(): Calculates and returns the total price of the car.
    """
    def __init__(self, price):
        # Convert the car price to an integer.
        self.price = int(price)

    def get_total_price(self):
        """Calculate the total price of the car.

        Returns:
        str: The total price of the car formatted as a string.
        """
        total_cost = self.price + (self.price * 0.0825) + 2000
        return f"${total_cost:,.2f}"


if __name__ == "__main__":
    try:
        
      car_price = input("Enter the sticker price of the car: ")
      my_price = TotalCarPrice(car_price)
      # Calculate the total price of the car.
      print("The total price of the car including tax " +
            f"and closing costs is: {my_price.price}")
      ##################################################################
      # Get the total price of the car using the get_total_price method.
      # Uncomment the following line to test the get_total_price method.
      ##################################################################
      # print("The total price of the car including tax " +
      #      f"and closing costs is: {my_price.get_total_price()}")
    except ValueError as e:
        print(f"Input error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
