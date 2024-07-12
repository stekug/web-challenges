import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
  }

  ul {
    list-style-type: none;
  }
  li {
    border: 1px solid black;
    margin: 1rem;
  }
`;
