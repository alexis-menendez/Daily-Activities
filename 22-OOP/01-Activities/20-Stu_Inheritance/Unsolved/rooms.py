""" This module provides a class for managing room reservations. """
from pathlib import Path
import json

# Get the current script's directory
CURRENT_DIRECTORY = Path(__file__).parent
ROOMS_FILE_PATH = CURRENT_DIRECTORY / "Resources" / "rooms.json"


class Reservation:
    """
    A class to manage room reservations.

    Attributes:
        file_path (Path): The path to the rooms JSON file.
        rooms (list): A list of rooms loaded from the JSON file.
    """

    def __init__(self):
        """
        Initializes the Reservation class and loads rooms from the JSON file.
        """
        self.file_path = ROOMS_FILE_PATH
        self.rooms = []
        self.load_rooms()

    def load_rooms(self):
        """
        Loads rooms from the JSON file.

        Raises:
            FileNotFoundError: If the JSON file is not found.
            json.JSONDecodeError: If the JSON file is not valid.
        """
        try:
            with open(self.file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                self.rooms = data.get("rooms", [])
        except FileNotFoundError:
            print(f"Error: The file {self.file_path} was not found.")
        except json.JSONDecodeError:
            print("Error: The file is not a valid JSON.")

    def save_rooms(self):
        """
        Saves the current list of rooms to the JSON file.

        Raises:
            OSError: If there is an error writing to the file.
        """
        try:
            with open(self.file_path, 'w', encoding='utf-8') as file:
                json.dump({"rooms": self.rooms}, file, indent=4)
        except OSError as e:
            print(f"An unexpected error occurred while saving rooms: {e}")

    def display_rooms(self):
        """
        Displays the list of available rooms.

        Prints the room type, availability, and price for each room.
        """
        if not self.rooms:
            print("No room data available.")
            return
        print("Rooms available:")
        print("______________")
        for room in self.rooms:
            room_type = room['type'].capitalize()
            price = room['price']
            available = room['available']
            print(f"{room_type}: {available} left at ${price}")
