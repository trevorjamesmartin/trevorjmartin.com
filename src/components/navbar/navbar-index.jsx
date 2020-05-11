import React from "react";
import { Nav } from "./navbar-style";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
