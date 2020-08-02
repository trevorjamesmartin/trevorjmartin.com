import React, { useState, useEffect } from "react";
import PaletteCard from "./paletteCard";

const PalettePicker = (props) => {
  const { handleChangeTheme, context_id, palette } = props;
  const [cards, setCards] = useState([]);
  const [state] = useState({ context_id, palette });
  useEffect(() => {
    const makeCard = ({ id, colors }) => {
      const [primary, primaryVariant, secondary, secondaryVariant] = JSON.parse(
        colors
      );
      const themeColors = {
        primary,
        primaryVariant,
        secondary,
        secondaryVariant
      };
      return (
        <PaletteCard
          key={id}
          palette={id}
          colors={themeColors}
          handleChange={() => handleChangeTheme(id)}
          activeTheme={state}
        />
      );
    };
    // console.log(state);
    setCards(props.context.palettes.map(makeCard));
  }, [props.context.palettes, state, setCards, handleChangeTheme]);

  return (
    <div>
      <h1>PalettePicker</h1>
      {cards}
    </div>
  );
};

export default PalettePicker;
