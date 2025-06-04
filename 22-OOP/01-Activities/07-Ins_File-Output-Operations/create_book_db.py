""" This program creates a CSV file with book sales data.
and then reads the data from the file and prints it to the console."""

from pathlib import Path
# Import the create_csv and read_csv functions from the write_read_data module.
from write_read_data import create_csv, read_csv

# Create a path to the file.
# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "book_sales.csv"

# Create a variable for the header row.
column_data = ['book_title', 'author', 'quantity_sold', 'price']

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

# Call the create_csv function and pass the file_path, the header row,
# and book data as arguments.
create_csv(file_out_path, column_data, book_data)

# Call the read_csv function to read the CSV file.
read_csv(file_out_path)
