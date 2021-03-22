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
  .loader {
	margin: 100px auto;
	font-size: 15px;
	width: 0.7em;
	height: 0.7em;
	border-radius: 50%;
	position: relative;
	text-indent: -9999em;
	-webkit-animation: load5 1.1s infinite ease;
	animation: load5 1.1s infinite ease;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
}
@-webkit-keyframes load5 {
	0%,
	100% {
		box-shadow: 0em -2.6em 0em 0em #9e9e9e,
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.5),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.7);
	}
	12.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.7),
			1.8em -1.8em 0 0em #9e9e9e, 2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.5);
	}
	25% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.5),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.7), 2.5em 0em 0 0em #9e9e9e,
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	37.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.5),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.7), 1.75em 1.75em 0 0em #9e9e9e,
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	50% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.5),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.7), 0em 2.5em 0 0em #9e9e9e,
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	62.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.5),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.7), -1.8em 1.8em 0 0em #9e9e9e,
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	75% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.5),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.7), -2.6em 0em 0 0em #9e9e9e,
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	87.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.5),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.7), -1.8em -1.8em 0 0em #9e9e9e;
	}
}
@keyframes load5 {
	0%,
	100% {
		box-shadow: 0em -2.6em 0em 0em #9e9e9e,
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.5),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.7);
	}
	12.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.7),
			1.8em -1.8em 0 0em #9e9e9e, 2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.5);
	}
	25% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.5),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.7), 2.5em 0em 0 0em #9e9e9e,
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	37.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.5),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.7), 1.75em 1.75em 0 0em #9e9e9e,
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	50% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.5),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.7), 0em 2.5em 0 0em #9e9e9e,
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.2),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	62.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.5),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.7), -1.8em 1.8em 0 0em #9e9e9e,
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	75% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.5),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.7), -2.6em 0em 0 0em #9e9e9e,
			-1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2);
	}
	87.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(158, 158, 158, 0.2),
			1.8em -1.8em 0 0em rgba(158, 158, 158, 0.2),
			2.5em 0em 0 0em rgba(158, 158, 158, 0.2),
			1.75em 1.75em 0 0em rgba(158, 158, 158, 0.2),
			0em 2.5em 0 0em rgba(158, 158, 158, 0.2),
			-1.8em 1.8em 0 0em rgba(158, 158, 158, 0.5),
			-2.6em 0em 0 0em rgba(158, 158, 158, 0.7), -1.8em -1.8em 0 0em #9e9e9e;
	}
}

`;

export default GlobalStyles;
