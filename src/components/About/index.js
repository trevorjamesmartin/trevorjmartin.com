import React, { useState } from "react";
import { useTransition } from "react-spring";
import Modal from "../Modal";
import {
  faAddressCard,
  faCat,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
// import { NavLink } from "react-router-dom";
export default function About(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const fadingAnimation = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50px)" },
  });
  const modalText = "lets connect on linkedIn";
  return (
    <div className="about-page">
      <h1>
        <FontAwesomeIcon icon={faAddressCard} alt="Home" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
      <div className="about-details">
        <a
          href="https://www.linkedin.com/in/trevor4hire/"
          alt="linkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} alt="linkedIn" />
          <p
            style={{
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "1rem",
            }}
          >
            connect
          </p>
        </a>
      </div>
      <button
        className="show-modal-button"
        onClick={() => setModalVisible(true)}
      >
        Contact me
      </button>
      {fadingAnimation.map(
        ({ item, key, props: style }) =>
          item && (
            <Modal
              style={style}
              closeModal={() => setModalVisible(false)}
              key={key}
              title="Contact me"
              text={modalText}
              faIcon={() => (
                <FontAwesomeIcon
                  icon={faArrowUp}
                  alt="please click on the linkedIn icon above"
                />
              )}
            />
          )
      )}{" "}
    </div>
  );
}
