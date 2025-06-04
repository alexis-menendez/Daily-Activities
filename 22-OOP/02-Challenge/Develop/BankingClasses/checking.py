"""The checking account class."""
# TODO: Import the BankAccount class from the banking file.

# TODO: Implement the CheckingAccount class, which should inherit from the BankAccount class.
class
    """
    A class representing a checking account.

    Attributes:
        overdraft_limit (float): The maximum negative balance allowed for the account.
        balance (float): The current balance of the account.

    Methods:
        __init__(overdraft_limit=100): Initializes a new instance of the CheckingAccount class.
        deposit(amount): Deposits the specified amount into the account.
        withdraw(amount): Withdraws the specified amount from the account.
        get_balance(): Returns the current balance of the account.
    """
    # TODO: Define the constructor with a balance and overdraft_limit parameter.
    # TODO: Set the overdraft limit attribute to 100 by default.
    # TODO: Call the parent class constructor, BankAccount, to initialize the balance attribute.


    # TODO: Implement the deposit method with an amount parameter.
        """ This method deposits the specified amount into the account. """
        # TODO: Set the balance attribute to the sum of the current balance and the amount.

    # TODO: Implement the withdraw method with an amount parameter.
        """ This method withdraws the specified amount from the account.
        Args:
            amount (float): The amount to be withdrawn.
        Raises:
            ValueError: If the specified amount is greater than the current balance.
        """
        if:
        # TODO: Check if the amount is less than or equal to the sum of the balance and overdraft limit.
        # TODO: If the condition is met, subtract the amount from the balance attribute.
        else:
        # TODO: Otherwise, raise a ValueError with the message "Insufficient funds, overdraft limit reached".

    def get_balance(self):
        """Returns the current balance of the savings account."""
        return self.balance
