import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #__next{
    max-width: 767px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyle;