import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Board.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Boxes</h2>
        </div>
        <p className="App-intro">
          Click a cell and see what happens in console!
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
