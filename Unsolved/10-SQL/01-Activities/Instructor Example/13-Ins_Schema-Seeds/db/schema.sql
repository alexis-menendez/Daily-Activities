DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

\c course_db;

CREATE TABLE courses (
  id INTEGER NOT NULL,
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
