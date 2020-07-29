import React, { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// var toggleCount = 0;
const ToggleMode = ({ mode, setMode, toggleStyle, theme_options, ...rest }) => {
  const transitions = useTransition(mode, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 150 },
  });

  const toggleDarkMode = () => {
    const m = !mode;
    console.log("toggle, ", mode);
    rest.toggleDarkMode(m);
    setMode(m);
  };

  useEffect(() => {
    setMode(!mode); // fixes the empty click. TODO: move to callback
  }, []);

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} onClick={toggleDarkMode} style={toggleStyle}>
            <FontAwesomeIcon
              icon={props.inDarkMode ? faSun : faMoon}
              alt={props.inDarkMode ? "sun" : "moon"}
            />
          </animated.div>
        ) : (
          <animated.div key={key} onClick={toggleDarkMode} style={toggleStyle}>
            <FontAwesomeIcon
              icon={props.inDarkMode ? faMoon : faSun}
              alt={props.inDarkMode ? "moon" : "sun"}
            />
          </animated.div>
        )
      )}
    </>
  );
};

export default ToggleMode;