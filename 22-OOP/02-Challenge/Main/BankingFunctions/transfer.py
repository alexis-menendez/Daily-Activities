""" This function handles the transfer process for the user."""


def handle_transfer(checking, savings):
    """
    Handles the transfer of funds between checking and savings accounts.

    Parameters:
    - checking (Account): The checking account object.
    - savings (Account): The savings account object.

    The function prompts the user to select an account to make a transfer.
    It handles exceptions and prints error messages if the user enters invalid inputs.
    If the user enters 'q', the function returns and exits.
    If the user enters '1',
        the function asks for the withdrawal amount from the checking account.
    If the user enters '2',
        the function asks for the withdrawal amount from the savings account.
    After the transfer the function prints the updated balances.
    If the user enters an invalid choice,
    the function displays an error message and prompts again.
    """
    print("Which account would you like to transfer from?")
    # Prompt the user to select an account to make a transfer.
    account_choice = input("Enter 1 to transfer from checking to savings,\n"
                           "enter 2 to transfer from savings to checking,\n"
                           "enter q to quit: ")
    if account_choice == 'q':
        return

    # Use a try-except block to handle exceptions and print the error message.
    try:
        # If the selection is in a list of valid choices, i.e ['1', '2']
        if account_choice in ['1', '2']:
            try:
                # Prompt the user to enter the amount to transfer
                # and convert it to a float.
                amount = float(input("How much would you like to transfer? "))
            except ValueError:
                # Print an error message if the user enters an invalid amount.
                print("Please enter a dollar amount.\n")
                # Call the handle_transfer function recursively
                # for an invalid amount.
                handle_transfer(checking, savings)
                # Ensure the function returns after the recursive call.
                return
            # Add an if/else conditional statement in the try statement
            # to check the account choice.
            if account_choice == '1':
                checking.withdraw(amount)
                savings.deposit(amount)
            else:
                savings.withdraw(amount)
                checking.deposit(amount)
            balances(checking, savings)
        else:
            raise ValueError("Invalid choice. Please enter 1, 2, or q.\n")
    except ValueError as e:
        print(e)
        # Call the handle_transfer function recursively
        # if the user enters an invalid choice.
        handle_transfer(checking, savings)

def balances(checking, savings):
    """This function prints the account balances for the user."""
    print("\nHere are your account balances:")
    print(f"Checking: ${checking.get_balance():,.2f}")
    print(f"Savings: ${savings.get_balance():,.2f}")
