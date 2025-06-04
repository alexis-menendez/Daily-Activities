"""The checking account class."""
from BankingClasses.banking import BankAccount


class CheckingAccount(BankAccount):
    """
    A class representing a checking account.

    Attributes:
        balance (float): The current balance of the checking account.
        overdraft_limit (float): The maximum negative balance allowed
        for the account.

    Methods:
        __init__(overdraft_limit=100): Initializes a new instance
        of the CheckingAccount class.
        deposit(amount): Deposits the specified amount into the account.
        withdraw(amount): Withdraws the specified amount from the account.
        get_balance(): Returns the current balance of the account.
    """

    def __init__(self, balance, overdraft_limit=100):
        # Call the parent class constructor.
        super().__init__(balance)
        self.overdraft_limit = overdraft_limit
        self.balance = balance

    def deposit(self, amount):
        """ This method deposits the specified amount into the account. """
        self.balance += amount

    def withdraw(self, amount):
        """ This method withdraws the specified amount from the account.
        Args:
            amount (float): The amount to be withdrawn.
        Raises:
            ValueError: If the specified amount is greater
            than the current balance.
        """
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
        else:
            raise ValueError("Insufficient funds, overdraft limit reached.\n")

    def get_balance(self):
        """This method returns the current balance of the account."""
        return self.balance
