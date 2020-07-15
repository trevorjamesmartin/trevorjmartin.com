/**
 * returns a complimentary color.
 * @param {String} color_string HTML color code.
 */
const complimentColor = (color_string) => {
  return `#${(
    parseInt("FFFFFF", 16) -
    parseInt(color_string.match(/[A-Fa-f0-9]/g).join(""), 16)
  ).toString(16)}`;
};

/**
 * return complimentary HTML colors
 * @param {*} colors {colorOne: "#7c3c21", colorTwo: "#ec823a", ...}
 */
const complimentPalette = (colors) => {
  const result = {};
  Object.keys(colors).forEach((key) => {
    result[key] = complimentColor(colors[key]);
  });
  return result;
};

/**
 * return parsed palette.colors.
 * @param {JSON} palette { ..., colors: "[\"#7c3c21\",\"#ec823a\",\"#f9c49a\",\"#e8e4e1\"]" }
 */
const parsePalette = (palette) => {
  const colors = {};
  const keys = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
  ];
  JSON.parse(palette.colors).map((c, i) => [colors[`color${keys[i]}`], c]);
  return colors;
};

export { parsePalette, complimentPalette, complimentColor };
