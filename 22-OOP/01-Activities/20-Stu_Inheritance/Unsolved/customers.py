""" This module provides a class for managing customer room reservations. """
# TODO: Import the CSV module.
# TODO: Import the Path module from the pathlib library.
# TODO: Import the Reservation class from the rooms module.



# Get the current script's directory
CURRENT_DIRECTORY = Path(__file__).parent
CUSTOMER_FILE_PATH = CURRENT_DIRECTORY / "Resources" / "customers.csv"


# TODO: Create a Customer class that inherits from the Reservation class.
class Customer():
    """
    A class to manage customer reservations, inheriting from Reservation.

    Attributes:
        first_name (str): The first name of the customer.
        last_name (str): The last name of the customer.
        nights (int): The number of nights the customer will stay.
        room_type (str): The type of room the customer wants to book.
        room (dict): The room booked by the customer.
    """
    # TODO: Define the __init__ method with the required parameters.

        """
        Initializes the Customer class with customer details
          and attempts to book a room.

        Args:
            first_name (str): The first name of the customer.
            last_name (str): The last name of the customer.
            nights (int): The number of nights the customer will stay.
            room_type (str): The type of room the customer wants to book.
        """
        # TODO: Call the __init__ method from the parent class

        # TODO: Set the customer details, the nights, and room type

        # Initialize the room attribute to None.
        # This will be set to the room dictionary if the room is available.
        self.room = None
        # TODO: Use an if statement to call the validate_room method
        # TODO: to check if the room is available

            # TODO: Call the book_room method from
            # TODO: the Reservation class to book the room.

    # TODO: Define the validate_room method.
    def validate_room(self):
        """
        Validates if the requested room type is available.

        Returns:
            bool: True if the room is available, False otherwise.
        """
        # TODO: Use a for loop to iterate over the rooms list from the parent class.

            # TODO: Check if the room type matches the requested room type.

                # TODO: Set the room attribute to the current room.

                # TODO: Check if the room is available by comparing the available attribute.
                # TODO: to less than or equal to 0.

                    # Print a message if the room is not available.
                    print(f"Sorry, there are no {self.room_type}"
                          f" rooms available.")
                    return False
                return True
        print(f"Sorry, {self.room_type} is not a valid room type.")
        return False

    # TODO: Define the book_room method.
    def book_room(self):
        """
        Books the room for the customer and updates the room availability.
        """
        # TODO: Decrement the available attribute of the room by 1.

        # TODO: Call the save_rooms method from the parent class
        # TODO: to save the updated room data.

        # TODO: Call the save_customer_data method to save the customer data.

        # Print a message confirming the booking.
        print(f"\n{self.first_name} {self.last_name} has booked a "
              f"{self.room_type} room for {self.nights} nights.")

    # TODO: Define the save_customer_data method.
    def save_customer_data(self):
        """
        Saves the customer data to a CSV file.

        The data includes the customer's first name,
          last name, number of nights,
        room type, and the total cost of the stay.
        """
        # TODO: Calculate the total cost of the stay.

        # Use a try-except block to write the customer data to the CSV file.
        try:
            # Write the header if the file is empty
            if not CUSTOMER_FILE_PATH.exists() or \
                CUSTOMER_FILE_PATH.stat().st_size == 0:
                with open(CUSTOMER_FILE_PATH, 'w',
                          newline='', encoding='utf-8') as file:
                    writer = csv.writer(file)
                    writer.writerow(["First Name", "Last Name", "Room",
                                    "Nights", "Total"])

            with open(CUSTOMER_FILE_PATH, 'a',
                      newline='', encoding='utf-8') as file:
                writer = csv.writer(file)
                # Write the customer data to the CSV file.
                writer.writerow([self.first_name,
                                self.last_name,
                                self.room_type,
                                self.nights,
                                total_cost])
        except OSError as e:
            print("An unexpected error occurred while "
                  f"saving customer data: {e}")
