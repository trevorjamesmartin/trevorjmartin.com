import React from "react";
import { Wrapper } from "./burger-style";
const BurgerMenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default BurgerMenu;
