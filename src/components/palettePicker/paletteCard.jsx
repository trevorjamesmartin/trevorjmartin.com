import React, { useState } from "react";

const PaletteCard = ({ colors, palette, activeTheme, handleChange }) => {
  const [linkState, setLinkState] = useState({ palette: undefined });
  const { primary, primaryVariant, secondary, secondaryVariant } = colors;
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
          linkState.palette === palette ? colors.primaryVariant : colors.primary
        }`,
        cursor: "pointer",
      }}
    >
      <div
        className="first-color"
        style={{
          backgroundColor: primary,
          ...styleSize,
        }}
      />
      <div
        className="second-color"
        style={{
          backgroundColor: primaryVariant,
          ...styleSize,
        }}
      />
      <div
        className="third-color"
        style={{
          backgroundColor: secondary,
          ...styleSize,
        }}
      />
      <div
        className="fourth-color"
        style={{
          backgroundColor: secondaryVariant,
          ...styleSize,
        }}
      />
    </div>
  );
};

export default PaletteCard;
