import { css } from "styled-components";

export const loadFonts = css`
  @font-face {
    font-family: 'MonumentExtended-Regular';
    src: url('/static/fonts/MonumentExtended-Regular.otf') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'MonumentExtended-Ultrabold';
    src: url('/static/fonts/MonumentExtended-Ultrabold.otf') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'TTCommons-Medium';
    src: url('/static/fonts/TT-Commons-Medium.otf') format('opentype');
    font-style: normal;
  }
`;

export const base = 18;
export const baseSmall = 16;

export default {
  ttcommons: "TTCommons-Medium, sans-serif",
  monumentRegular: "MonumentExtended-Regular, sans-serif",
  monumentBold: "MonumentExtended-Ultrabold, sans-serif",
};
