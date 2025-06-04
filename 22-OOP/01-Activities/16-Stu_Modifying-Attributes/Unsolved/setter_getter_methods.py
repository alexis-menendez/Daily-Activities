""""
This class stores the user's account information
and saves it to a JSON file.
"""
import json


class AccountCreation:
    """A class that creates an email and password for a user."""
    def __init__(self,
                 email=None,
                 password=None,
                 first_name=None,
                 last_name=None):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name

    def get_first_name(self):
        """Gets the first name of the user."""
        return self.first_name

    def get_last_name(self):
        """Gets the last name of the user."""
        return self.last_name

    def get_email(self):
        """Gets the email of the user."""
        return self.email

    def get_password(self):
        """Gets the password of the user."""
        return self.password

    def set_first_name(self, value):
        """Sets the first name of the user."""
        self.first_name = value

    def set_last_name(self, value):
        """Gets the last name of the user."""
        self.last_name = value

    def set_email(self, value):
        """Sets the email of the user if it is in the correct format."""
        if "@" not in value or "." not in value:
            raise ValueError("That is an invalid email format.")
        self.email = value

    def set_password(self, value):
        """
        Sets the password of the user if it is at least 8 characters long.
        """
        if len(value) < 8:
            raise ValueError("The password must be at least 8 characters long")
        # If the password meets the requirements,
        # set the password to the user input.
        self.password = value

    def save_account(self, filename):
        """Saves the account information to a JSON file."""
        data = {
            'first_name': self.get_first_name(),
            'last_name': self.get_last_name(),
            'email': self.get_email(),
            'password': self.get_password()
        }
        with open(filename, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4)


if __name__ == "__main__":
    # Create an instance of the AccountCreation class.
    account_info = AccountCreation()
    # Ask the user to enter their first name.
    user_first_name = input("Enter your first name: ")
    # Set the first name using the setter method
    account_info.set_first_name(user_first_name)
    # Ask the user to enter their last name.
    user_last_name = input("Enter your last name: ")
    # Set the last name using the setter method
    account_info.set_last_name(user_last_name)

    while True:
        # Ask the user to enter an email address.
        user_email = input("Enter your email address: ")
        # Set the email using the setter method
        try:
            account_info.set_email(user_email)
            break
        except ValueError as e:
            print(e)

    while True:
        print("Create a password that is at least 8 characters long.")
        # Ask the user to enter a password.
        user_pwd = input("Enter your password: ")
        # Set the password using the setter method
        try:
            account_info.set_password(user_pwd)
            break
        except ValueError as e:
            print(e)

    # Save the account information to a JSON file
    account_info.save_account('account_info.json')

    # Print the confirmation message.
    print("Check your email for confirmation.")
