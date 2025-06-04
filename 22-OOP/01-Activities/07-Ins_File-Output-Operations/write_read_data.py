"""
This program demonstrates how to write
and read data to and from a CSV file using the csv module.
"""
import csv


def create_csv(path, header, book_data):
    """Create a CSV file and write the header row and data to it.

    Args:
    file (str): The path to the CSV file.
    header (list): The header row for the CSV file.
    book_data (list): The data rows to be written to the CSV file.
    """
    # Use the with open statement to create a new CSV file.
    # Use utf-8 encoding to ensure the data is written correctly.
    with open(path, 'w', encoding='utf-8') as outfile:
        # Create a CSV writer object using the writer function.
        writer = csv.writer(outfile)
        # Write the header row to the CSV file using the writerow function.
        writer.writerow(header)
        # Write data rows
        for row in book_data:
            writer.writerow(row)

    # Print a message to the console.
    print("The CSV file has been created and "
          "data has been written to the file.\n")


def read_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
      path (str): The path to the CSV file to read.

    Returns:
      list: The file contents by row.
    """
    # Open the CSV file using the csv module
    # Use the read mode and encoding='utf-8'.
    # This is the standard encoding for CSV files.
    with open(path, 'r', encoding='utf-8') as file:
        # Create a CSV reader object with the reader() function.
        csv_data = csv.reader(file)

        # Iterate over each row in the CSV file
        for row in csv_data:
            # Print each row from the file.
            print(row)
