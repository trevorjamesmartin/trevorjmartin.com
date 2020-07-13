function parsePalette(palette) {
  const [colorOne, colorTwo, colorThree, colorFour] = JSON.parse(
    palette.colors
  );
  return { colorOne, colorTwo, colorThree, colorFour };
}

export default parsePalette;
