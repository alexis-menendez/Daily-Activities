"""This function handles the deposit process for the user."""


def handle_deposit(checking, savings):
    """
    This function handles the deposit process for the user.

    Parameters:
    checking (Account): The checking account object.
    savings (Account): The savings account object.
    """
    print("Which account would you like to make a deposit?")
    # Prompt the user to select an account and make a deposit.
    account_choice = input("Enter 1 for checking,\n"
                           "enter 2 for savings,\n"
                           "enter q to quit: ")
    if account_choice == 'q':
        return
    try:
        # If the selection is in a list of valid choices, i.e ['1', '2']
        if account_choice in ['1', '2']:
            try:
                # Prompt the user to enter the amount to deposit and
                #  convert it to a float.
                amount = float(input("How much would you like to deposit? "))
            except ValueError:
                # Print an error message if the user enters an invalid amount.
                print("Please enter a dollar amount.\n")
                # Call the handle_deposit function recursively
                # for an invalid amount.
                handle_deposit(checking, savings)
                # Ensure the function returns after the recursive call.
                return
            # Use an if/else statement to check the account choice
            # and call the deposit method on the appropriate account.
            if account_choice == '1':
                checking.deposit(amount)
                print(f"Here is your checking balance: ${checking.get_balance():,.2f}")
            else:
                savings.deposit(amount)
                print(f"Here is your savings balance: ${savings.get_balance():,.2f}")
        else:
            raise ValueError("Invalid choice. Please enter 1, 2, or q.\n")
    # If the user enters an invalid choice,
    # Print the ValueError message
    # and call the handle_deposit function recursively.
    except ValueError as e:
        print(e)
        handle_deposit(checking, savings)
