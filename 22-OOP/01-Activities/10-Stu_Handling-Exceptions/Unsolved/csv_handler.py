""""
This module contains functions for creating and reading CSV files.
"""
import csv


def create_csv(file, header, data):
    """This function creates a CSV file and writes the header to it.
    Args:
        file (str): The path to the CSV file.
        header (list): The header row for the CSV file.
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
            # Create a CSV writer object with the writer() function.
            writer = csv.writer(data_file)
            # Write the header row to the CSV file.
            writer.writerow(header)
            # Write the book data to the CSV file.
            writer.writerow(data)

        # Print a message to the console that says the file has been created
        # with the header row.
        print(f"The CSV file {file} has been created successfully "
              f"and the data has been added.\n")

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
            writer.writerow(data)
            # Print a message that says the data has been added to the file.
            print(f"The data has been added to the file {file}\n")


def read_csv(file):
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
    with open(file, 'r', encoding='utf-8') as data_file:
        # Create a CSV reader object with the reader() function.
        csv_data = csv.reader(data_file)
        # Iterate over each row in the CSV file
        for row in csv_data:
            # Print each row from the file.
            print(row)
