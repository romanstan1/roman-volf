import { css } from "styled-components";

export const loadFonts = css`
  @font-face {
    font-family: 'Spartan';
    src: url('https://fonts.googleapis.com/css2?family=Spartan:wght@200;300;400;500&display=swap') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Bebas Neue';
    src: url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap') format('opentype');
    font-style: normal;
  }
`;

export const base = 18;
export const baseSmall = 16;

export default {
  spartan: "Spartan, sans-serif",
  bebas: "Bebas Neue, cursive",
};
