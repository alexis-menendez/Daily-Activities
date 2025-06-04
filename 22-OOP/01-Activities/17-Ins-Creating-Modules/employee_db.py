""" This class stores and retrieves user account information"""
import json

from pathlib import Path

file_path = "account_info.json"


class EmployeeDatabase:
    """
    A class to manage the saving and retrieval of user account information
    to and from a JSON file.
    """
    def __init__(self,
                 account_creation,
                 filename=file_path):
        """
        Initializes an EmployeeDatabase instance with a
        reference to an EmployeeData object and the path to the JSON file.

        Parameters:
            account_creation: An instance of EmployeeData
            containing user details.
            filename (str): The path to the JSON file where account
            information will be saved.
        """
        self.account_creation = account_creation
        self.filename = Path(filename)

    def save_employee(self):
        """
        Saves the account information to a JSON file.
        If the file already exists, it will be overwritten.
        """
        data = {
            'first_name': self.account_creation.first_name,
            'last_name': self.account_creation.last_name,
            'email': self.account_creation.email,
            'password': self.account_creation.password
        }

        # Check if the file exists and if it contains any data
        if self.filename.exists() and self.filename.stat().st_size > 0:
            with self.filename.open('r+', encoding='utf-8') as json_file:
                existing_data = json.load(json_file)
                # Append new data to the "accounts" list
                if 'employees' in existing_data:
                    existing_data['employees'].append(data)
                else:
                    existing_data['employees'] = [data]
                # Move the cursor to the beginning of the file
                json_file.seek(0)
                # Write the updated data
                json.dump(existing_data, json_file, indent=4)
        else:
            # Create new file with "accounts" key
            # if file doesn't exist or is empty
            with self.filename.open('w', encoding='utf-8') as json_file:
                json.dump({'employees': [data]}, json_file, indent=4)

    def all_employees(self):
        """
        Reads the JSON file and returns its contents formatted as a string.

        Returns:
            str: A formatted string of all account information entries
            loaded from the JSON file, or a message if the file
            is not found or is empty.
        """
        if self.filename.exists() and self.filename.stat().st_size > 0:
            with self.filename.open('r', encoding='utf-8') as json_file:
                data = json.load(json_file)
                output = ("Here are the employees:\n"
                          "------------------------\n")
                accounts = data.get('employees', [])
                for entry in accounts:
                    output += (f"First name: {entry.get('first_name')}\n"
                               f"Last name: {entry.get('last_name')}\n"
                               f"Email: {entry.get('email')}\n"
                               f"Password: {entry.get('password')}\n"
                               "------------------------------\n")
                return output
        else:
            return "No account information found."
