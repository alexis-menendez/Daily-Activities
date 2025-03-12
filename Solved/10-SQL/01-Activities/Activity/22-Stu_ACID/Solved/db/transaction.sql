DROP DATABASE IF EXISTS library;

-- Create a new database
CREATE DATABASE library;

-- Connect to the newly created database
\c library;

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


DO $$
DECLARE
    -- Any variable declarations would go here
BEGIN
    -- Begin transaction

    INSERT INTO books (book_id, book_name)
    VALUES
        (1, 'Pride and Prejudice'),
        (2, 'To Kill a Mockingbird'),
        (3, 'The Great Gatsby');

    INSERT INTO authors (author_id, author_name)
    VALUES
        (10, 'Jane Austen'),
        (11, 'Harper Lee');

    -- If the code reaches here, it means no exceptions were raised.
    -- Thus, it will commit automatically at the end of the block.
RAISE NOTICE 'Transaction complete';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM; -- Log the error
        ROLLBACK; -- Explicitly roll back changes in case of error  
END $$;
