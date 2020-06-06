import React, { useState } from "react";
import { useTransition } from "react-spring";
import Modal from "../Modal";
import { faAddressCard, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
export default function About(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const fadingAnimation = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50px)" },
  });
  const modalText = ":)";
  return (
    <div className="about-page">
      <h1>
        <FontAwesomeIcon icon={faAddressCard} alt="Home" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
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
              title="this page is under construction."
              text={modalText}
            />
          )
      )}{" "}
    </div>
  );
}
