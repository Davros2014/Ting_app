import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="authWrapper">
      <div className="authContainer">
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
      </div>
    </div>
  );
};

export default Landing;
