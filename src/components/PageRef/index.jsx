import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/**
 * Page Reference
 * @param {*} url push to this location on click
 * @param {*} text display this text
 * @param {*} name used for identification
 * @param {*} hoverColor color when mouse is over the page ref
 * @param {*} normalColor color
 */
const PageRef = ({ url, text, name, hoverColor, normalColor }) => {
  const history = useHistory();
  const [linkState, setLinkState] = useState({ name: undefined });

  return (
    <li
      onClick={() => history.push(url)}
      name={name}
      className={
        linkState.name === name ? "nav-link-text-selected" : "nav-link-text"
      }
      onMouseEnter={() => setLinkState({ name })}
      onMouseLeave={() => setLinkState({ name: undefined })}
      style={
        linkState.name === name
          ? {
              border: `1px solid ${hoverColor}`,
              borderRadius: "4px",
              padding: "1rem",
              cursor: "pointer",
            }
          : {
              border: `1px solid ${normalColor}`,
              borderRadius: "4px",
              padding: "1rem",
            }
      }
    >
      <p
        style={
          linkState.name === name
            ? { color: hoverColor, letterSpacing: "1px" }
            : { color: normalColor, letterSpacing: "1px" }
        }
      >
        {text}
      </p>
    </li>
  );
};

export default PageRef;
