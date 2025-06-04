def top_students(students):
    """Return a dictionary of students with grades greater than or equal to 90.
    """
    # TODO: Create an empty dictionary to store the top students


    # TODO: Loop through the students dictionary
    # TODO: extract the student name and grade

        # TODO: Check if the grade is greater than or equal to 90

            # TODO: Assign the grade to the student in the top_students dictionary
            # TODO: Use the student name as the key and the grade as the value


    # TODO: Return the top_students dictionary



if __name__ == "__main__":
    students = {
        'Adeel Ahmad': 98,
        'Asuka Takenaka': 67,
        'Bent Hanburry': 87,
        'Charlie Clewlow': 57,
        'Clarisse Surgeon': 78,
        'Denise Tan': 96,
        'Gabriella Rossi': 79,
        'Hae-Won Park': 65,
        'Izel Xiu': 46,
        'Janetta Bolduc': 88,
        'Jason Woo': 66,
        'Javier Martinez': 67,
        'Juanita Hernandez': 58,
        'Kath Beeres': 96,
        'Kevin Fuwape': 84,
        'Leonard Jennings': 70,
        'Patty Singleton': 55,
        'Rodd Camier': 72,
        'Sundar Jayaram': 81,
        'Zachariah Spikings': 49
    }

    high_achievers = top_students(students)

    print(high_achievers)
