import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url("https://use.typekit.net/pcd8ehb.css");

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
  }

  a.brand {
    font-family: september, sans-serif;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #ff847c;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 22pt;
  }
`;

export default GlobalStyles;
