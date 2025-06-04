DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

CREATE TABLE book_prices (
  id SERIAL PRIMARY KEY,
  price INTEGER NOT NULL
);

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price INTEGER,
  FOREIGN KEY (book_price)
  REFERENCES book_prices(id)
  ON DELETE SET NULL
);

