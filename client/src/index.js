import React from "react";
import { render } from "react-dom";
import GlobalStyle from "./components/theme/globalStyles";
import Theme from "./components/theme/theme";
import { ThemeProvider } from "styled-components";

import App from "./App";

render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
