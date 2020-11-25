import { createGlobalStyle } from "styled-components";
import COLORS, { hexToRGBA, cssColor } from "./colors"; 
import slickSlider from "./slick-slider";

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
      /* The emerging W3C standard
      that is currently Firefox-only */
    * {
      scrollbar-width: 5px;
    }

    /* Works on Chrome/Edge/Safari */
    *::-webkit-scrollbar {
      width: 5px;
    }
    *::-webkit-scrollbar-track {
      background: ${COLORS.beige};
    }
    *::-webkit-scrollbar-thumb {
      background-color:  ${COLORS.black};
      border-radius: 0px;
      border: 0px solid ${COLORS.black};
    }
  }
  html {
    overflow-y: scroll;
    background-color: ${COLORS.yellow};
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
  ::selection {
    background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
    color: ${COLORS.black};
  }

  ::-moz-selection {
    background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
    color: ${COLORS.black};
  }
  ${slickSlider}
`;


