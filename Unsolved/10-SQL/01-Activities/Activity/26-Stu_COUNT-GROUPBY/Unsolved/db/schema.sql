DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  section INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  quantity INTEGER NOT NULL
);
