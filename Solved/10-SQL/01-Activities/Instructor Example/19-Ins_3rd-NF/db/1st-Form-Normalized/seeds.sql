-- Inserting data into students
INSERT INTO students (student_id, student_name, course_id, course_name, course_instructor) VALUES
(1, 'Alice', 101, 'Math', 'Mr Smith'),
(2, 'Bob', 102, 'Science', 'Dr Doe'),
(3, 'Charlie', 103, 'History', 'Mrs Anderson'),
(4, 'David', 104, 'English', 'Ms Johnson'),
(5, 'Eva', 105, 'Geography', 'Mr Williams'),
(1, 'Alice', 102, 'Science', 'Dr Doe'),  -- Notice the redundancy: Alice and Science with Dr Doe
(6, 'Frank', 101, 'Math', 'Mr Smith'),
(7, 'Grace', 102, 'Science', 'Dr Doe'),
(8, 'Hannah', 103, 'History', 'Mrs Anderson'),
(9, 'Ian', 104, 'English', 'Ms Johnson'),
(10, 'Jenna', 105, 'Geography', 'Mr Williams');

-- Querying the students table
SELECT * FROM students;
