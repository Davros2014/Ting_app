import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    console.log("submit login data");

    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/api/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cross-Origin-Opener-Policy": "same-origin"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="authWrapper">
      <div className="authContainer">
        <h5 className="subHeaderSmall">Login</h5>
        <p>
          Not a member yet? Register
          <Link className="link" to="/register">
            {" "}
            here
          </Link>
        </p>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
