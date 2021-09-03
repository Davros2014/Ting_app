import React, { useState } from "react";

const FormTodo = ({ setTodosChange }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (description) {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("jwt_token", localStorage.token);

        const created_at = new Date();
        const body = { description, created_at };
        const response = await fetch(
          "/api/dashboard/todos",
          {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(body)
          }
        );
        const parseResponse = await response.json();
        setTodosChange(true);
        setDescription("");
      } catch (err) {
        console.error(err.message);
      }
    }
  };
  return (
    <div className="todoListContainer__form">
      <h5 className="subHeaderSmall">All your tings in one place</h5>
      <form
        onSubmit={handleSubmit}
        className="todoListContainer__todoFormField d-flex"
      >
        <input
          value={description}
          type="text"
          placeholder="Add Ting here"
          className="todoForm__input form-control"
          onChange={e => setDescription(e.target.value)}
        />
        <button
          disabled={description ? false : true}
          className={`todoForm__btn mainButton  ${
            !description.length ? "disabled" : ""
          }`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
