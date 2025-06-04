DROP DATABASE IF EXISTS university;
CREATE DATABASE university;

\c university;

-- Creating students table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    student_name VARCHAR(255)
);

-- Creating course table
CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name VARCHAR(255),
    course_instructor VARCHAR(255)
);

-- Creating enrollment table
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INTEGER,
    course_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

