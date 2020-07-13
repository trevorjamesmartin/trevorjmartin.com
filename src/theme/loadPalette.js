import axios from "axios";

function LoadPalette({ schema_id, getter, setter }) {
  if (!setter) {
    console.log("LoadPalette requires setter");
    return;
  }
  const [API, CH] = [
    process.env.REACT_APP_PALETTE_API,
    process.env.REACT_APP_CH,
  ];
  console.log(`loading...`);
  axios.get(`${API}${CH}${schema_id}`).then((page) => {
    const [colorOne, colorTwo, colorThree, colorFour] = JSON.parse(
      page.data.colors
    );
    const palette = {
      [page.data.id]: { colorOne, colorTwo, colorThree, colorFour },
    };
    setter({
      ...getter,
      ...palette,
    });
  });
}

export default LoadPalette;
