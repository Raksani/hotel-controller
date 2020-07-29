import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Exo";
    font-style: normal;
    font-weight: 300;
    src: local("Exo-Light"), url(./fonts/Exo-Light.ttf) format('truetype');
  }

body {
    position: fixed;
    width: 1440px;
    height: 1024px;
    background: #FFFFFF;
    font-family: "Exo";
}

`