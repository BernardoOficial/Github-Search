import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        line-height: 10px;
    }

    body {
        font-family: 'Nunito', sans-serif;
    }
`;

const theme = {
  colors: {
    primeiro: "#100D02",
    secundo: "#F9BA0D",
    terceiro: "#ffffff",
    quarta: '#232324',
    textoBranco: "#ffffff",
    textoPreto: "#444444",
    tituloBranco: "#ffffff",
    tituloPreto: "#444444",
  },
  borderRadius: "8px",
};

export { GlobalStyle, theme };
