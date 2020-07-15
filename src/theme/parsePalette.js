/**
 * returns a complimentary color.
 * @param {String} color_string HTML color code.
 */
export const complimentColor = (color_string) => {
  return `#${(
    parseInt("FFFFFF", 16) -
    parseInt(color_string.match(/[A-Fa-f0-9]/g).join(""), 16)
  ).toString(16)}`;
};

/**
 * return complimentary HTML colors
 * @param {*} colors {colorOne: "#7c3c21", colorTwo: "#ec823a", ...}
 */
export const complimentPalette = (colors) => {
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
function parsePalette(palette) {
  const [colorOne, colorTwo, colorThree, colorFour] = JSON.parse(
    palette.colors
  );
  return { colorOne, colorTwo, colorThree, colorFour };
}

export default parsePalette;
