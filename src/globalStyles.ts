import "sanitize.css";
import { createGlobalStyle } from "styled-components";

import { theme } from "./common/theme";

const GlobalStyles = createGlobalStyle`
  /* hind-regular - latin */
@font-face {
  font-family: 'Hind';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/hind-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
}
/* hind-700 - latin */
@font-face {
  font-family: 'Hind';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/hind-v11-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
}


  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
    background-color: #F1F1F1;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Hind', sans-serif;
    font-weight: 100;
  }
  ul {
    	list-style: none;

  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
