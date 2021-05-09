import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  });

  const { email, password, firstname, lastname } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, firstname, lastname };

      const response = await fetch(
        "http://localhost:5000/api/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Access-Control-Allow-Origin": "https://ting-app.herokuapp.com"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Registered Successfully");
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
        <h5 className="subHeaderSmall">Register here</h5>
        <p>
          Already a member, log back in
          <Link className="link" to="/login">
            {" "}
            here
          </Link>
        </p>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="text"
            name="firstname"
            value={firstname}
            placeholder="First Name"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Last Name"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
