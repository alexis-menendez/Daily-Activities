"""This function handles the deposit process for the user."""

# TODO: Build out the handle_deposit function
# TODO: Pass in the checking account and savings account objects.
def handle_deposit():
    """
    This function handles the deposit process for the user.

    Parameters:
    checking (Account): The checking account object.
    savings (Account): The savings account object.
    """
    print("Which account would you like to make a deposit?")
    # TODO: Prompt the user to select an account and make a deposit.
    # TODO: If the user chooses to quit, return from the function.
    if:
        return

    try:
        # TODO: If the selection is in a list of valid choices, i.e ['1', '2']
        if:
            try:
                # TODO: Prompt the user to enter the amount to deposit and convert it to a float.

            # Use the ValueError as an exception.
            except ValueError:
                # TODO: Print an error message if the user enters an invalid amount.

                # TODO: Call the handle_deposit function recursively for an invalid amount.

                # TODO: Ensure the function returns after the recursive call.

            # TODO: Add an if/else conditional statement to check the account choice,
            if:
                # TODO: Call the withdraw method on the appropriate account.
                # TODO: Add a print statement to display the updated balance after the deposit
                # TODO: Format the balance to two decimal places and thousands.
            else:
                # TODO: Call the deposit methods on the appropriate account.
                # TODO: Add a print statement to display the updated balance after the deposit
                # TODO: Format the balance to two decimal places and thousands.
        else:
            # TODO: Raise a ValueError with a message stating the user entered an invalid choice.
    # If the user enters an invalid choice,
    # Print the ValueError message and call the handle_deposit function recursively.
    except ValueError as e:
        print(e)
        handle_deposit(checking, savings)
