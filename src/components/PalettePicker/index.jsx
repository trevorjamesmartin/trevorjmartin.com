import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PaletteCard from "./PaletteCard";
import { faPalette, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PalettePicker = (props) => {
  const history = useHistory();
  const { handleChangeTheme, context_id, palette } = props;
  const [cards, setCards] = useState([]);
  const [hash, setHash] = useState("");
  const [scroller, setScroller] = useState();
  const [state] = useState({ context_id, palette });
  // const scrollToEl = () => {
  //   const hash = history.location.hash.substring(1);
  //   console.log(`hash ${hash}`);

  //   const el = document.getElementById(hash);
  //   if (el) el.scrollIntoView({ behavior: "smooth" });
  // };
  const delayedScoll = (hash) => {
    const el = document.getElementById(`pc-${hash}`);
    console.log("el", hash, el);
    // window.scrollTo(el);
    clearTimeout(scroller);
  };
  useEffect(() => {
    setHash(history.location.hash.substring(1));
    if (hash.length > 0) {
      const interval = setTimeout(() => {
        delayedScoll(hash);
      }, 2000);
      setScroller(interval);
    }
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
          id={`pc-${id}`}
          name={`pc-${id}`}
          palette={id}
          colors={themeColors}
          handleChange={() => {
            //history.location = history.location + `#pc-${id}`;
            const newLocation = `#pc-${id}`;
            history.push(newLocation);
            handleChangeTheme(id);
          }}
          activeTheme={state}
        />
      );
    };
    // console.log(state);
    setCards(props.context.palettes.map(makeCard));
    // }
  }, [props.context.palettes, state, setCards, handleChangeTheme, hash]);

  return (
    <div>
      <h1>
        <FontAwesomeIcon
          icon={faPalette}
          alt="Theme"
          onClick={() => props.toggleMatrix()}
        />
      </h1>
      <FontAwesomeIcon icon={faCat} onClick={() => props.toggleMatrix()} />
      <br />
      Theme
      {cards}
    </div>
  );
};

export default PalettePicker;
