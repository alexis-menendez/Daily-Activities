"""This script represents a toy library"""

# Define the toy library collection globally
toy_library = [
    {
        "toy": "Barbie Extra Fashion Doll with Afro-Puffs",
        "type": "Doll",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 24.75
    },
    {
        "toy": "Forbidden Island",
        "type": "Board Game",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 19.99
    },
    {
        "toy": "LEGO Minecraft The Axolotl House",
        "type": "Building Set",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 29.99
    }
]


# Define the checkout function
def checkout(toy_index, checkout_date, due_date):
    """Checkout a toy from the toy library"""

    # Get the toy from the toy library
    toy = toy_library[toy_index]

    # Check if the toy is available
    if toy["status"] == "Checked Out":
        print(f"Sorry, {toy['toy']} is already checked out.")
        # Return False, indicating the checkout was unsuccessful
        return False
    else:
        toy["status"] = "Checked Out"
        toy["checkout_date"] = checkout_date
        toy["due_date"] = due_date
        toy["checkout_count"] += 1

    print(f"Checking out {toy['toy']}.")

    # Update the toy library
    toy_library[toy_index] = toy

    # Return True, indicating the checkout was successful
    return True


# Define the return_toy function
def return_toy(toy_index):
    """Return a toy to the toy library"""

    # Get the toy from the toy library
    toy = toy_library[toy_index]

    # Check if the toy is checked out
    if toy["status"] == "Available":
        print(f"Sorry, {toy['toy']} is already available.")
        # Return False, indicating the return was unsuccessful
        return False
    else:
        toy["status"] = "Available"
        toy["checkout_date"] = ""
        toy["due_date"] = ""

    print(f"Returning {toy['toy']}.")

    # Update the toy library
    toy_library[toy_index] = toy

    # Return True, indicating the return was successful
    return True


# Define the add_toy function
def add_toy(toy, toy_type="", status="Available", replacement_cost=0.0):
    """Add a toy to the toy library"""

    toy_library.append({
        "toy": toy,
        "type": toy_type,
        "status": status,
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": replacement_cost
    })


# Define the remove_toy function
def remove_toy(toy_index):
    """Remove a toy from the toy library"""

    # Remove the toy from the toy library
    toy = toy_library.pop(toy_index)

    # Return the removed toy
    return toy


# Define the print library function
def print_library(status=None, view_details=False):
    """Print the toy library"""

    print("\nToy Library:")
    # If status is not None, filter the toy library by status
    # Otherwise, get the entire toy library as a list of tuples
    # Use a list comprehension to filter the toy library
    # Store the index and toy in a tuple
    if status is not None:
        toy_library_filtered = [(index, toy) for index, toy
                                in enumerate(toy_library)
                                if toy["status"] == status]
    else:
        toy_library_filtered = [(index, toy) for index, toy
                                in enumerate(toy_library)]

    # Print the toy library
    for item in toy_library_filtered:
        # Unpack the tuple
        index, toy = item
        # Print the toy index, name and status
        print(f"{index}: {toy['toy']}")
        print(f"Status: {toy['status']}")

        # Print the detailed information if view_details is True
        if view_details:
            print(f"Type: {toy['type']}")
            print(f"Checkout Count: {toy['checkout_count']}")
            print(f"Replacement Cost: ${toy['replacement_cost']:.2f}")
            # Print the checkout and due dates if the toy is checked out
            if toy['status'] == "Checked Out":
                print(f"Checkout Date: {toy['checkout_date']}")
                print(f"Due Date: {toy['due_date']}")
        print("-" * 40)


# Define a function to check if the user input is in the toy library
def check_if_index_in_library(index):
    """Check if a value can be converted to an integer"""

    if index.isdigit():
        index = int(index)
        if index < len(toy_library):
            return index
    print("Invalid index. Please try again.")
    return None


