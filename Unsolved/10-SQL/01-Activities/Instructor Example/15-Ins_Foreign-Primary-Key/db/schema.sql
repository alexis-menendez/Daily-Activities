DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

\c registrar_db;

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INTEGER,
  course_description TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL
);
