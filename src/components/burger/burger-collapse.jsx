import React from "react";
import { useSpring } from "react-spring";
// import { StyledLink } from "../navbar/navbar-style";
import { CollapseWrapper, NavLinks } from "./burger-style";
const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="/projects" onClick={props.handleNavbar}>
              Projects
            </a>
          </li>
          <li>
            <a href="/about" onClick={props.handleNavbar}>
              About
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
