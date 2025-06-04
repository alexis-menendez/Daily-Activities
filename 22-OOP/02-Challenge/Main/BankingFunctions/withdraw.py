"""This function handles the withdrawal process for the user."""


def handle_withdrawal(checking, savings):
    """
    Handles the withdrawal of funds for checking and savings accounts.

    Parameters:
    - checking (CheckingAccount): The checking account object.
    - savings (SavingsAccount): The savings account object.

    The function prompts the user to select an account and make a withdrawal.
    It handles exceptions and prints error messages if the user enters invalid inputs.
    If the user enters 'q', the function returns and exits.
    If the user enters '1',
        the function asks for the withdrawal amount from the checking account.
    If the user enters '2',
        the function asks for the withdrawal amount from the savings account.
    After each withdrawal, the function prints the updated balance.
    If the user enters an invalid choice,
    the function displays an error message and prompts again.
    """
    print("Which account would you like to make a withdrawal?")
    # Prompt the user to select an account and make a withdrawal.
    account_choice = input("Enter 1 for checking,\n"
                           "enter 2 for savings,\n"
                           "enter q to quit: ")
    if account_choice == 'q':
        return
    # Use a try-except block to handle exceptions and print the error message.
    try:
        # If the selection is in a list of valid choices, i.e ['1', '2']
        if account_choice in ['1', '2']:
            try:
                # Prompt the user to enter the amount to withdraw
                # and convert it to a float
                amount = float(input("How much would you like to withdraw? "))
            # Use the ValueError as an exception.
            except ValueError:
                # Print an error message if the user enters an invalid amount.
                print("Please enter a dollar amount.\n")
                # Call the handle_withdrawal function recursively
                # for an invalid amount.
                handle_withdrawal(checking, savings)
                # Ensure the function returns after the recursive call.
                return
            if account_choice == '1':
                checking.withdraw(amount)
                print(f"Here is your checking balance: ${checking.get_balance():,.2f}")
            else:
                savings.withdraw(amount)
                print(f"Here is your savings balance: ${savings.get_balance():,.2f}")
        else:
            raise ValueError("Invalid choice. Please enter 1, 2, or q.\n")
    except ValueError as e:
        print(e)
        handle_withdrawal(checking, savings)
        return
