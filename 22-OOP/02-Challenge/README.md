# Module 22 Challenge: Banking System

## Your Task

Welcome to this week's Challenge! This week, you will use your Python OOP skills to build out a banking application that allows users to view their checking and savings account balances, make deposits and withdrawals from either account, and transfer from savings to checking or vice versa. After each transaction, the users should be able to view their updated balances.

You have been provided the main `BankAccount` class in the "BankingClasses" directory with abstract methods as starter code, and you have been provided the `balances` function in the `transfer.py` file.

You will use the methods in this class to build out the `Checking` and `Savings` classes. You will also create a `Validation` class that validates the user's login credentials for an email and password. Finally, using the methods from these classes, you will complete the `main`, `handle_deposit`, `handle_withdraw`, and `handle_transfer` functions in their appropriate files within the "BankingFunctions" directory.

For this challenge, you will build on the Python skills learned in the previous module by applying core OOP concepts such as classes, inheritance, polymorphism, and abstraction.

The application will be invoked by using the following command:

```bash
python3 main.py
```

## User Story

```text
AS a banking customer,
I WANT to log into my account with validated credentials, and manage my checking and savings accounts online,
SO THAT I can securely perform banking transactions without visiting a physical branch.
```

## Acceptance Criteria

```text
GIVEN A banking system
WHEN I launch the program
THEN I am prompted to enter my email and password for authentication
WHEN I enter invalid login credentials
THEN I am given up to three attempts to enter the correct credentials
WHEN I enter valid login credentials
THEN I am shown my checking and savings account balances
THEN I am asked if I want to make a deposit, withdrawal, transfer, check my balances, or quit
WHEN I select to make a deposit
THEN I am asked to choose which account to make a deposit to
WHEN I enter the deposit amount
THEN the chosen account balance is updated and displayed
WHEN I select an option to make a withdrawal
THEN I am asked to choose which account to make a withdrawal from
WHEN I enter the withdrawal amount
THEN the chosen account balance is updated and displayed, and an error is shown if funds are insufficient
WHEN I select an option to transfer funds
THEN I am asked to choose which account to transfer from
WHEN I enter the transfer amount
THEN both account balances are updated and displayed, and an error is shown if funds are insufficient
WHEN I select an option to check account balances
THEN I am shown the current balances of both checking and savings accounts
WHEN I choose to quit the program
THEN the program exits
```

## Mock-Up

The following image shows a mock-up of the banking system with an unsuccessful login:

!["Mock-up of the unsuccessful login in Terminal"](./Assets/python-terminal-max-attempts.png)

The following image shows a mock-up of the banking system with a successful login:

!["Mock-up of the successful login in Terminal"](./Assets/python-terminal-options.png)

The following image shows a mock-up of a user trying to make a deposit into the checking account.

* If the incorrect choice is entered, the system will let the user know it is an invalid choice.

* Once a correct value is entered, the user is asked to select an account or quit.

* If the incorrect choice is entered, the system will let the user know it is an invalid choice.

* Once a correct choice is entered, the user is ask to enter an amount to deposit.

* If the user enters a non-numeric value, the system will tell the user to enter a dollar amount, then start over and ask which account to make a deposit to.

* Once the user enters a valid choice and a dollar amount, the balance is updated and displayed.

    !["Mock-up of user making a deposit in Terminal"](./Assets/python-terminal-checking-deposit.png)

The following image shows a mock-up of a user trying to make a withdrawal from the savings account.

* If the incorrect choice is entered, the system will let the user know it is an invalid choice.

* Once a correct choice is entered, the user is asked to select an account or quit.

* If the user enters an incorrect choice, the system will let the user know it is an invalid choice and return to the original options.

* Once a correct choice is entered, the user is asked to enter an amount to withdraw.

* If the user enters a non-numeric value, the system will tell the user to enter a dollar amount.

* Once the user enters a valid choice and dollar amount, the balance is updated and displayed.

    !["Mock-up of user making a withdrawal in Terminal"](./Assets/python-terminal-savings-withdrawal.png)

The following image shows a mock-up of a user trying to make a transfer from savings to checking.

