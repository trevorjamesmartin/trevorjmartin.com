import React, { useState } from "react";
// import { useTransition } from "react-spring";
// import Modal from "../Modal";
import {
  faAddressCard,
  faCat,
  // faSmile,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
// import { NavLink } from "react-router-dom";
export default function About(props) {
  // const [modalVisible, setModalVisible] = useState(false);
  const [linkState, setLinkState] = useState({ hover: false, url: "" });
  // const [btnState, setBtnState] = useState({ hover: false });
  // const fadingAnimation = useTransition(modalVisible, null, {
  //   from: { opacity: 0, transform: "translateY(-50px)" },
  //   enter: { opacity: 1, transform: "translateY(0px)" },
  //   leave: { opacity: 0, transform: "translateY(-50px)" },
  // });
  // const modalText = "lets connect on linkedIn";
  return (
    <div className="page">
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
          onMouseEnter={() => setLinkState({ hover: true, ref: "li" })}
          onMouseLeave={() => setLinkState({ hover: false, ref: undefined })}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            alt="linkedIn"
            color={
              linkState.hover && linkState.ref === "li"
                ? props.palette.colorTwo
                : props.palette.colorOne
            }
          />
          <p
            style={{
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "1rem",
              color:
                linkState.hover && linkState.ref === "li"
                  ? props.palette.colorTwo
                  : props.palette.colorOne,
            }}
          >
            Linkedin
          </p>
        </a>
        <a
          href="https://github.com/debauchery1st"
          alt="Github Profile"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkState({ hover: true, ref: "gh" })}
          onMouseLeave={() => setLinkState({ hover: false, ref: undefined })}
        >
          <FontAwesomeIcon
            icon={faGithub}
            alt="Octo Cat"
            color={
              linkState.hover && linkState.ref === "gh"
                ? props.palette.colorTwo
                : props.palette.colorOne
            }
          />
          <p
            style={{
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "1rem",
              color:
                linkState.hover && linkState.ref === "gh"
                  ? props.palette.colorTwo
                  : props.palette.colorOne,
            }}
          >
            Github
          </p>
        </a>
      </div>
      {/* <button
        className="show-modal-button"
        palette={props.palette}
        onClick={() => setModalVisible(true)}
        onMouseEnter={() => setBtnState({ hover: true, ref: "modal" })}
        onMouseLeave={() => setBtnState({ hover: false, ref: undefined })}
        style={{
          borderRadius: "4px",
          backgroundColor: btnState.hover
            ? props.palette.colorTwo
            : props.palette.colorOne,
          color: btnState.hover
            ? props.palette.colorOne
            : props.palette.colorThree,
        }}
      >
        Contact me
      </button> */}
      {/* {fadingAnimation.map(
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
                  icon={faSmile}
                  alt="please click on the linkedIn icon above"
                />
              )}
            />
          )
      )}{" "} */}
    </div>
  );
}
