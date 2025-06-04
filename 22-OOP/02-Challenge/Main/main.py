"""This function handles the transfer process for the user."""

from BankingClasses.checking import CheckingAccount
from BankingClasses.savings import SavingsAccount
from BankingClasses.validation import Validation
from BankingFunctions.deposit import handle_deposit
from BankingFunctions.withdraw import handle_withdrawal
from BankingFunctions.transfer import handle_transfer, balances


def main():
    """
    This function is the entry point of the banking system.
    It prompts the user to enter their email and password for authentication.
    If the email and password are valid, the default balances are shown.
    It then presents a menu of options to the user,
    allowing them to make deposits, withdrawals, or transfers between accounts.
    """
    email = input("Enter your email: ")
    print("Your password should be at least 8 characters long,\n"
          "contain at least one uppercase and lowercase letter,\n"
          "one number, and one of the following special characters:!@#$%^&*.")
    password = input("Enter your password: ")

    # Initialize the attempts variable to 1.
    attempts = 1
    # Use a while loop to validate the email and password.
    while attempts < 3:
        # Validate the email and password using the Validation class.
        if not Validation.validate_email(email) or not Validation.validate_password(password):
            # If the email or password is invalid, print a message
            # and increment the attempts variable.
            print("\nInvalid email or password. Please try again.")
            email = input("Enter your email: ")
            password = input("Enter your password: ")
            attempts += 1
        else:
            break

    # If the maximum number of attempts is reached, print a message
    # and exit the program.
    if attempts == 3:
        print("Maximum number of attempts reached. Exiting program.")
        return

    # Set up accounts with default balances.
    checking_account = CheckingAccount(4321.00)
    savings_account = SavingsAccount(6543.21)

    # Print a message for the user inform them of their checking
    # and savings balances.
    print("\nHere are your account balances:")
    # Use the get_balance method to retrieve the
    # current balance of each account.
    print(f"Checking: ${checking_account.get_balance():,.2f}")
    print(f"Savings: ${savings_account.get_balance():,.2f}")

    # Write a while loop to present options for the user.
    # Have the loop run until the user chooses to quit (q).
    while True:
        print("\nWhat would you like to do?")
        print("Make a deposit? Enter 1")
        print("Make a withdrawal? Enter 2")
        print("Make a transfer? Enter 3")
        print("Check account balances? Enter 4")
        print("Quit? Enter q\n")
        choice = input("Enter your choice: ")

        # Create a list of valid choices.
        if choice in ['1', '2', '3', '4', 'q']:
            # Use if/elif conditional statements to check the user's choice.
            # If the choice is in the list of valid choices,
            # call the appropriate function.
            # Pass in the checking_account and savings_account objects.
            if choice == '1':
                handle_deposit(checking_account, savings_account)
            elif choice == '2':
                handle_withdrawal(checking_account, savings_account)
            elif choice == '3':
                handle_transfer(checking_account, savings_account)
            elif choice == '4':
                balances(checking_account, savings_account)
            elif choice == 'q':
                break
        # If the user enters an invalid choice, print a message.
        else:
            print("Invalid choice. Please enter 1, 2, 3, 4, or q.\n")


if __name__ == "__main__":
    main()
