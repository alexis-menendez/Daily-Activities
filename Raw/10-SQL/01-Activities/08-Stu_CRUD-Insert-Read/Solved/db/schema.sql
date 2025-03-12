DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- use books_db database --
\c books_db;

-- Creates the table "biographies" within books_db --
CREATE TABLE biographies (
  -- Creates a numeric column called "id" which cannot contain null --
  id INTEGER NOT NULL,
  -- Creates a string column called "name" which can hold up to 100 characters and cannot contain null --
  name VARCHAR(100) NOT NULL
);

