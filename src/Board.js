import React from "react";
import Cell from "./Cell.js";
import Player from "./Player.js";

export default class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedCell: "",
      playerName: ""
    };
  }

  handleClick = value => {
    console.log("board hit", value);
    this.setState({
      clickedCell: value
    });
  };

  renderCells = () => {
    let cells = [];
    for (let i = 0; i < 3; i++) {
      console.log(i);
      cells.push(
        <Cell key={i} id={i} handleClickFromBoard={this.handleClick} />
      );
    }
    console.log(cells);
    return cells;
  };

  playerNameChange = name => {
    this.setState({
      playerName: name
    });
    console.log("I changed the name!");
  };

  render() {
    return (
      <div className="board">
        <Player
          playerNameChange={this.playerNameChange}
          playerName={this.state.playerName}
        />
        <div> {this.state.clickedCell} was clicked! </div>
        <div className="row">{this.renderCells()}</div>
      </div>
    );
  }
}
