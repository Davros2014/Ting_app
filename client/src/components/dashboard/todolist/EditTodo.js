import React, { Fragment, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";

const EditTodo = ({ todo, setTodosChange }) => {
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
      // setDescription(updatedTodo);
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   setDescription();
  // }, [setTodosChange]);

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
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                onClick={() => setDescription(todo.description)}
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                value={description}
                type="text"
                placeholder="Update ting here"
                className="todoForm__input form-control"
                onChange={e => setDescription(e.target.value)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  onClick={e => handleUpdate(e)}
                  className="todoForm__btn mainButton"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mainButton"
                  data-dismiss="modal"
                  onClick={() => setDescription(todo.description)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
