import React, { useState, useEffect } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faSpinner } from "@fortawesome/free-solid-svg-icons";

// styles
import ListCardStyle from "./ListCardStyle";
import { ImageSpinner } from "nifty-components";

const awesomeSpin = (
  <FontAwesomeIcon icon={faSpinner} pulse={true} spin={true} size="4x" />
);

const defaultPalette = {
  colorOne: "#7c3c21",
  colorTwo: "#ec823a",
  colorThree: "#f9c49a",
  colorFour: "#e8e4e1",
};
// card listview
const ListCard = ({
  key,
  title,
  briefdesc,
  // cardtags,
  avatar,
  portrait,
  tldr,
  isOpen,
  toggleOpen,
  isSelected,
  selectCard,
  cardNumber,
  hostedURL,
  sourceURL,
  ...rest
}) => {
  const [state, setState] = useState({
    url: undefined,
    loading: true,
  });
  const {
    parentStyle,
    leftStyle,
    // rightStyle,
    mainStyle,
    expandedStyle,
    linkStyle,
    imgStyle,
    imgFrameStyle,
  } = ListCardStyle({
    palette: rest.palette || defaultPalette,
    portrait,
    rest,
    isSelected,
    isOpen,
  });
  useEffect(() => {
    let reset = 0;
    !state.palette && reset++; // no palette saved to local state
    !rest.palette && reset++; // no palette in parameters
    reset.palette && state.palette !== rest.palette && reset++; // new palette
    reset > 0 &&
      setState({ ...state, palette: rest.palette || defaultPalette });
    console.log(`reset : ${reset}`);
  }, [state, rest.palette]);
  return (
    <div
      key={key}
      id={`card-${key}`}
      name={`card-${key}`}
      style={isOpen ? expandedStyle : parentStyle}
      onMouseEnter={() => selectCard(cardNumber)}
      onMouseLeave={() => selectCard(undefined)}
      onClick={(e) => {
        toggleOpen(cardNumber);
        e.target.scrollIntoView(); // document.querySelector(`#card-${key}`).scrollIntoView();
      }}
    >
      <div className="nifty-card-left list-view" style={leftStyle}>
        <div style={imgFrameStyle}>
          <ImageSpinner
            style={imgStyle}
            src={avatar || "https://avatarfiles.alphacoders.com/289/289.jpg"}
            alt="avatar"
            customspinner={awesomeSpin}
          />
        </div>
        {isOpen ? (
          <span className="nifty-card-links" style={linkStyle}>
            <a
              href={sourceURL}
              alt="source code"
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => setState({ url: sourceURL })}
              onMouseLeave={() => setState({ url: undefined })}
            >
              <FontAwesomeIcon
                icon={faGithub}
                color={
                  state.url === sourceURL
                    ? state.palette.colorFour
                    : state.palette.colorTwo
                }
              />
            </a>
            <a
              href={hostedURL}
              alt="web application"
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => setState({ url: hostedURL })}
              onMouseLeave={() => setState({ url: undefined })}
            >
              <FontAwesomeIcon
                icon={faGlobe}
                color={
                  state.url === hostedURL
                    ? state.palette.colorFour
                    : state.palette.colorTwo
                }
              />
            </a>
          </span>
        ) : (
          ""
        )}
      </div>
      <main className="nifty-card-main list-view" style={mainStyle}>
        <p
          style={{
            padding: isOpen ? "0 2ch" : "0 0",
            // fontWeight: "bold",
            fontWeight: 500,
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {title || "Hello World"}
        </p>
        <p
          style={{
            padding: isOpen ? "0 2ch" : "0 0",
            fontSize: "1rem",
            fontFamily: "'Fira Code', monospace",
            fontStyle: "italic",
          }}
        >
          {briefdesc || "somewhere, on earth"}
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            padding: isOpen ? "0 2ch" : "0 0",
            color: "darkslategrey",
          }}
        >
          {isOpen ? tldr || "#JS, #React" : "..."}
        </p>{" "}
      </main>
      {/* <div className="nifty-card-right list-view" style={rightStyle} /> */}
    </div>
  );
};

const ListCardTable = (props) => {
  return (
    <div
      className="list-card-table"
      style={{ width: "95vw", marginTop: "1rem", ...props.style }}
    >
      {props.cards}
    </div>
  );
};

export { ListCard, ListCardTable };
