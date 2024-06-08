-- Create the "daily_menu" table
CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    menu_date DATE,
    name VARCHAR(255),
    description TEXT
    
);
-- Create the "users" table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_role BOOLEAN NOT NULL DEFAULT TRUE,
    menu_id INTEGER REFERENCES menu(id),
    designation VARCHAR(255),
    password VARCHAR(255) NOT NULL
);
