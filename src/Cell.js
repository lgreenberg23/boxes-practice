import React from "react";

export default class Cell extends React.Component {
  constructor() {
    super();
  }

  handleClick = e => {
    this.props.handleClickFromBoard(this.props.id);
  };

  render() {
    return (
      <div className="cell" onClick={this.handleClick} value={this.props.id} />
    );
  }
}
