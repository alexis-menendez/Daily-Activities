from pathlib import Path
import csv

####################################################
# The following example uses a try-except statement
# to handle the FileNotFoundError.
####################################################

# Define the path to your CSV file
# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
grocery_db_path = current_directory / "Resources" / "grocery_data.csv"

# Create a variable for the header that contains the column names.
grocery_header = ['UPC12', 'Item Name', 'Cases', 'Date']

# Create a variable for the new grocery data.
grocery_data = [
    ['157603', 'Pasta-Penne', 5, '2022-12-10'],
    ['130760', 'Chicken-Whole', 4, '2022-12-22'],
    ['630514', 'Beef-Steak', 6,	'2023-02-04'],
    ['775007', 'Shrimp-Gulf', 12, '2023-07-15'],
    ['305067', 'Cheese-Cheddar', 2, '2023-08-25'],
    ['574690', 'Beef-Ground', 15, '2023-09-24']
]


def manage_csv_files(file, header_row, data):
    """This function creates a CSV file and writes the header to it.
    Args:
        file (Path): The path to the CSV file.
        header_row (list): The header row for the CSV file.
        data (list): grocery sales data as a list of lists
    """
    # If the file path exists to the file write data to it.
    try:
        # Use the with open statement to create a new CSV file.
        # Use utf-8 encoding to ensure the data is written correctly
        with open(file, 'w', encoding='utf-8') as data_file:
            # Create a writer object.
            writer = csv.writer(data_file)
            # Write the header row to the file.
            writer.writerow(header_row)
            # Write the data to the file.
            writer.writerows(data)

        # Print a message that says the file has been created.
        print(f"The CSV file {file} has been created successfully.\n")

    except FileNotFoundError:
        # Print a message that says the file doesn't exist.
        print(f"The file '{file}' does not exist.\n")


if __name__ == "__main__":
    # Call the function and pass the file_path, the header row,
    # and grocery data as arguments.
    manage_csv_files(grocery_db_path, grocery_header, grocery_data)

####################################################
# The following example uses a if-else conditional
# statement to check if a file exists, before creating
# a file and adding data to it.
####################################################

# Create a path to the file.
# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
book_db_path = current_directory / "Resources" / "book_sales.csv"

# Create a variable for the header row.
book_column_data = ['book_title', 'author', 'quantity_sold', 'price']

# Create a variable for the book data.
book_data = [
    ['The Shadow of the Wind', 'Carlos Ruiz Zafon', 2, 13.99],
    ['1984', 'George Orwell', 10, 8.99],
    ['To Kill a Mockingbird', 'Harper Lee', 5, 15.99],
    ['The Lord of the Rings', 'J.R.R. Tolkien', 16, 34.99],
    ['Pride and Prejudice', 'Jane Austen', 8, 6.99],
    ["Harry Potter and the Sorcerer's Stone", ' J.K. Rowling', 5, 9.99],
    ['The Great Gatsby', 'F. Scott Fitzgerald', 3, 5.99],
    ['One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 6, 11.99],
    ['The Catcher in the Rye', 'J.D. Salinger', 3, 7.99],
    ["The Hitchhiker's Guide to the Galaxy", 'Douglas Adams', 12, 9.99]
]


def csv_file_manager(file, column_data, data):
    """This function creates a CSV file and writes the header to it.
    Args:
        file (Path): The path to the CSV file.
        column_data (list): The header row for the CSV file.
        data (list): book sales data as a list of lists
    """
    # Check if the file exists using the Path.exists() method.
    if not file.exists():
        # If the file doesn't exist, print a message to the console
        # that says the file doesn't exist.
        print(f"The file doesn't exist. Creating a new file at {file}\n")
        # If the file doesn't exist, create it
        # Use the with open statement to create a new CSV file.
        # Use utf-8 encoding to ensure the data is written correctly
        with open(file, 'w', encoding='utf-8') as data_file:
            # Create a DictWriter object using the DicWriter class.
            # And pass header row to the fieldnames parameter.
            writer = csv.DictWriter(data_file, fieldnames=column_data)
            # Write the header row to the file.
            writer.writeheader()

        # Print a message to the console that says the file has been created
        # with the header row.
        print(f"The CSV file {file} has been created successfully "
              f"with header: {column_data}\n")

    else:
        # If the file already exists,
        # print a message that says the file already exists
        # and that data will be appended to the file.
        print("The file already exists. Appending data to the file.\n")
        # Open it in append mode and add the data to the file
        with open(file, 'a', encoding='utf-8') as data_file:
            # Create a writer object.
            writer = csv.writer(data_file)
            # Write the data rows to the file without writing the header row.
            writer.writerows(data)
            # Print a message that says the data has been added to the file.
            print(f"The data has been added to the file {file}\n")


if __name__ == "__main__":
    # Call the function and pass the file_path, the header row,
    # and book data as arguments.
    csv_file_manager(book_db_path, book_column_data, book_data)
