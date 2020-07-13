import React, { useState } from "react";
import { animated } from "react-spring";
// import { themeColors } from "../../GlobalStyle";
import "./modal.css";

/**
 *
 * @param {*} style the style
 * @param {Function} closeModal function that closes the dialog box
 * @param {string} title dialog title
 * @param {string} text dialog text
 * @param {Function} faIcon function that returns a FontAwesome icon
 */
const Modal = ({ style, closeModal, title, text, faIcon, palette }) => {
  const [linkState, setLinkState] = useState({ hover: false });

  return (
    <animated.div style={style} className="modal">
      <h2>{faIcon()}</h2>
      <h3 className="modal-title">{title}</h3>
      <br />
      {/* <p className="modal-content">{text}</p> */}
      <a
        href="https://www.linkedin.com/in/trevor4hire/"
        alt="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setLinkState({ hover: true })}
        onMouseLeave={() => setLinkState({ hover: false })}
        className="modal-anchor-link"
        style={{
          textDecoration: "underline",
          letterSpacing: "1px",
          fontSize: "1rem",
          color: linkState.hover ? palette.colorTwo : palette.colorThree,
        }}
      >
        let's connect on Linkedin
      </a>
      <br />
      <button className="modal-close-button" onClick={closeModal}>
        Close
      </button>
    </animated.div>
  );
};
export default Modal;