* If the incorrect choice is entered, the system will let the user know it is an invalid choice.

* Once a correct choice is entered, the user is asked to select an account or quit.

* If the user enters an incorrect choice, the system will let the user know it is an invalid choice and return to the original options.

* Once a correct choice is entered, the user is asked which account to transfer from.

* If the amount is a non-numeric value, the system will tell the user to enter a dollar amount and return to the transfer options.

* Once the user enters a valid choice and a dollar amount, both balances are updated and displayed.

    !["Mock-up of user making a transfer in Terminal"](./Assets/python-terminal-transfer.png)

## Getting Started

This is an autograded assignment, meaning that you will follow the link below to open the assignment in a new window in the Ed platform. You will modify the existing starter code files to meet the requirements listed below.

> **note** If you need any assistance with the Ed platform, please review the information on submitting assignments in Module 0.

## Grading Requirements

This Challenge is graded based on the following criteria:

### `Checking` class 15%

The `Checking` class must have:

* The `BankAccount` class is imported from the `banking.py` file, and the `Checking` class should inherit from the `BankAccount` class. (2 points)

* The class constructor inherits from the `BankAccount` class and has `balance` and `overdraft_limit` attributes. The overdraft limit attribute is set to 100 by default. (3 points)

* The `Checking` class has a `deposit` method that has an `amount` parameter. The `balance` attribute is set to the sum of the current balance plus the amount. (2 points)

* The `Checking` class has a `withdraw` method that has an `amount` parameter. (6 points)
    
    * If the amount to be withdrawn is less than or equal to the balance plus the overdraft limit, then the `withdraw` method returns the balance minus the amount. Otherwise, the method returns a `ValueError` saying there are insufficient funds.

* The `Checking` class has a `get_balance` method that returns the current balance of the account. (2 points)

### `Savings` class 15%

The `Savings` class must have:

* The `BankAccount` class is imported from the `banking.py` file, and the `Savings` class should inherit from the `BankAccount` class. (2 points)

* The class constructor inherits from the `BankAccount` class and has `balance` and `overdraft_limit` attributes. The overdraft limit attribute is set to 100 by default. (3 points)

* The `Savings` class has a `deposit` method that has an `amount` parameter. The `balance` attribute is set to the sum of the current balance plus the amount. (2 points)

* The `Savings` class has a `withdraw` method that has an `amount` parameter. (6 points)
    
    * If the amount to be withdrawn is less than or equal to the balance plus the overdraft limit, then the `withdraw` method returns the balance minus the amount. Otherwise, the method returns a `ValueError` saying there are insufficient funds.

* The `Savings` class has a `get_balance` method that returns the current balance of the account. (2 points)

### `Validation` class 10%

The `Validation` class must have:

* A `validate_email` method that uses the `staticmethod` decorator has an `email` parameter and returns `True` if the email contains an `"@"` symbol. (2 points)

