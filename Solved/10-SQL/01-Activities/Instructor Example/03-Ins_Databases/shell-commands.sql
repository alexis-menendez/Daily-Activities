CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- Use inventory_db --
\c inventory_db;

-- See database in use --
SELECT current_database();
