import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    position: relative;
  }

  body {
    width: 29.7cm;
    height: 21cm;
    margin: 0 auto;

    overflow: hidden;
  }

  .data {
    font-family: 'Arial';
    font-size: 35px;
  }

  #modal {
    width: 100%;
    height: 100%;
  }

  @media print {
  html,
  body {
    height: 100vh;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
}
`;

export default GlobalStyle;
