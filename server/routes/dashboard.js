const router = require("express").Router();
const authorize = require("../middleware/authorize");
const db = require("../utils/db");
const privacyMsg = "This todo is not yours";

// GET ALL TODOS
router.get("/", authorize, async (req, res) => {
    try {
        const user = await db.query(
            "SELECT users.user_firstname, users.user_lastname, users.user_id, users.created_at, todos.created_at, todos.todo_id, todos.description, todos.completed FROM users LEFT JOIN todos ON users.user_id = todos.user_id WHERE users.user_id = $1",
            [req.user.id]
        );
        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//create todo
router.post("/todos", authorize, async (req, res) => {
    try {
        console.log("new todo", req.body);
        const { description } = req.body;
        const newTodo = await db.query(
            "INSERT INTO todos (user_id, description) VALUES ($1, $2) RETURNING *",
            [req.user.id, description]
        );
        // res.json(newTodo);
        console.log("New Todo", newTodo.rows[0]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update todo
router.put("/todos/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updateTodo = await db.query(
            "UPDATE todos SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *",
            [description, id, req.user.id]
        );
        if (updateTodo.rows.length === 0) {
            return res.json(privacyMsg);
        }
        res.json("todo updated");
    } catch (err) {
        console.error(err.message);
    }
});

//updateCompleted todo
router.put("/todos/completed/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id");
        console.log("req.body", req.body);
        const { completed } = req.body;
        console.log("completed", completed);
        const updateCompletion = await db.query(
            "UPDATE todos SET completed = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *",
            [completed, id, req.user.id]
        );
        if (updateCompletion.rows.length === 0) {
            return res.json(privacyMsg);
        }
        res.json("todo - completion updated");
    } catch (err) {
        console.error(err.message);
    }
});

//delete todo
router.delete("/todos/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await db.query(
            "DELETE FROM todos WHERE todo_id = $1 AND user_id = $2 RETURNING *",
            [id, req.user.id]
        );
        if (deleteTodo.rows.length === 0) {
            return res.json(privacyMsg);
        }
        res.json("deleted");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;

// SELECT * FROM users LEFT JOIN todos ON users.user_id = todos.user_id WHERE users.user.id = '69bdeae9-65de-4f13-ac6c-8164b679a747';
