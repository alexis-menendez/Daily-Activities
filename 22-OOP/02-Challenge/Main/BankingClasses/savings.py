"""The savings account class."""
from BankingClasses.banking import BankAccount


class SavingsAccount(BankAccount):
    """
    A class representing a savings account.

    Attributes:
        balance (float): The current balance of the savings account.
        overdraft_limit (float): The maximum negative balance allowed
        for the account.


    Methods:
        __init__(overdraft_limit=100): Initializes a new instance of the
        SavingsAccount class.
        deposit(amount): Deposits the specified amount into the account.
        withdraw(amount): Withdraws the specified amount from the account.
        get_balance(): Returns the current balance of the account.
    """

    def __init__(self, balance, overdraft_limit=100):
        # Call the parent class constructor, BankAccount,
        # to initialize the balance attribute.
        super().__init__(balance)
        self.overdraft_limit = overdraft_limit
        self.balance = balance

    def deposit(self, amount):
        """Deposits the specified amount into the savings account."""
        self.balance += amount

    def withdraw(self, amount):
        """
        Withdraws the specified amount from the savings account.
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
        """Returns the current balance of the savings account."""
        return self.balance
