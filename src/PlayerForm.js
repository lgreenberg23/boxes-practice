import React from "react";

export default class PlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };
  }

  handleChange = e => {
    this.setState(
      {
        playerName: e.target.value
      },
      console.log("state", this.state)
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.playerNameChange(this.state.playerName);
  };

  render() {
    console.log("player form props", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player Name:</label>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
