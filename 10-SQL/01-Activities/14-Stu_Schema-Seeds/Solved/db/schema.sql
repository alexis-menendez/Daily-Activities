DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

\c grocery_db;

CREATE TABLE products (
  id INTEGER NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);
