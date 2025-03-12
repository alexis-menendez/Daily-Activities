DROP DATABASE IF EXISTS university;
CREATE DATABASE university;

\c university;

-- Creating a students table
CREATE TABLE students (
    student_id INTEGER,
    student_name VARCHAR(255),
    course_id INTEGER,
    course_name VARCHAR(255),
    course_instructor VARCHAR(255)
);
