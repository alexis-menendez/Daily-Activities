-- Inserting data into students table
INSERT INTO students (student_id, student_name) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'David'),
(5, 'Eva'),
(6, 'Frank'),
(7, 'Grace'),
(8, 'Hannah'),
(9, 'Ian'),
(10, 'Jenna');

-- Assuming 1 teacher only teaches one course
INSERT INTO courses (course_id, course_name, course_instructor) VALUES
(101, 'Math', 'Mr Smith'),
(102, 'Science', 'Dr Doe'),
(103, 'History', 'Mrs Anderson'),
(104, 'English', 'Ms Johnson'),
(105, 'Geography', 'Mr Williams');

-- Inserting data into enrollments table
INSERT INTO enrollments (student_id, course_id) VALUES
(1, 101), -- Alice (1) is enrolled in Science (102)
(2, 102),
(3, 103),
(4, 104),
(5, 105),
(1, 102),  -- Alice (1) is enrolled in Math (101)
(6, 101),
(7, 102),
(8, 103),
(9, 104),
(10, 105);

-- Query to retrieve student name, course name, and course instructor
SELECT students.student_name, courses.course_name, courses.course_instructor 
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.course_id;
