import React from "react";
// import styled from "styled-components";

// const StyledNav = styled.nav``;

const Navbar = ({ firstname, logout }) => {
  return (
    <nav className="navbar">
      <p>
        Welcome to your Ting Dashboard, <strong>{firstname}</strong>
      </p>
      <button onClick={e => logout(e)} className="logOut">
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </nav>
  );
};
export default Navbar;
