import React, { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// var toggleCount = 0;

/**
 * if you don't know what this component does, you haven't read this documentation.
 * keep reading.
 * @param {Boolean} mode (state) are we in dark mode?
 * @param {Function} setMode (setState) update the state value of mode
 * @param {Object} toggleStyle JSS
 * @param {String} theme_options comma separated values
 */
const ToggleMode = ({ mode, setMode, toggleStyle, theme_options, ...rest }) => {
  const transitions = useTransition(mode, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 150 }
  });

  const toggle = () => {
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
          <animated.div key={key} onClick={toggle} style={toggleStyle}>
            <FontAwesomeIcon
              icon={props.inDarkMode ? faSun : faMoon}
              alt={props.inDarkMode ? "sun" : "moon"}
              style={toggleStyle}
            />
          </animated.div>
        ) : (
          <animated.div key={key} onClick={toggle} style={toggleStyle}>
            <FontAwesomeIcon
              icon={props.inDarkMode ? faMoon : faSun}
              alt={props.inDarkMode ? "moon" : "sun"}
              style={toggleStyle}
            />
          </animated.div>
        )
      )}
    </>
  );
};

export default ToggleMode;
