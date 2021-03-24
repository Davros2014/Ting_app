import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import FormTodo from "./todolist/FormTodo";
import ListTodos from "./todolist/ListTodos";
import Navbar from "./Navbar";

//components

const Dashboard = ({ setAuth }) => {
  const [firstname, setFirstname] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todosChange, setTodosChange] = useState(false);

  // const toggleComplete = () => {
  //   setCompleted(prevState => !completed);
  // };
  const toggleComplete = async (id, completedState) => {
    console.log("completedState in toggleComplete", completedState);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      // setAllTodos(
      //   allTodos.map(todo =>
      //     todo.todo_id === id ? { ...todo, completed: !todo.completed } : todo
      //   )
      // );
      const body = { completed: !completedState };
      console.log("toggleComplete ? body", body);
      const response = await fetch(
        `http://localhost:5000/dashboard/todos/completed/${id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body)
        }
      );
      const parseResponse = await response.json();
      console.log("parseResponse", parseResponse);
      setTodosChange(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const parseData = await res.json();
      // console.log("parseData > getProfile", parseData);
      setAllTodos(parseData);
      if (parseData[0].user_firstname)
        setFirstname(parseData[0].user_firstname);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      // toast.success("Logout successfully");
      toast.success("Logout successfully", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "toastify-this"
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setTodosChange(false);
  }, [todosChange]);

  return (
    <>
      <Navbar firstname={firstname} logout={logout} />
      <FormTodo setTodosChange={setTodosChange} />
      <section className="todoListContainer">
        <div className="todoListContainer__list">
          <ListTodos
            allTodos={allTodos}
            setTodosChange={setTodosChange}
            toggleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
