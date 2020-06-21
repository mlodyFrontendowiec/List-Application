import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Montserrat, sans-serif;
    

}
html, body,div#root {
  overflow: hidden;
}
body {
  -webkit-overflow-scrolling: touch;
}

`;

export default GlobalStyle;
