import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import logo from "./logo.svg";

import "./App.css";
import { Route } from "react-router-dom";

const Placeholder = (props) => {
  return <h1>{props.text}</h1>;
};

function App() {
  const [state, setState] = useState({
    navBarOpen: false,
  });
  const handleNavbar = () => setState({ navBarOpen: !state.navBarOpen });
  return (
    <div className="App">
      <header>
        <Navbar navbarState={state.navbarOpen} handleNavbar={handleNavbar} />
        <Hero text="test" />
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
      <footer>
        <Navbar />
      </footer>
      <GlobalStyle />
    </div>
  );
}

export default App;
