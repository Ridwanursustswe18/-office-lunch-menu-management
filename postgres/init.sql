CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    menu_date DATE,
    name VARCHAR(255),
    description TEXT
    
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_role BOOLEAN NOT NULL DEFAULT TRUE,
    designation VARCHAR(255),
    password VARCHAR(255) NOT NULL
);
CREATE TABLE user_menu (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    menu_id INTEGER REFERENCES menu(id)
);
