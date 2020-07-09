import React from "react";
import { animated } from "react-spring";
import "./modal.css";

/**
 *
 * @param {*} style the style
 * @param {Function} closeModal function that closes the dialog box
 * @param {string} title dialog title
 * @param {string} text dialog text
 * @param {Function} faIcon function that returns a FontAwesome icon
 */
const Modal = ({ style, closeModal, title, text, faIcon }) => (
  <animated.div style={style} className="modal">
    <h2>{faIcon()}</h2>
    <h3 className="modal-title">{title}</h3>
    <br />
    <p className="modal-content">{text}</p>
    <br />
    <button className="modal-close-button" onClick={closeModal}>
      Close
    </button>
  </animated.div>
);
export default Modal;
