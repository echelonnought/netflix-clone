import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Nueue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -mos-osx-font-smoothing: grayscale;
        background-color: #000;
        color: #333;
        font-size: 16px;
    }
`;