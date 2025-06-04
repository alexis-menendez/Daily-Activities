
"""
This program creates a user account
and saves the information to a JSON file.
It also retrieves the account information from the JSON file.
"""
from employee_setup import EmployeeData
from employee_db import EmployeeDatabase


def main():
    """ Main function to run the account creation program. """
    # Create an instance of the EmployeeData class.
    account_info = EmployeeData()

    # Ask the user to enter their first name.
    user_first_name = input("Enter your first name: ")
    account_info.first_name = user_first_name

    # Ask the user to enter their last name.
    user_last_name = input("Enter your last name: ")
    account_info.last_name = user_last_name

    while True:
        # Ask the user to enter an email address.
        user_email = input("Enter your email address: ")
        try:
            account_info.email = user_email
            break
        except ValueError as e:
            print(e)

    while True:
        print("Create a password that is at least 8 characters long.")
        user_pwd = input("Enter your password: ")
        try:
            account_info.password = user_pwd
            break
        except ValueError as e:
            print(e)

    # Create an instance of the AccountDatabase class.
    account_db = EmployeeDatabase(account_creation=account_info)

    # Save the account information to a JSON file
    account_db.save_employee()

    # Get the account information from the JSON file.
    print(account_db.all_employees())


if __name__ == "__main__":
    main()
