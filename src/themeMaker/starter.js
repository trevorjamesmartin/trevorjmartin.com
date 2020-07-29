import dark_base from "./dark_base.json";
import light_base from "./light_base.json";
import makeTheme from "./make-theme";
/**
 * returns light or dark mode, accordingly
 * @param {String} theme_options CSV; Must include "a" or "b"
 * @param {Object} light_mode
 * @param {Object} dark_mode
 */
const activeTheme = ({ theme_options, light_mode, dark_mode }) => {
  const args = theme_options && theme_options.split(",");
  const active_theme =
    args && args.length > 0
      ? { b: dark_mode || dark_base, a: light_mode || light_base }[args[0]]
      : undefined;
  return active_theme;
};

const { light_mode, dark_mode } = makeTheme([
  "#7c3c21",
  "#ec823a",
  "#f9c49a",
  "#e8e4e1",
]); // create light and dark themes with these accent colors
const active_theme = activeTheme({ theme_options: "a", light_mode, dark_mode });

// stringify for storage.
const starterTheme = JSON.stringify({
  context_id: 0,
  palette: {
    primary: "#7c3c21",
    primaryVariant: "#ec823a",
    secondary: "#f9c49a",
    secondaryVariant: "#e8e4e1",
  },
  theme_options: "a",
  active_theme,
  version: "b5",
});

export { starterTheme, activeTheme };
