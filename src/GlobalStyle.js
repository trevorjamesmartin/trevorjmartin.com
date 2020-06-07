import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    overflow-x: hidden;
  }
  :root {
    --color-one: ${({ colorOne }) => colorOne || "brown"}
    --color-two: ${({ colorTwo }) => colorTwo || "orange"}
    --color-three: ${({ colorThree }) => colorThree || "peach"}
    --color-four: ${({ colorFour }) => colorFour || "lightgrey"}
  }
  html {
    font-family: 'IBM Plex Mono', monospace;
  }
  header {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
  }
  body {
    padding-top: 7rem;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  `;
// font-family: 'IBM Plex Serif', serif;
// font-family: 'IBM Plex Mono', monospace;

export default GlobalStyles;
