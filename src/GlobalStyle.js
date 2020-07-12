import { createGlobalStyle } from "styled-components";

export const themeColors = {
  colorOne: "#7c3c21",
  colorTwo: "#ec823a",
  colorThree: "#f9c49a",
  colorFour: "#e8e4e1",
};
// @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');

export const GlobalStyles = createGlobalStyle`
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
  a {
    text-decoration: none;
  }
  `;
// font-family: 'IBM Plex Serif', serif;
// font-family: 'IBM Plex Mono', monospace;
