import { createGlobalStyle } from "styled-components";
import COLORS, { hexToRGBA, cssColor } from "./colors"; 
// import slickSlider from "./slick-slider";
import FONTS, { loadFonts } from "./fonts";

export default createGlobalStyle`
  ${loadFonts};
  
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    transition: background-color 1s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${FONTS.spartan};
    background-color: ${COLORS.beige};
      /* The emerging W3C standard
      that is currently Firefox-only */
    * {
      scrollbar-width: 5px;
    }

    /* Works on Chrome/Edge/Safari */
    
  }
  html {
    overflow-y: scroll;
  }

  input, textarea {
    font-family: ${FONTS.spartan};
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
    font-family: ${FONTS.spartan};
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
  ::selection {
    background-color: ${cssColor(hexToRGBA(COLORS.turquoise, 0.99))};
    color: ${COLORS.black};
  }

  ::-moz-selection {
    background-color: ${cssColor(hexToRGBA(COLORS.turquoise, 0.99))};
    color: ${COLORS.black};
  }
  :focus{background: transparent;}

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

`;


