import React, { useState, useEffect } from "react";
import EditTodo2 from "./EditTodo2";
// import EditTodo from "./EditTodo";
import DeleteIcon from "@material-ui/icons/Delete";
// import ToggleSwitch from "./ToggleSwitch";
import Checkbox from "@material-ui/core/Checkbox";

//listing todos
const ListTodos = ({ allTodos, setTodosChange, toggleComplete }) => {
  const [todos, setTodos] = useState([]);

  //deleting todos
  const deleteTodo = async id => {
    try {
      await fetch(`http://localhost:5000/api/dashboard/todos/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token }
      });
      // console.log("delete", deleteTodo);
      setTodos(
        todos.filter(todo => {
          return todo.todo_id !== id;
        })
      );
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // sort by most recent =

  // const mostRecentTodos = todos => {
  //   const newDate = date => new Date(date);
  //   return todos
  //     .slice()
  //     .sort((a, b) => newDate(b.created_at) - newDate(a.created_at));
  // };

  // console.log("mostRecentTodos", mostRecentTodos(todos));

  useEffect(() => {
    setTodos(allTodos);
  }, [allTodos]);

  const createdDate = date => {
    let newDate = new Date(date);
    const options = {
      // weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let creationDate = newDate.toLocaleDateString("en-EN", options);
    return creationDate;
  };
  const createdTime = time => {
    let newDate = new Date(time);
    let creationTime = newDate.toLocaleTimeString();
    return creationTime;
  };

  const toggleCompletion = (id, completed) => {
    // console.log("id, completed - in toggleCompletion", id, completed);
    toggleComplete(id, completed);
  };

  const capitalise = str =>
    str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
  return (
    <>
      {todos.length !== 0 ? (
        <ul className="todoList">
          {todos.length !== 0 &&
            todos[0].todo_id !== null &&
            todos.map((todo, index) => (
              <li className="todoList__Item" key={todo.todo_id}>
                <div className="todoList__createdContainer">
                  <p>
                    <strong>Created: </strong>
                    {createdDate(todo.created_at)}
                  </p>{" "}
                  <p>
                    <strong>&nbsp; @ </strong>
                    {createdTime(todo.created_at)}
                  </p>
                </div>
                <div
                  className={`todoList__Inner  ${
                    todo.completed ? "completed" : ""
                  }`}
                >
                  <div className="todoList__descriptionContainer">
                    <div className="todoList__textContainer">
                      <p>
                        <strong>Description</strong>
                      </p>
                      <p
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                          opacity: todo.completed ? "0.5 " : "1"
                        }}
                      >
                        {capitalise(todo.description)}
                      </p>
                      <div className="todoList__infoContainer">
                        <div className="checkBoxContainer">
                          <Checkbox
                            tabIndex={-1}
                            checked={todo.completed}
                            name="checkBox"
                            onClick={() =>
                              toggleCompletion(todo.todo_id, todo.completed)
                            }
                          />
                          <label className="checkBoxlabel" htmlFor="checkBox">
                            <strong>Status: </strong>
                            {`${todo.completed ? "Completed" : "In progress"}`}
                          </label>
                        </div>

                        <div className="buttonContainer">
                          <EditTodo2
                            todo={todo}
                            setTodosChange={setTodosChange}
                          />

                          <button
                            aria-label="Delete"
                            onClick={() => deleteTodo(todo.todo_id)}
                            className="iconButton ml1"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <img className="noTodosImg" src="/img/todo-list.png" alt="noTodos" />
      )}
    </>
  );
};
export default ListTodos;
