# Create an empty string to store the user's inputs.
order = ""

# Create a list of meal options.
order_options = ["goreng pisang", "nasi lemak", "roti canai", "laksa",
                 "cendol", "chicken rice", "char kway teow", "satay"]

# While loops use the same syntax as if statements.
# Create a continuous while loop.
while True:

    # Prompt the user to enter the name of the meal they would like to order.
    meal = input(f"What would you like to order?\n"
                 f"Choose from the following options:\n"
                 f"{str(order_options)}\n")

    # Check if the user's input is a valid meal option.
    if meal in order_options:

        # Check if the order string is empty.
        if not order:
            order = meal
        else:
            order = f"{order}, {meal}"

    # If the user's input is not a valid meal option.
    else:
        # Print an error message
        print("Invalid order. Try again.")
        # Return to the beginning of the while loop.
        continue

    # Ask the user if they would like to order another dish.
    continue_ordering = input("Would you like to order another dish? "
                              "(y/n) ")

    # Check if the user's input is not "y" or "Y".
    if continue_ordering.lower() != "y":
        # If the user's input is not "y" or "Y", break out of the loop.
        break

print_number = int(input("How many times would you like to print the order? "))

# To loop through a block of code a specified number of times in Python,
# we can use the range() function.
for i in range(print_number):
    print(f"Your order is: {order}")
