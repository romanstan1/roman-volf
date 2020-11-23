import { createGlobalStyle } from "styled-components";
import COLORS from "./colors"; 
// import COLORS, { hexToRGBA, cssColor } from "./colors"; 

export default createGlobalStyle`
 
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    transition: background-color 1s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Spartan';
    background-color: ${COLORS.beige};
  }

  input, textarea {
    font-family: 'Spartan';
  }

  * {
    box-sizing: border-box;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    font-family: 'Spartan';
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }
`;


//   ::selection {
//     background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
//     color: ${COLORS.white};
//   }

//   ::-moz-selection {
//     background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
//     color: ${COLORS.white};
//   }
// `;
