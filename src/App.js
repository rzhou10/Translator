import React, { Component } from "react";
import Translator from "./components/Translator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="whole">
        <Translator />
      </div>
    );
  }
}

export default App;
