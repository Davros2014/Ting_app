import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="introContainer">
      <h1>Welcome to Ting</h1>
      <p>Sign-in and start building your Tings!</p>

      <div className="buttonContainer">
        <Link to="/login" className="mainButton">
          Login
        </Link>
        <Link to="/register" className="mainButton">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
