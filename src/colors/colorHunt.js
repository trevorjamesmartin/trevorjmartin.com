import axios from "axios";

function LoadPalette({ n, state, setState }) {
  const url = `${process.env.REACT_APP_PALETTE_URL}${n}`;
  console.log("test ", url);
  axios.get(url).then((page) => {
    const [colorOne, colorTwo, colorThree, colorFour] = JSON.parse(
      page.data.colors
    );
    const upd = {
      ...state,
      [page.data.id]: { colorOne, colorTwo, colorThree, colorFour },
    };
    console.log(upd);
    setState(upd);
  });
}

export default LoadPalette;
