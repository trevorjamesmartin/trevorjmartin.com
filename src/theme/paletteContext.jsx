import React from "react";
import palettes from "./palettes.json";

export const PaletteContext = React.createContext({ palettes, id: 0 });
