# 🏗️ Get Exam Averages

Work with a partner to implement the following user story:

* As a teacher, I'd like to create a program that calculates exam averages for each subject in a CSV file found here [06-Stu_File-Output-Operations/Unsolved/Resources](./Unsolved/Resources/exam_scores.csv).

# Acceptance Criteria

* It's done when the `csv` module is imported and the `Path` module is imported from the `pathlib` library.

* It's done when the script gets the current directory and constructs the path to the `exam_scores.csv` file in the "Resources" directory.

* It's done when the CSV file is opened and read in `'r'` mode using UTF-8 encoding, and a CSV reader object is created using the `DictReader()` class.

* It's done when the scores for each subject are converted to integers by iterating over the rows in the CSV file and adding each score to the appropriate list in the `subject_scores` dictionary.

* It's done when the score for each subject is converted to an integer by iterating over the `subjects` in the `subject_scores` dictionary, and the score is added to the empty list in the `subject_scores` dictionary.

* It's done when the average score for each subject is calculated by iterating over the subjects and their respective lists of scores, and the average is printed with one decimal place.

---


## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Look up how to read files using `file = open(file_path, 'r', encoding='utf-8')`. Why do you need to use the `close()` method to close the file when opening files in this manner?

Use [Google](https://www.google.com) or another search engine to research this.

---

&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
