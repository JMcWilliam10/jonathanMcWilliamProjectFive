import React, { Component } from "react";

class Waiting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="waiting">
        <h2>Waiting on a Sunny Day</h2>
        <p>
          Right Now, There are 36 children waiting for Organ Donations in
          Ontario
        </p>
      </div>
    );
  }
}
export default Waiting;
