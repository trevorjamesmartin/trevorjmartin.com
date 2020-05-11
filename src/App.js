import React from "react";
import Navbar from "./components/navbar";
import logo from "./logo.svg";

import "./App.css";
import { Route } from "react-router-dom";

const Placeholder = (props) => {
  return <h1>{props.text}</h1>;
};

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
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
    </div>
  );
}

export default App;
