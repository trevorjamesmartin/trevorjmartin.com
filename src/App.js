import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

import "./App.css";
import { Route } from "react-router-dom";

const Placeholder = (props) => {
  return <h1>{props.text}</h1>;
};

function App() {
  const [state, setState] = useState({
    navBarOpen: false,
  });
  const handleNavbar = (e) => {
    // e.preventDefault();
    const target = e.currentTarget;
    setState({ navBarOpen: !state.navBarOpen });
    console.log(target, state.navBarOpen);
  };
  return (
    <div className="App">
      <header>
        <Navbar navbarState={state.navbarOpen} handleNavbar={handleNavbar} />
        <Hero text=":)" />
      </header>
      <body>
        <Route
          exact
          path="/"
          component={() => Placeholder({ text: "coming soon" })}
        />
        <Route
          path="/projects"
          component={() => Placeholder({ text: "projects" })}
        />
        <Route path="/about" component={() => Placeholder({ text: "about" })} />
      </body>
      <GlobalStyle />
    </div>
  );
}

export default App;
