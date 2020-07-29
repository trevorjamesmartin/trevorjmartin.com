import React, { useState } from "react";

import { faAddressCard, faCat } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./about.css";

export default function About(props) {
  // console.log("about: ", props);
  const { active_theme: theme } = props;
  const [linkState, setLinkState] = useState({ hover: false, url: "" });
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
                ? theme.primaryVariant
                : theme.primary
            }
          />
          <p
            style={{
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "1rem",
              color:
                linkState.hover && linkState.ref === "li"
                  ? theme.primaryVariant
                  : theme.primary,
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
                ? theme.primaryVariant
                : theme.primary
            }
          />
          <p
            style={{
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "1rem",
              color:
                linkState.hover && linkState.ref === "gh"
                  ? theme.primaryVariant
                  : theme.primary,
            }}
          >
            Github
          </p>
        </a>
      </div>
    </div>
  );
}
