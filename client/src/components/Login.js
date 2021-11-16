import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { email, password } = inputs;

  const onChange = e => {
    let trimmedValue = e.target.value.trim();
    setInputs({ ...inputs, [e.target.name]: trimmedValue });
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("/api/authentication/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cross-Origin-Opener-Policy": "same-origin"
        },
        body: JSON.stringify(body)
      });
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
    <AuthContainer>
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
    </AuthContainer>
  );
};

export default Login;
