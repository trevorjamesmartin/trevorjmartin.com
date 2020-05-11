import React from "react";
import {
  BurgerWrapper,
  StyledLink,
  NavBar,
  FlexContainer,
  NavLinks,
} from "./navbar-style";
import { BurgerMenu, CollapseMenu } from "../burger";
import { useSpring, config } from "react-spring";
const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });
  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 700,
    config: config.wobbly,
  });
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;
