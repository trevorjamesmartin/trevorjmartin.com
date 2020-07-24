import React, { useState } from "react";
// import "./pageref.css";
/**
 * Page Reference
 * @param {*} url push to this location on click
 * @param {*} text display this text
 * @param {*} name used for identification
 * @param {*} hoverColor color when mouse is over the page ref
 * @param {*} normalColor color
 */
const PageRef = ({ url, text, name, hoverColor, normalColor, ...props }) => {
  // const history = useHistory();
  const history = props.history;
  const [linkState, setLinkState] = useState({ name: undefined });

  return (
    <div
      onClick={() => history.push(url)}
      name={name}
      className={
        linkState.name === name
          ? "nav-link-text-selected page-ref"
          : "nav-link-text page-ref"
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
              boxShadow: "0 4px 2px -4px black",
              MozBoxShadow: "0 4px 2px -4px black",
              WebkitBoxShadow: "0 4px 2px -4px black",
              minWidth: "100%",
              marginTop: "2rem",
            }
          : {
              border: `1px solid ${normalColor}`,
              borderRadius: "4px",
              padding: "1rem",
              boxShadow: "0 4px 2px -4px black",
              MozBoxShadow: "0 4px 2px -4px black",
              WebkitBoxShadow: "0 4px 2px -4px black",
              minWidth: "100%",
              marginTop: "2rem",
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
    </div>
  );
};

export default PageRef;
