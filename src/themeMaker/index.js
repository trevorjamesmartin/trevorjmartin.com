import makeTheme from "./make-theme";
import { starterTheme, activeTheme } from "./starter";
// function activeTheme({ theme_options, light_mode, dark_mode }) {
//   const inDarkMode =
//     theme_options.split(",").filter((t) => t.toUpperCase() === "A").length > 0;
//   console.log(`inDarkMode? ${inDarkMode}`);
//   return inDarkMode ? dark_mode : light_mode;
// }

export { makeTheme, activeTheme, starterTheme };
