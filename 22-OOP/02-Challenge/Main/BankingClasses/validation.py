""" This class validates the email addresses and password when logging on."""


class Validation:
    """ This class contains methods for validating
    email addresses and passwords."""
    @staticmethod
    def validate_email(email):
        """ This function validates an email address."""
        return "@" in email

    @staticmethod
    def validate_password(password):
        """
        This function validates a password based on the following criteria:
        - The password must be at least 8 characters long.
        - The password must contain at least one uppercase letter,
        - one lowercase letter, one digit, and one special character(!@#$%^&*).

        Args:
          password (str): The password to be validated.

        Returns:
          bool: True if the password is valid, False otherwise.
        """
        # Check if the password is at least 8 characters long.
        if len(password) < 8:
            return False

        # Set the initial values of the has_upper, has_lower,
        # has_digit, and has_special variables to False.
        has_upper = False
        has_lower = False
        has_digit = False
        has_special = False
        special_characters = "!@#$%^&*"

        # Iterate over each character in the password.
        # If the character meets the specified criteria,
        # set the corresponding variable to True.
        for char in password:
            # Use if/elif/else statements to check the character type.
            if char.isupper():
                # Set the corresponding variable to
                # True if it fits the criteria.
                has_upper = True
            elif char.islower():
                has_lower = True
            elif char.isdigit():
                has_digit = True
            elif char in special_characters:
                has_special = True

        # Return the boolean value based on the conditions.
        return has_upper and has_lower and has_digit and has_special
