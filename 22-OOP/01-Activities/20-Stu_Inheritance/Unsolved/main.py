"""
This program allows a customer to book
a room for a specified number of nights.
"""
from rooms import Reservation
# TODO: Import the Customer class


def display_available_rooms():
    """
    Displays the list of available rooms by creating a Reservation instance
    and calling its display_rooms method.
    """
    # Create a Reservation instance and call the display_rooms method.
    reservation = Reservation()
    # Display the rooms from the JSON file.
    reservation.display_rooms()


def prompt_customer_details():
    """
    Prompts the user to enter their details
      and the type of room they want to book.
    Validates the room type and availability.

    Returns:
        tuple: A tuple containing the first name, last name, number of nights,
               and room type if a valid room is available.
    """
    first_name = input("\nEnter your first name: ").strip()
    last_name = input("Enter your last name: ").strip()
    nights = int(input("Enter number of nights staying: ").strip())

    while True:
        room_type = input("Enter the type of room you want: ").strip().lower()
        reservation = Reservation()
        reservation.load_rooms()
        room = next((r for r in reservation.rooms
                     if r['type'] == room_type), None)

        if not room:
            print(f"\nError: No available rooms for that type '{room_type}'.")
        elif room['available'] <= 0:
            print(f"\nError: No available rooms for type '{room_type}'.")
        else:
            return first_name, last_name, nights, room_type


def confirm_booking(customer):
    """
    Prompts the user to confirm their booking details.

    Args:
        customer (Customer): The customer object containing booking details.
    """
    while True:
        confirmation = input(
            f"Confirm booking for {customer.first_name} {customer.last_name}, "
            f"{customer.room_type.capitalize()} room, "
            f"{customer.nights} nights at ${customer.room['price']}"
            f" per night? (Y/N): ").strip().upper()
        if confirmation == "Y":
            total_cost = customer.nights * customer.room['price']
            print("\nBooking confirmed!")
            print(f"Name: {customer.first_name} {customer.last_name}")
            print(f"Room Type: {customer.room_type.capitalize()}")
            print(f"Number of Nights: {customer.nights}")
            print(f"Total Cost: ${total_cost}")
            break
        if confirmation == "N":
            print("\nBooking canceled.")
            break
        print("\nInvalid input. Please enter 'Y' or 'N'.")


def main():
    """ This is the main function that runs the program. """
    # Display the available rooms to the customer.
    display_available_rooms()

    # Prompt the customer for their details by
    # calling the prompt_customer_details function.
    first_name, last_name, nights, room_type = prompt_customer_details()

    # Create a Customer instance to handle booking
    # Pass the customer details to the Customer class.
    customer = Customer(first_name, last_name, nights, room_type)

    # If a room was successfully booked, confirm the booking.
    if customer.room:
        confirm_booking(customer)


if __name__ == "__main__":
    main()
