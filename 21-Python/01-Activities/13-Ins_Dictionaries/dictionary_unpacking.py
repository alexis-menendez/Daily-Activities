"""This script demonstrates dictionary unpacking in Python"""


def calculation(add=0, subtract=0, multiply=1, divide=1):
    """Perform a calculation and return the result"""
    return add - subtract * multiply / divide


if __name__ == "__main__":
    # Define a dictionary of arguments
    arguments = {
        "add": 10,
        "subtract": 2,
        "multiply": 3,
        "divide": 2
    }

    # Call the calculation function with unpacked arguments
    print(calculation(**arguments))
