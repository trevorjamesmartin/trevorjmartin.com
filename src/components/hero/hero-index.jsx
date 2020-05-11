import React from "react";
import { HeroH1 } from "./hero-style";
// import logo from "../../assets/hannah-troupe-0FQneB1VjaM-unsplash.jpg";
const Hero = (props) => {
  const { text } = props || "empty";
  return (
    <>
      <HeroH1>{text}</HeroH1>
    </>
  );
};

export default Hero;
