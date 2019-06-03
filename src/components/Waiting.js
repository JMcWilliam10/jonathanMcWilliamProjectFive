import React, { Component } from "react";

class Waiting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="flex">
        <div className="waiting redHover">
          <h2>{this.props.waiting}</h2>
        </div>
      </section>
    );
  }
}
export default Waiting;