# Define the main function
if __name__ == "__main__":

    library_menu = {
        "1": "Checkout a Toy",
        "2": "Return a Toy",
        "3": "View Toy Library",
        "4": "View Detailed Toy Library",
        "5": "Add a Toy",
        "6": "Remove a Toy",
        "7": "Exit"
    }

    # Print the library menu
    print("Welcome to the Toy Library!")

    while True:
        print("\nPlease select an option:")
        for key, value in library_menu.items():
            print(f"Option {key}: {value}")

        # Get the user's choice
        choice = input("Choice: ")
        if choice in library_menu:
            # Check the user's choice
            # 1 - Checkout a Toy
            if choice == "1":
                # Print the toys that are available to checkout
                print_library("Available")

                # Check if the user input is in the toy library
                toy_index = None
                while toy_index is None:
                    toy_index = input("Enter the index of the toy you would "
                                      "like to checkout or press enter to "
                                      "return to the main menu: ")
                    # Break the loop if the user presses Enter
                    if toy_index is None:
                        break
                    toy_index = check_if_index_in_library(toy_index)
                # Continue to the main menu if the user presses Enter
                if toy_index is None:
                    continue
                # Get the checkout and due dates from the user
                checkout_date = input("Enter the checkout date: ")
                due_date = input("Enter the due date: ")
                # Checkout a toy
                result = checkout(toy_index, checkout_date, due_date)

                # Print the result of the checkout
                if result:
                    print("Thank you for checking out the toy.")
                else:
                    print("The toy was not checked out.")
            # 2 - Return a Toy
            elif choice == "2":
                # Print the toys that are checked out
                print_library("Checked Out")

                # Check if the user input is in the toy library
                toy_index = None
                while toy_index is None:
                    toy_index = input("Enter the index of the toy you would "
                                      "like to return or press enter to "
                                      "return to the main menu: ")
                    # Break the loop if the user presses Enter
                    if toy_index is None:
                        break
                    toy_index = check_if_index_in_library(toy_index)
                # Continue to the main menu if the user presses Enter
                if toy_index is None:
                    continue
                # Return a toy
                result = return_toy(toy_index)

                # Print the result of the return
                if result:
                    print("Thank you for returning the toy.")
                else:
                    print("The toy was not returned.")
            # 3 - View Toy Library
            elif choice == "3":
                # View the toy library
                print_library()
            # 4 - View Detailed Toy Library
            elif choice == "4":
                # View the toy library with full details
                print_library(view_details=True)
            # 5 - Add a Toy
            elif choice == "5":
                # Get the toy information from the user
                toy = input("Enter the name of the toy or press enter to "
                            "return to the main menu: ")
                # Check if the toy is empty and return to the main menu if so
                if toy is None:
                    continue
                print("For the remaining information, press Enter if the "
                      "information is not available.")
                toy_type = input("Enter the type of toy: ")
                replacement_cost = input("Enter the replacement cost of the "
                                         "toy: ")

                # Create a dictionary with the toy information
                toy_to_add = {"toy": toy}
                # Add the optional information if available
                if toy_type:
                    toy_to_add["toy_type"] = toy_type
                if (replacement_cost and
                        replacement_cost.replace(".", "", 1).isdigit()):
                    toy_to_add["replacement_cost"] = float(replacement_cost)
                # Add the toy to the toy library
                # Send the dictionary to the add_toy function
                # Use the ** operator to unpack the dictionary
                add_toy(**toy_to_add)

                print(f"Added {toy} to the toy library.")
            # 6 - Remove a Toy
            elif choice == "6":
                # Print the toy library
                print("Current Toy Library:")
                print_library()

                print("Please select a toy to remove:")

                # Check if the user input is in the toy library
                toy_index = None
                while toy_index is None:
                    toy_index = input("Enter the index of the toy you would "
                                      "like to remove or press enter to "
                                      "return to the main menu: ")
                    # Break the loop if the user presses Enter
                    if toy_index is None:
                        break
                    toy_index = check_if_index_in_library(toy_index)
                # Continue to the main menu if the user presses Enter
                if toy_index is None:
                    continue
                # Remove a toy
                removed_toy = remove_toy(toy_index)

                print(f"Removed {removed_toy['toy']} from the toy library.")
            # 7 - Exit
            elif choice == "7":
                # Exit the program
                print("Goodbye!")
                break
        else:
            print("Invalid choice. Please try again.")
            continue

        # Wait for the user to press Enter before continuing
        input("Press Enter to return to the main menu...")
