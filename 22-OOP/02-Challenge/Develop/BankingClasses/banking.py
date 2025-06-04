""" This module contains the abstract base class for a bank account. """
from abc import ABC, abstractmethod

class BankAccount(ABC):
    """
    Abstract base class representing a bank account.

    Attributes:
        balance (float): The current balance of the bank account.

    Methods:
        deposit(amount): Deposits the specified amount into the bank account.
        withdraw(amount): Withdraws the specified amount from the bank account.
        get_balance(): Returns the current balance of the bank account.
    """

    def __init__(self, balance=0):
        self.balance = balance

    @abstractmethod
    def deposit(self, amount):
        """Deposits the specified amount into the account."""

    @abstractmethod
    def withdraw(self, amount):
        """Withdraws the specified amount into the account."""

    @abstractmethod
    def get_balance(self):
        """Gets the balance of the specified account."""
