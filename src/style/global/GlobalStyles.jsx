import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    ::-webkit-scrollbar {
        width: 8px;
        background-color: #000;
    }
  
    ::-webkit-scrollbar-thumb {
        background-color: #5fc0386c;
        border-radius: 5px; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: ${props => props.theme.fonts.body};
        background-color: #000000f0;
    }
`

