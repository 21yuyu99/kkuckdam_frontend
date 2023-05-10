import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,body{
    width:100%;
    height:100%;
  }
  #__next{
    width:100%;
    height:100%;
    max-width: 767px;
    font-size:16px; //최소 font 사이즈(12pt)
    margin : auto;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyle;