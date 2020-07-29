import PropTypes from "prop-types";
import dark from "./dark_base.json";
import light from "./light_base.json";

function makeTheme(props) {
  const [a, b, c, d] = props;
  // console.log({ props });
  return {
    light_mode: {
      ...light,
      primary: a,
      primaryVariant: b,
      secondary: c,
      secondaryVariant: d,
    },
    dark_mode: {
      ...dark,
      primary: a,
      primaryVariant: b,
      secondary: c,
      secondaryVariant: c,
    },
  };
}

makeTheme.PropTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

export default makeTheme;
