import React from "react";
import PlayerForm from "./PlayerForm.js";

export default class Player extends React.Component {
  render() {
    console.log("props from player", this.props);
    return (
      <div>
        <div>This is a card about a player</div>
        <div>Player's name is {this.props.playerName}</div>
        <PlayerForm playerNameChange={this.props.playerNameChange} />
      </div>
    );
  }
}
