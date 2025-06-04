"""This Python script simulates a food ordering system."""


# The following block of code is an example of a function in Python.
# TODO: Describe the function in your own words
def order(food="pizza", price=5.99, tax=6.5, quantity=1):
    """
    Prints a summary of an order including the dish, total cost, and quantity.

    Parameters:
    food (str): The name of the food being ordered.
    price (float): The price of the food.
    tax (float): The tax rate for the order.
    quantity (int): The number of meals being ordered.
    """

    # TODO: Describe the purpose of the following line of code
    total = round(price * quantity * (1 + tax / 100), 2)

    # TODO: Describe the purpose of the following line of code
    print(f"{quantity} order(s) of {food} will cost ${total}")


# TODO: Describe the purpose of the following line of code
if __name__ == "__main__":
    # TODO: Describe the purpose of the following line of code
    order_options = {
        "pizza": 5.99,
        "pasta": 6.99,
        "salad": 5.49,
        "soup": 3.99
    }

    # TODO: Describe the purpose of the following line of code
    while True:
        # TODO: Describe the purpose of the following line of code
        meal = input("What would you like to order?\n"
                     + "Choose from the following options: "
                     + ", ".join(order_options.keys()) + " ")

        # TODO: Describe the purpose of the following line of code
        if meal in order_options:
            # TODO: Describe the purpose of the following line of code
            price = order_options[meal]

            # TODO: Describe the purpose of the following line of code
            quantity = input("How many orders of " + meal
                             + " would you like? ")

            # TODO: Describe the purpose of the following line of code
            while not quantity.isdigit():
                # TODO: Describe the purpose of the following line of code
                quantity = input("Please enter a valid number. ")

            # TODO: Describe the purpose of the following line of code
            order(meal, price, quantity=int(quantity))
        # TODO: Describe the purpose of the following line of code
        else:
            # TODO: Describe the purpose of the following line of code
            print("Invalid order. Try again.")
            # TODO: Describe the purpose of the following line of code
            continue

        # TODO: Describe the purpose of the following line of code
        continue_ordering = input("Would you like to order another dish? "
                                  + "(y/n) ")

        # TODO: Describe the purpose of the following line of code
        if continue_ordering.lower() != "y":
            # TODO: Describe the purpose of the following line of code
            break
