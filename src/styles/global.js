import FONTS, { base, loadFonts } from "./fonts";
import COLORS, { hexToRGBA, cssColor } from "./colors"; 

export default `

  ${loadFonts}

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${FONTS.monumentRegular};
    font-size: ${base}px;
    line-height: 26px;
    background-color: ${COLORS.yellow};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${COLORS.white};
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
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

  ::selection {
    background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
    color: ${COLORS.white};
  }

  ::-moz-selection {
    background-color: ${cssColor(hexToRGBA(COLORS.yellow, 0.99))};
    color: ${COLORS.white};
  }
`;
