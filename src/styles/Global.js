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

  div.mimi {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: flex-start;
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
    line-height: 18pt;
    align-self: auto;
  }

  a.smbrand {
    font-family: september, sans-serif;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #fecea8;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10pt;
    align-self: auto;
  }

 div.drop {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    margin: 0 5%;
  }
`;

export default GlobalStyles;
