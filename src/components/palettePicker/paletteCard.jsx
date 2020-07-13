import React, { useState } from "react";

const PaletteCard = ({ colors, palette, activeTheme, handleChange }) => {
  const [linkState, setLinkState] = useState({ palette: undefined });
  // const { colorOne, colorTwo, colorThree, colorFour } = colors;
  const styleSize = { width: "10vw", height: "10vw" };
  return (
    <div
      onMouseEnter={() => setLinkState({ palette })}
      onMouseLeave={() => setLinkState({ palette: undefined })}
      onClick={handleChange}
      style={{
        display: "flex",
        padding: ".5rem",
        margin: "2rem",
        borderRadius: "4px",
        width: "40vw",
        border: `1px solid ${
          linkState.palette === palette
            ? activeTheme.palette.colorTwo
            : activeTheme.palette.colorOne
        }`,
        cursor: "pointer",
      }}
    >
      <div
        className="first-color"
        style={{
          backgroundColor: colors.colorOne,
          ...styleSize,
        }}
      />
      <div
        className="second-color"
        style={{
          backgroundColor: colors.colorTwo,
          ...styleSize,
        }}
      />
      <div
        className="third-color"
        style={{
          backgroundColor: colors.colorThree,
          ...styleSize,
        }}
      />
      <div
        className="fourth-color"
        style={{
          backgroundColor: colors.colorFour,
          ...styleSize,
        }}
      />
    </div>
  );
};

export default PaletteCard;
