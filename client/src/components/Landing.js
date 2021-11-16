import React from "react";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";

const Landing = () => {
  return (
    <AuthContainer>
      <div className="introContainer">
        <h2>Welcome to Ting</h2>
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
    </AuthContainer>
  );
};

export default Landing;
