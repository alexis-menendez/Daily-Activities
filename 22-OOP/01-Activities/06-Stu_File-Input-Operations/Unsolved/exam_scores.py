"""This program reads a CSV file and calculates
the average score for a given subject."""
# TODO: Import the csv module
# TODO: Import the Path module from the pathlib library

# TODO: Get the current script's directory.

# TODO: Set the path to the current directory
# TODO: and, the 'Resources' directory, and the 'exam_scores.csv' file.


def get_averages(file_path):
    """
    Reads a CSV file containing student exam scores
    and calculates the average score for each subject.

    Args:
        file_path (str): The file path to the CSV file.

    Returns:
        None

    Prints:
        The class average score for each subject.
    """
    # Initialize a dictionary to store the scores for each subject.
    # The subjects are: Composition, Biology, Math, and Speech.
    subject_scores = {
        "Composition": [],
        "Biology": [],
        "Math": [],
        "Speech": []
    }

    # TODO: Open the CSV file, using the read mode and encoding='utf-8'.

        # TODO: Create a CSV reader object using the DictReader() class.

        # TODO: Iterate over each row in the CSV file

            # TODO: Iterate over each subject.

                # TODO: Extract the subject score and
                # TODO: add it to the subject list as an integer.


    # TODO: Iterate over the subject_scores dictionary.

        # TODO: Calculate the average score for each subject

        # TODO: Print the average score for each subject.


if __name__ == "__main__":
    # TODO: Define the path to the CSV file

    # TODO: Call the function with the file path.
