import React from "react";

import styled from "styled-components";

const AppSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  z-index: -1;
  overflow: scroll;
`;

const AppContainer = ({ children }) => {
  return <AppSection>{children}</AppSection>;
};

export default AppContainer;
