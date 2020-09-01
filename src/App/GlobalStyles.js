import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    //font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a { text-decoration: none; }

  li { list-style-type: none; }

`;

export default GlobalStyles;
