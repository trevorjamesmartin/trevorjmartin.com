import makeTheme from "./make-theme";
import { starterTheme, activeTheme } from "./starter";

function prefersDarkMode() {
  if (!window.matchMedia) return;
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  console.log("user prefers dark-mode", darkMode.matches);
  return darkMode.matches;
}
export { makeTheme, activeTheme, starterTheme, prefersDarkMode };
