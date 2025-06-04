# 🏗️  Customer Room Reservations

Work with a partner to implement the following user story:

* As a hotel manager, I want to allow customers to book rooms, check room availability, and manage reservations efficiently.

Work with a partner to complete the functionality of the customer side of creating a room reservation system. Add the `Customer` class to the [customers.py](Unsolved/customers.py) file and inherit the `Reservation` class in the [rooms.py](Unsolved/rooms.py) file. Using the `Customer` class make sure a room is available. If it is, book the room, then store the reservation information in a CSV file.

---

## 💡 Hints

Before you start, run the `main.py` file to show the room data from the JSON file. If you enter input for the prompts, you will get a `NameError` after you enter the type of room.

---

## Acceptance Criteria

* It's done when the required Python built-in modules and the `Reservation` class are imported in the `customers.py` file.

* It's done when the `Customers` class inherits from the `Reservation` class and the `__init__` contains the necessary parameters and attributes.

* It's done with the `main.py` file imports the `Customers` class from the `customers.py` file.

* It's done when the user is prompted to enter their first name, last name, number of nights, and desired room type.

* It's done when the `validate_room` method in the `Customers` class checks if the requested room type exists in the room data.

* It's done when the `validate_room` method confirms that the requested room type is available by verifying that the available count is greater than zero.

* It's done when the `validate_room` method confirms if the room type exists and is available. If the room is available, the booking process can proceed. If the room type exists but the room isn't available, then the program prints an error message stating that there are no available rooms.

* It's done when the `validate_room` method prints an error message if the room type entered by the user does not exist in the JSON file.

* It's done when the `book_room` method successfully updates the room's available count by subtracting the number of rooms booked from the `"available"` key-value.

* It's done when the `book_room` method saves the updated room data to the JSON file using the `save_rooms` method of the `Reservation` class, reflecting the new availability status.

* It's done when the `book_room` method saves the customer's booking details by calling the `save_customer_data` method.

* It's done when the `book_room` method prints a confirmation message indicating that the room has been successfully booked, including the customer's details and the total cost.

* It's done when the `save_customer_data` method checks if the CSV file exists and creates it with a header row if it does not.

* It's done when the `save_customer_data` method appends the customer's details, including first name, last name, number of nights, and total cost, to the CSV file.

* It's done when the `save_customer_data` method handles any exceptions that may occur during file operations and reports an error if the data cannot be saved.

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Look up how Python inheritance and polymorphism are different. Then, think about what types of subclasses would you create for room discounts using polymorphism.

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
