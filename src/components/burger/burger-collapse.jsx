import React from "react";
import { useSpring } from "react-spring";
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
              link n1
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n2
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n3
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n4
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
