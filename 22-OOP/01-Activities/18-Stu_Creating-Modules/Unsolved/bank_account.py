"""Create Bank Account class with methods"""


class SavingsAccount:
    """Creating a SavingsAccount class with methods"""
    # The __init__ method accepts an argument for the account's balance.
    # It is assigned to the balance attribute.
    def __init__(self, balance):
        self.balance = balance

    # The deposit method makes a deposit into the account.
    def deposit(self, amount):
        """Adds the amount to deposited to the balance."""
        self.balance += amount

    # The withdraw method withdraws an amount from the account.
    def withdraw(self, amount):
        """
        Checks that the amount to be withdrawn
        is greater than or equal to the balance
        If it is then the amount is subtracted from the balance.
        If not, the user is notified of insufficient funds.
        """
        if self.balance >= amount:
            self.balance -= amount
        else:
            print('Error: Insufficient funds')

    # The get_balance method returns the account balance.
    def get_balance(self):
        """Gets the balance of the account."""
        return self.balance
