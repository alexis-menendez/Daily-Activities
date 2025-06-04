"""This function calculates the monthly payment of a new car."""


def calculate_monthly_payment(principal, annual_interest_rate, length_of_loan):
    """
    Calculate the monthly payment for a car loan.

    Parameters:
    principal (float): The principal amount of the loan.
    annual_interest_rate (float): The annual interest rate for the loan.
    length_of_loan (int): The length of the loan in months.

    Returns:
    float: The monthly payment for the car loan.
    """
    # Convert annual interest rate to monthly interest rate
    monthly_interest_rate = (annual_interest_rate / 100) / 12

    # Calculate monthly payment using the loan payment formula
    payment = principal * ((monthly_interest_rate *
                           (1 + monthly_interest_rate) ** length_of_loan) /
                           ((1 + monthly_interest_rate) ** length_of_loan - 1))

    # Return the monthly payment back to the caller
    return payment
