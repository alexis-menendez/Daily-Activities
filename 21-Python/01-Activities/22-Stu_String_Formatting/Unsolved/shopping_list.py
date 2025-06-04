"""This script represents a shopping list"""

# Define the shopping list collection globally
# Include some initial items
shopping_list = {
    "apple": {"quantity": 2, "price": 0.75},
    "banana": {"quantity": 3, "price": 0.50},
    "orange": {"quantity": 1, "price": 1.15}
}


# Define the show_list function
def show_list():
    """Show the items in the shopping list"""

    formatted_items = []
    max_print_length = 0

    # Check if the shopping list is empty
    if not shopping_list:
        print("The shopping list is empty.")
    else:
        for item_name, item in shopping_list.items():
            if "price" in item:
                # TODO: What does this line do?
                price = f'${item["price"]:,.2f}'
            else:
                price = "unknown"

            # TODO: What does this line do?
            formatted_items.append(f"{item_name}: {item['quantity']} @ "
                                   f"{price} each")

            # TODO: What do these two lines do?
            if len(formatted_items[-1]) > max_print_length:
                max_print_length = len(formatted_items[-1])

    # TODO: What does this line do?
    border_string = "-" * (max_print_length + 4)

    # TODO: What does this line do?
    print(border_string)
    # TODO: What does this line do?
    print("|" + "Shopping List:".center(max_print_length + 2) + "|")
    print(border_string)

    for item in formatted_items:
        if len(item) < max_print_length:
            # TODO: What does this line do?
            print(f"| {item.ljust(max_print_length)} |")
        else:
            # TODO: What does this line do?
            print(f"| {item} |")
    print(border_string)


# Define the add_item function
def add_item(item_name, quantity=1, price=None):
    """Add an item to the shopping list"""

    # Check if the item is already in the shopping list
    if item_name in shopping_list:
        # Add the quantity to the existing quantity
        shopping_list[item_name]["quantity"] += quantity
    else:
        # Add the item to the shopping list
        shopping_list[item_name] = {"quantity": quantity}

    if price:
        shopping_list[item_name]["price"] = price

    print(f"Adding {quantity} {item_name} to the shopping list.")


# Define the remove_item function
def remove_item(item_name, quantity):
    """Remove an item from the shopping list"""

    # Check if the item is in the shopping list
    if item_name in shopping_list:
        # Check if the quantity to remove is greater than the quantity in the
        # shopping list
        if quantity >= shopping_list[item_name]["quantity"]:
            # Remove the item from the shopping list
            del shopping_list[item_name]
        else:
            # Subtract the quantity to remove from the quantity in the shopping
            # list
            shopping_list[item_name]["quantity"] -= quantity

        print(f"Removing {quantity} {item_name} from the shopping list.")
    else:
        print(f"{item_name} is not in the shopping list.")


if __name__ == "__main__":
    menu_options = {
        "1": "Add item",
        "2": "Remove item",
        "3": "Show list",
        "4": "Exit"
    }

    print("Welcome to the Shopping List App!")

    while True:
        print("\nPlease select an option:")

        for key, value in menu_options.items():
            print(f"Option {key}: {value}")

        choice = input("Choice: ")
        if choice in menu_options:
            # Check the user's choice
            # 1 - Add item
            if choice == "1":
                item_name = input("Enter the item name to add: ")
                quantity = int(input("Enter the quantity: "))

                # Create a dictionary with the arguments
                arguments = {"item_name": item_name, "quantity": quantity}

                # Check if the user wants to add a price
                price = input("Enter the price (optional): ")
                if price and price.replace(".", "").isdigit():
                    arguments["price"] = float(price)

                # Call the add_item function with the arguments
                # This is an example of unpacking a dictionary
                add_item(**arguments)
            # 2 - Remove item
            elif choice == "2":
                item_name = input("Enter the item name to remove: ")
                quantity = int(input("Enter the quantity to remove: "))

                # Create a dictionary with the arguments
                arguments = {"item_name": item_name, "quantity": quantity}
                # Call the remove_item function with the arguments
                # This is an example of unpacking a dictionary
                remove_item(**arguments)
            # 3 - Show list
            elif choice == "3":
                show_list()
            # 4 - Exit
            elif choice == "4":
                break
        else:
            print("Invalid choice. Please try again.")
