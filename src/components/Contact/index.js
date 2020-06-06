import React, { useState } from "react";
import { useTransition } from "react-spring";
import Modal from "../Modal";

export default function Contact(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const fadingAnimation = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50px)" },
  });
  return (
    <>
      <h1>{props.text}</h1>
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
            />
          )
      )}{" "}
    </>
  );
}
