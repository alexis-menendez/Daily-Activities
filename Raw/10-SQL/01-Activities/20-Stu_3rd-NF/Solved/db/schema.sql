DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- Locations Table
CREATE TABLE locations (
    location_id INTEGER PRIMARY KEY,
    location_name VARCHAR(255),
    location_manager VARCHAR(255) -- Assuming 1 manager per location
);

-- Businesses Table
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
);