* A `validate_password` method that uses the `staticmethod` decorator has a `password` parameter, and returns `True` if the password meets the following criteria: (8 points)

    * At least 8 characters long

    * Contains at least one uppercase letter

    * Contains at least one lowercase letter

    * Contains at least one digit

    * Contains at least one special character (!@#$%^&*)

### `main()` function 30%

The `main()` function must have the following:

* Import the `Savings`, `Checking`, and `Validation` classes from the appropriate file in the "BankingClasses" directory. (3 points)

* Import the `handle_deposit`, `handle_withdrawal`, `handle_transfer`, and `balances` functions from the appropriate file in the "BankingFunctions" directory. (3 points)

* Initializes a variable for login attempts to 1. (2 points)

* Has a `while` loop to validate the email and password. (5 points)

    * The `while` loop should run as long as the attempts variable is less than 3.

    * The email and password are validated using the `Validation` class.

    * If either the email or password are invalid, then prompt the user to enter the email and password again, and increment the number of attempts by 1.

* If the maximum number of attempts is reached, print a message and exit the program. (2 points)

* If the login is successful, display the checking and savings account balances. (2 points)

* Uses a `while` loop to present banking options for the user. The `while` loop should contain the following options, and run until the user chooses to quit: (6 points)

    * To make a deposit, they should enter "1".

    * To make a withdrawal, they should enter "2".

    * To make a transfer, they should enter "3".

    * To check their account balances, they should enter "4".

    * To quit, they should enter "q".

* Create a `list` of valid choices. (2 points)

* If the option the user enters is in the list of valid choices: (5 points)

    * Use `if/elif` conditional statements to check the user's option.

    * Call the appropriate function name that is provided in the starter code.

    * For each function, pass in the checking account and savings account objects that have the default balances.

    * If the option is not in the list of valid choices, provide a statement to the user that they entered an invalid choice, and they'll need to enter "1, 2, 3, 4, or q".


### `handle_deposit()` function 10%

The `handle_deposit` function must:

* Use the checking account and savings account objects as parameters. (1 point)

* Prompt the user to select an account to make a deposit. (1 point)

* If the user chooses to quit, return to the main function. (1 point)

* If the choice is in the list of valid choices, i.e., `['1', '2']`, use a `try-except` block and prompt the user to enter the amount to deposit and convert it to a float. (1 point)

* If a non-numeric value is entered, a `ValueError` is caught and a message is printed to the user to enter a dollar amount, and the `handle_deposit` function is called recursively. (2 points)

* If the choice is valid, an `if/else` statement is used to check the account choice and the deposit method is called on the appropriate account. (2 points)

* A print statement is displayed to show the updated balance after the deposit and is formatted in thousands with two decimal places. (1 point)

* If the user enters an invalid choice for deposit options, a message is printed stating so, and the `handle_deposit` function is called recursively. (1 point)

### `handle_withdrawal()` function 10%

The `handle_withdrawal` function must:

* Use the checking account and savings account objects as parameters. (1 point)

* Prompt the user to select an account and make a withdrawal. (1 point)

* If the user chooses to quit, return to the main function. (1 point)

* If the choice is in the list of valid choices, i.e. `['1', '2']`, use a `try-except` block and prompt the user to enter the amount to withdraw and convert it to a float. (1 point)

* If a non-numeric value is entered, a `ValueError` is caught and a message is printed to the user to enter a dollar amount, and the `handle_withdrawal` function is called recursively. (2 points)

* If the choice is valid, an `if/else` statement is used to check the account choice and the withdraw method is called on the appropriate account. (2 points)

* A print statement is displayed to show the updated balance after the withdrawal and is formatted in thousands with two decimal places. (1 point)

* If the user enters an invalid choice for withdrawal options, a message is printed stating so, and the `handle_withdrawal` function is called recursively. (1 point)

### `handle_transfer()` functions 10%

The `handle_transfer` function must:

* Use the checking account and savings account objects as parameters. (1 point)

* Prompt the user to select an account to transfer from. (1 point)

* If the user chooses to quit, return to the main function. (1 point)

* If the choice is in the list of valid choices, i.e. `['1', '2']`, use a `try-except` block and prompt the user to enter the amount to transfer and convert it to a float. (1 point)

* If a non-numeric value is entered, a `ValueError` is caught and a message is printed to the user to enter a dollar amount, and the `handle_transfer` function is called recursively. (2 points)

* If the choice is valid, an `if/else` statement is used to check the account choice and the withdraw and deposit methods are called on the appropriate accounts. (2 points)

* After the transfer, the updated balances of both accounts are printed in thousands with two decimal places. (1 point)

* If the user enters an invalid choice for transfer options, a message is printed stating so, and the `handle_transfer` function is called recursively. (1 point)

### `balances()` function

The `balances` function has been provided in the `transfer.py` file.

## How to Submit the Challenge

Follow the link below to open this autograded assignment in a new tab. Once you have completed the assignment in the Ed platform, submit it and you will return to Bootcamp Spot.

> **note** You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

> **important** No matter how difficult the course becomes, you must always turn in original work. Plagiarism is not tolerated. If your instructional or support staff determine that you have plagiarized work, your Student Success Advisor will determine the appropriate course of action based on university policy. Such actions may include, but are not limited to, a documented plagiarism discussion, an incomplete or failing grade assignment, or ineligibility for graduation.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
