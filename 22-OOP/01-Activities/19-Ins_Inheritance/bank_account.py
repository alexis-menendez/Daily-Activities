"""
The SavingsAccount class represents a simple savings account
with methods for depositing, withdrawing, and getting the balance.
The CheckingAccount class inherits from the SavingsAccount class
and adds an overdraft limit to the account.
If the balance goes below the overdraft limit,
the account will not allow further withdrawals.
"""


class SavingsAccount:
    """
    A class representing a savings account.

    Attributes:
        balance (float): The current balance of the checking account.
        deposit (float): Adds the amount to the balance.
        withdraw (float): Withdraws the amount from the balance.

    Methods:
        __init__(balance):
        Initializes a new instance of the SavingsAccount class

        deposit(amount): Deposits the specified amount into the account.
        withdraw(amount): Withdraws the specified amount from the account.
        get_balance(): Returns the current balance of the account.
    """
    def __init__(self, balance):
        """Initializes the account with a balance."""
        self.balance = balance

    def deposit(self, amount):
        """Adds the amount to the balance."""
        self.balance += amount

    def withdraw(self, amount):
        """
        Withdraws an amount from the account.

        Args:
            amount (float): The amount to be withdrawn.

        Raises:
            ValueError: If the amount is greater than the balance.
        """
        if self.balance >= amount:
            self.balance -= amount
        else:
            raise ValueError("Insufficient funds.")

    def get_balance(self):
        """Returns the current balance of the account."""
        return self.balance


# CheckingAccount inherits from SavingsAccount
class CheckingAccount(SavingsAccount):
    """
    A class representing a checking account with overdraft protection.

    Attributes:
        balance (float): The current balance of the checking account.
        overdraft_limit (float): The maximum negative balance allowed
        for the account.

    Methods:
        __init__(balance, overdraft_limit=100):
        Initializes a new instance of the CheckingAccount class
        with the given balance and overdraft limit.
        deposit(amount): Deposits the specified amount into the account.
        withdraw(amount): Withdraws the specified amount from the account.
        get_balance(): Returns the current balance of the account.
    """
    def __init__(self, balance, overdraft_limit=100):
        """Initializes the account with balance and overdraft limit."""
        super().__init__(balance)  # Calls the parent class constructor
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        """
        Withdraws an amount from the account, considering the overdraft limit.

        Args:
            amount (float): The amount to be withdrawn.

        Raises:
            ValueError: If the amount exceeds the balance plus overdraft limit.
        """
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
        else:
            raise ValueError("Insufficient funds, overdraft limit reached.")
