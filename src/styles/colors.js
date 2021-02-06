/* eslint-disable prefer-template */

export const componentToHex = c => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const rgbToHex = (r, g, b) =>
  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

export const hexToRGBA = (hex, a) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: a !== undefined ? a : 1,
      }
    : null;
};

export const cssColor = color =>
  `rgba(${color.r},${color.g},${color.b},${color.a})`;

const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  black02: "#292828",
  grey: "#F5F5F5",
  grey02: "#adb0be",
  grey03: "#cccbc8",
  
  turquoise: "#25F4EE",
  red: "#FE2C55",

  // yellow: "#FFC238",
  yellow: "#fff448",
  // beige: "#f3f2ef",
  beige: "#f9f9f9",
};

export const colorFinder = color => COLORS[color];

export default COLORS;
