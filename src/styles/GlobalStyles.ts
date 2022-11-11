import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
      height:100%;
      width:100%;
      }
    body{
      height:100%;
      width:100%
    }
    #root{
      display:grid;
      grid-template-areas: 
      "header header header"
      "nav    main    aside"
      "footer footer footer";
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto 1fr auto;
    }
`;

export default GlobalStyle;
