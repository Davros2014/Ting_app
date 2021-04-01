CREATE DATABASE authtodo;

-- frist drop tables & then create users table && todolist

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

-- INSERT INTO todos (user_id, description) VALUES ('5615aee5-6b57-4794-bdf7-876c62894885', 'Wash the cat');



-- completed BOOLEAN NOT NULL,

-- TESTING --
-- INSERT INTO users (user_firstname, user_lastname, user_email, user_password) VALUES ('viola', 'voltaire', 'viola@yahoo.com', '1234');
-- INSERT INTO todos (user_id, description, completed) VALUES ('3f3d5550-9c84-4b55-b15d-a5be427c05ca', 'Wash the cat', false);

-- INSERT INTO users (user_firstname, user_lastname, user_email, user_password) VALUES ('jobe', 'hoover', 'jacoby213@gmail.com', 'kthl8822');

-- SELECT users.user_firstname, users.user_lastname, users.user_id, users.created_at, todos.created_at, todos.todo_id, todos.description, todos.completed FROM users LEFT JOIN todos ON users.user_id = todos.user_id WHERE users.user_id = "5457fc12-6417-47f6-ac6a-5ffb0b2b35b5";

-- UPDATE todos
-- UPDATE todos SET description = 'Wash the balls' AND completed = true WHERE todo_id = '1' AND user_id = '5457fc12-6417-47f6-ac6a-5ffb0b2b35b5' RETURNING *;
[description, id, req.user.id]
