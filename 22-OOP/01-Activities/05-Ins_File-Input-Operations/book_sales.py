import csv
from pathlib import Path

####################################################
# Reading all the contents row by row of a CSV file.
# Using the reader() function.
####################################################
# Define the path to your CSV file
# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_path = current_directory / "Resources" / "book_sales.csv"

def read_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
    path (str or Path): The path to the CSV file to read.

    Returns:
    list: The file contents by row.
    """
    try:
    # Open the CSV file using the csv module
    # Use the read mode and encoding='utf-8'.
    # This is the standard encoding for CSV files.
        with open(path, 'r', encoding='utf-8') as file:
            # Create a CSV reader object with the reader() function.
            csv_data = csv.reader(file)

            # Read all rows into a list
            contents = [row for row in csv_data]

            # Iterate over each row in the CSV file
            for row in csv_data:
                # Print each row from the file.
                print(row)

            return contents
    except FileNotFoundError:
        print(f"Error: The file at {path} was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


if __name__ == "__main__":
    # Call the function with the subject and file path.
    read_csv(file_path)
    print("\n")

#############################################################
# Retrieving only the book title and author from the CSV file.
# Using the reader() function.
#############################################################


def get_title_author(path):
    """
    Reads a CSV file and prints the book title and author.
    Args:
    path (str or Path): The path to the CSV file to read.

    Returns:
    str: The book title and author from the CSV file.
    """
    # Open the CSV file using the csv module
    # Use the read mode and encoding='utf-8'.
    # This is the standard encoding for CSV files.
    with open(path, 'r', encoding='utf-8') as file:
        # Create a CSV reader object with the reader() function.
        csv_data = csv.reader(file)

        # Extract the header row to get column indices.
        header = next(csv_data)
        # Get the index of the book_title and author columns.
        book_title_index = header.index("book_title")
        # Get the index of the author column.
        author_index = header.index("author")

        # Iterate over each row in the CSV file
        for row in csv_data:
            # Print the book title and the author.
            print(f'{row[book_title_index]} was written by '
                  f'{row[author_index]}.')


if __name__ == "__main__":
    # Call the function with the subject and file path.
    get_title_author(file_path)
    print("\n")

#############################################################
# Retrieving only the book title and author from the CSV file.
# Using the DictReader() class.
#############################################################


def dict_reader_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
    path (str or Path): The path to the CSV file to read.

    Returns:
    dict: The book title and author from the CSV file.
    """
    # Open the CSV file using the csv module
    with open(path, 'r', encoding='utf-8') as file:
        # Create a CSV reader object using the DictReader() class.
        csv_data = csv.DictReader(file)

        # Iterate over each row in the CSV file
        for row in csv_data:
            # Print the book title and the author.
            print(f'{row["book_title"]} was written by {row["author"]}.')


if __name__ == "__main__":
    # Call the function with the subject and file path.
    dict_reader_csv(file_path)
    print("\n")
