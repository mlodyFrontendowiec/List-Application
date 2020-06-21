import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../theme/theme";
import GlobalStyle from "./../theme/GlobalStyle";
const MainTemplate = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default MainTemplate;
