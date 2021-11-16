import React from "react";
// import styled from "styled-components";

const TingContainer = ({ children }) => {
  return (
    <section className="todoListContainer">
      <div className="todoListContainer__list">{children}</div>
    </section>
  );
};

export default TingContainer;
