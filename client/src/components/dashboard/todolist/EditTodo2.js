import React, { Fragment, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";

const EditTodo2 = ({ todo, setTodosChange }) => {
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);
      const body = { description };
      const updatedTodo = await fetch(
        `http://localhost:5000/api/dashboard/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body)
        }
      );
      setTodosChange(true);
      setDescription("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   setDescription();
  // }, [setTodosChange]);

  const capitalise = str =>
    str.slice(0, 1).toUpperCase() + str.slice(1, str.length);

  return (
    <Fragment>
      <button
        type="button"
        className="iconButton"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        <EditIcon />
      </button>
      <div
        className="modal modalOutline"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="todoList__Item">
              <div className="modal-header">
                <h5 className="modal-title">Edit Todo</h5>
                <button
                  onClick={() => setDescription(todo.description)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>
              <div className="todoList__Inner">
                <p>
                  <strong>Description</strong>
                </p>
                <div className="todoList__textContainer">
                  <input
                    value={capitalise(description)}
                    type="text"
                    placeholder="Update ting here"
                    className="todoForm__input form-control"
                    onChange={e => setDescription(e.target.value)}
                  />
                  <button
                    type="button"
                    data-dismiss="modal"
                    onClick={e => handleUpdate(e)}
                    className="todoForm__btn mainButton"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo2;
