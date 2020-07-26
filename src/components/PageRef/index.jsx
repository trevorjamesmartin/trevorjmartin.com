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
const PageLink = ({ url, text, name, ...props }) => {
  // const history = useHistory();
  const history = props.history;
  const [linkState, setLinkState] = useState({ name: undefined });
  // const shadowcolor = props.shadowcolor || "black";
  const normalcolor = props.normalcolor || "darkslategrey";
  const hovercolor = props.hovercolor || "cornflowerblue";
  return (
    <div
      onClick={() => history.push(url)}
      name={name}
      className={
        linkState.name === name
          ? "nav-link-text-selected page-link"
          : "nav-link-text page-link"
      }
      onMouseEnter={() => setLinkState({ name })}
      onMouseLeave={() => setLinkState({ name: undefined })}
      style={
        linkState.name === name
          ? {
              border: `1px solid ${hovercolor}`,
              borderRadius: "4px",
              padding: "1rem",
              cursor: "pointer",
              // boxShadow: `0 4px 2px -4px ${shadowcolor}`,
              // MozBoxShadow: `0 4px 2px -4px ${shadowcolor}`,
              // WebkitBoxShadow: `0 4px 2px -4px ${shadowcolor}`,
              minWidth: "100%",
              marginTop: "2rem",
              ...props.globalStyle,
              ...props.hoverStyle,
            }
          : {
              border: `1px solid ${normalcolor}`,
              borderRadius: "4px",
              padding: "1rem",
              // boxShadow: `0 4px 2px -4px ${shadowcolor}`,
              // MozBoxShadow: `0 4px 2px -4px ${shadowcolor}`,
              // WebkitBoxShadow: `0 4px 2px -4px ${shadowcolor}`,
              minWidth: "100%",
              marginTop: "2rem",
              ...props.globalStyle,
              ...props.normalStyle,
            }
      }
    >
      <p
        className="link-paragraph"
        style={
          linkState.name === name
            ? { color: hovercolor, letterSpacing: "1px", ...props.globalStyle }
            : { color: normalcolor, letterSpacing: "1px", ...props.globalStyle }
        }
      >
        {text}
      </p>
    </div>
  );
};

export default PageLink;
