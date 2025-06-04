"""This script represents a shopping list"""

# Define the shopping list collection globally
shopping_list = {}


# Define the add_item function
def add_item(item_name, quantity):
    """Add an item to the shopping list"""

    # TODO: Check if the item is already in the shopping list
    # TODO: If the item exists, add the quantity to the existing quantity
    # TODO: If the item does not exist, add the item to the shopping list

    # TODO: Print a message indicating the item was added to the shopping list


# Define the remove_item function
def remove_item(item_name, quantity):
    """Remove an item from the shopping list"""

    # TODO: Check if the item is in the shopping list
    # TODO: Reduce the quantity or remove the item from the shopping list
    # TODO: Print messages about the item being removed or not being in the list


# Define the show_list function
def show_list():
    """Show the items in the shopping list"""

    print("Shopping List:")
    print("--------------")

    # Check if the shopping list is empty
    if not shopping_list:
        print("The shopping list is empty.")
    else:
        print(shopping_list)


if __name__ == "__main__":
    menu_options = {
        "1": "Add item",
        "2": "Remove item",
        "3": "Show list",
        "4": "Exit"
    }

    print("Welcome to the Shopping List App!")

    while True:
        print("\nPlease select an option:\n"
              "1: Add item\n"
              "2: Remove item\n"
              "3: Show list\n"
              "4: Exit")

        choice = input("Choice: ")
        if choice in menu_options:
            # Check the user's choice
            # 1 - Add item
            if choice == "1":
                item_name = input("Enter the item name to add: ")
                quantity = int(input("Enter the quantity: "))
                
                # TODO: Create a dictionary with the user input

                # TODO: Call the add_item function with the dictionary
                # TODO: Use dictionary unpackingw

            # 2 - Remove item
            elif choice == "2":
                item_name = input("Enter the item name to remove: ")
                quantity = int(input("Enter the quantity to remove: "))

                # TODO: Create a dictionary with the user input

                # TODO: Call the remove_item function with the dictionary
                # TODO: Use dictionary unpacking

            # 3 - Show list
            elif choice == "3":
                show_list()
            # 4 - Exit
            elif choice == "4":
                break
        else:
            print("Invalid choice. Please try again.")
