import React from "react";

import "./toggle.css";

const toggleStyle = (theme) => ({
  switch: {
    position: "relative",
    display: "inline-block",
  },
  switch_input: {
    display: "none",
  },
  switch_label: {
    display: "block",
    width: "48px",
    height: "24px",
    textIndent: "-150%",
    clip: "rect(0 0 0 0)",
    color: "transparent",
    userSelect: "none",
  },
  switch_label__before: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.primary, //"#dedede",
    borderRadius: "9999em",
    WebkitTransition: "background-color 0.25s ease",
    transition: "background-color 0.25s ease",
  },
  switch_label__after: {
    top: "0",
    left: "0",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.45)",
    WebkitTransition: "left 0.25s ease",
    transition: "left 0.25s ease",
  },
  switch_input_checked____switch_label__before: {
    backgroundColor: theme.primaryVariant, //"#89c12d",
  },
  switch_input_checked____switch_label__after: {
    left: "24px",
  },
  body: {
    textAlign: "center",
    padding: "2rem",
  },
});

const RoundedToggle = (props) => {
  console.log(props.active_theme);
  return (
    <div style={{ ...toggleStyle(props.active_theme), color: "blue" }}>
      <form action="#">
        <div className="switch">
          <input id="switch-1" type="checkbox" className="switch-input" />
          <label for="switch-1" className="switch-label">
            Switch
          </label>
        </div>
      </form>
    </div>
  );
};
export { RoundedToggle };
