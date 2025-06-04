"""
This main program demonstrates
the use of the SavingsAccount and CheckingAccount classes.
"""
from bank_account import SavingsAccount, CheckingAccount


def main():
    """
    This main program demonstrates the use
    of the SavingsAccount and CheckingAccount classes.
    """
    # Savings Account Example

    savings_account = SavingsAccount(1000)
    print("Original savings account balance:"
          f" ${savings_account.get_balance():,.2f}\n")

    savings_account.deposit(200)
    print(f"Savings account balance: ${savings_account.get_balance():,.2f}\n")
    try:
        savings_account.withdraw(1500)
    except ValueError as e:
        print(e)
    print(f"Savings Account Balance: ${savings_account.get_balance():,.2f}\n")

    # Checking Account Example
    checking_account = CheckingAccount(500)
    print("Original checking account balance:"
          f" ${checking_account.get_balance():,.2f}\n")
    checking_account.deposit(1550.50)
    print(f"Checking account balance: ${checking_account.get_balance():,.2f}\n")
    try:
        checking_account.withdraw(2500)
    except ValueError as e:
        print(e)


if __name__ == "__main__":
    main()
