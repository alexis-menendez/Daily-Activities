DROP DATABASE IF EXISTS library;

-- Create a new database
CREATE DATABASE library;

-- Connect to the newly created database
\c library;

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

-- Create a books table
CREATE TABLE books (
    book_id INTEGER PRIMARY KEY,
    book_name VARCHAR(255)
);

-- Create an authors table
CREATE TABLE authors (
    author_id INTEGER PRIMARY KEY,
    author_name VARCHAR(255)
);

-- TODO: Add a transaction block here

INSERT INTO books (book_id, book_name)
VALUES
    (1, 'Pride and Prejudice'),
    (2, 'To Kill a Mockingbird'),
    (3, 'The Great Gatsby');

INSERT INTO authors (author_id, author_name)
VALUES
    (10, 'Jane Austen'),
    (11, 'Harper Lee');
