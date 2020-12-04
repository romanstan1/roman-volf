import { css } from "styled-components";

export const loadFonts = css`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('/BebasNeue-Regular.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Spartan';
    src: url('/Spartan-Regular.ttf') format('truetype');
    font-style: normal;
  }
`;

export const base = 18;
export const baseSmall = 16;

export default {
  bebasNeue: "Bebas Neue, sans-serif",
  spartan: "Spartan, sans-serif",
};