"""This script represents a hotel reservation system"""

from abc import ABC, abstractmethod


# Define an abstract class for a room
class Room(ABC):
    """
    Abstract base class representing a hotel room.

    Attributes:
        room_type (str): The type of the room (e.g., 'Standard', 'Deluxe').
        price (int): The price per night for the room.
        amenities (list): A list of amenities available in the room.
    """

    def __init__(self, room_type, price, amenities):
        """
        Initialize the Room class with room type, price, and amenities.

        Args:
            room_type (str): The type of the room.
            price (int): The price per night for the room.
            amenities (list): A list of amenities available in the room.
        """
        self.room_type = room_type
        self.price = price
        self.amenities = amenities

    @abstractmethod
    def get_details(self):
        pass


# Define a concrete class for a standard room
class StandardRoom(Room):
    """
    Concrete class representing a Standard Room.

    Attributes:
        room_number (int): The unique number assigned to the room.
    """

    def __init__(self, room_number):
        """
        Initialize a Standard Room with room number.

        Args:
            room_number (int): The unique number assigned to the room.
        """
        super().__init__("Standard", 100, ["Free WiFi", "TV"])
        self.room_number = room_number

    def get_details(self):
        """
        Get the details of the Standard Room.

        Returns:
            str: A formatted string with room details.
        """
        return (
            f"Room {self.room_number} - {self.room_type} Room, "
            f"${self.price}/night, Amenities: {', '.join(self.amenities)}"
        )


# Define a concrete class for a deluxe room
class DeluxeRoom(Room):
    """
    Concrete class representing a Deluxe Room.

    Attributes:
        room_number (int): The unique number assigned to the room.
    """

    def __init__(self, room_number):
        """
        Initialize a Deluxe Room with room number.

        Args:
            room_number (int): The unique number assigned to the room.
        """
        super().__init__(
            "Deluxe",
            150,
            ["Free WiFi", "TV", "Mini Bar", "Ocean View"]
        )
        self.room_number = room_number

    def get_details(self):
        """
        Get the details of the Deluxe Room.

        Returns:
            str: A formatted string with room details.
        """
        return (
            f"Room {self.room_number} - {self.room_type} Room, "
            f"${self.price}/night, Amenities: {', '.join(self.amenities)}"
        )


# Define a class for managing hotel reservations
class Hotel:
    def __init__(self):
        """
        Initialize the Hotel with available rooms and
        an empty reservations list.
        """
        self.available_rooms = [
            StandardRoom(101),
            StandardRoom(102),
            DeluxeRoom(201),
            DeluxeRoom(202)
        ]
        self.reservations = []

    def search_rooms(self):
        # TODO: Print the details of all available rooms.

    def make_reservation(self, room_number):
        # TODO: Reserve a room with the given room number.

    def cancel_reservation(self, room_number):
        # TODO: Cancel a reservation for a room with the given room number.


# Define the main function
def main():
    """The CLI interface for the Hotel Reservation System."""
    hotel = Hotel()

    while True:
        print("\nHotel Reservation System")
        print("1. Search available rooms")
        print("2. Make a reservation")
        print("3. Cancel a reservation")
        print("4. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            hotel.search_rooms()
        elif choice == "2":
            room_number = int(input("Enter the room number to reserve: "))
            hotel.make_reservation(room_number)
        elif choice == "3":
            room_number = int(input("Enter the room number to cancel: "))
            hotel.cancel_reservation(room_number)
        elif choice == "4":
            break
        else:
            print("Invalid choice, please try again.")


if __name__ == "__main__":
    main()
