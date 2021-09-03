CREATE DATABASE authtodo;

-- first drop tables & then create users table && todolist
DROP TABLE todos;
DROP TABLE users;
CREATE TABLE users (
    user_id UUID DEFAULT uuid_generate_v4(),
    user_firstname VARCHAR(255) NOT NULL,
    user_lastname VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);
CREATE TABLE todos (
    todo_id SERIAL,
    user_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255) NOT NULL,
	completed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
[description, id, req.user.id]
