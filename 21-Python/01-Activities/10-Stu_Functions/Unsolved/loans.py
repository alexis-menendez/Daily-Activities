"""This script contains functions that perform calculations related to loans.
"""


# TODO: Define the calculate_loan_balance function
# TODO: Use the following default values for the function parameters:
# TODO: monthly_payment=0, annual_interest_rate=5.99, years=1

    """Calculate the balance of a loan after a given number of years.

    Parameters:
    principal (float): The initial loan amount.
    monthly_payment (float): The monthly payment
    annual_interest_rate (float): The annual interest rate.
    years (int): The number of years.

    Returns:
    float: The balance of the loan after a given number of years.
    """

    # Loop through the years
    for year in range(years):
        # Loop through the months
        for month in range(12):
            # Calculate the balance of the loan
            principal = (principal * (1 + annual_interest_rate / 100 / 12)
                         - monthly_payment)

            # Check if the balance of the loan is negative
            if principal <= 0:
                # TODO: If the balance of the loan is negative, return 0


    # TODO: Return the balance of the loan after a given number of years
    # TODO: Round the balance to two decimal places



# Define the main function
if __name__ == "__main__":
    # Get the loan details from the user
    principal = float(input("Enter the loan amount: "))
    monthly_payment = float(input("Enter the monthly payment: "))

    # TODO: Calculate the balance of the loan using the default values
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable


    # Print the balance of the loan
    print(f"The balance of the loan after one year is ${balance}")

    print("Calculate the balance of the loan after a different number of "
          + "years.")

    # Get the number of years from the user
    years = int(input("Enter the number of years: "))

    # TODO: Calculate the balance of the loan using years as a keyword argument
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable


    # Print the balance of the loan
    print(f"The balance of the loan after {years} years is ${balance}")

    print("The default interest rate is 5.99%."
          "Calculate the balance of the loan with a different interest rate.")

    # Get the number of years from the user
    interest = float(input("Enter the interest rate: "))

    # TODO: Calculate the balance of the loan using interest as a positional argument
    # TODO: Send the user input values for principal, monthly_payment, and interest to the function
    # TODO: Store the result in the balance variable


    # Print the balance of the loan
    print(f"The balance of the loan with an interest rate of {interest}% "
          + f"after one year is ${balance}")

    # TODO: Calculate the balance of the loan using all of the used inputs as positional arguments
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable


    # Print the balance of the loan
    print(f"The balance of the loan with an interest rate of {interest}% "
          + f"after {years} years is ${balance}")
