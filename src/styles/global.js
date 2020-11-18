import { createGlobalStyle } from "styled-components";
import FONTS, { base, loadFonts } from "./fonts";
import COLORS from "./colors"; 
// import COLORS, { hexToRGBA, cssColor } from "./colors"; 

export default createGlobalStyle`
  ${loadFonts}

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: ${base}px;
    transition: background-color 1s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${FONTS.spartan}, sans-serif;

    background-color: ${COLORS.white};
  }

  input, textarea {
    font-family: ${FONTS.spartan}, sans-serif;
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
    font-family: ${FONTS.spartan}, sans-serif;
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
