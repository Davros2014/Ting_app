import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <div className="authWrapper">
      <div className="authContainer">{children}</div>
    </div>
  );
};

export default AuthContainer;
