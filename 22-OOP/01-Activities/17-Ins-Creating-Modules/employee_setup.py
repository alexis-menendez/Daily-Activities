"""
A class to manage user account information, including email, password,
first name, and last name, with validation for email format
and password length.
"""


class EmployeeData:
    """ This class manages user account information."""
    def __init__(self,
                 email=None,
                 password=None,
                 first_name=None,
                 last_name=None):
        self._email = email
        self._password = password
        self._first_name = first_name
        self._last_name = last_name

    @property
    def first_name(self):
        """Gets the first name of the user."""
        return self._first_name

    @first_name.setter
    def first_name(self, value):
        """Sets the first name of the user."""
        self._first_name = value

    @property
    def last_name(self):
        """Gets the last name of the user."""
        return self._last_name

    @last_name.setter
    def last_name(self, value):
        """Sets the last name of the user."""
        self._last_name = value

    @property
    def email(self):
        """Gets the email of the user."""
        return self._email

    @email.setter
    def email(self, value):
        """Sets the email of the user if it is in the correct format.

        Parameters:
            value (str): The email address to set.

        Raises:
            ValueError: If the email address is not in the correct format.
        """
        if "@" not in value or "." not in value:
            raise ValueError("That is an invalid email format.")
        self._email = value

    @property
    def password(self):
        """Gets the password of the user."""
        return self._password

    @password.setter
    def password(self, value):
        """
        Sets the password of the user if it is at least 8 characters long.
        Parameters:
            value (str): The password to set.

        Raises:
            ValueError: If the password is less than 8 characters long.
        """
        if len(value) < 8:
            raise ValueError("The password must be at least 8 characters long")
        self._password = value
