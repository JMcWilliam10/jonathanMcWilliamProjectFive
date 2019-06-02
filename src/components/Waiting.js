import React, { Component } from "react";

class Waiting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="flex">
        <div className="waiting">
          <h2>{this.props.waiting}</h2>
          {/* <p>
            Right now, there are 36 children waiting on organ donations in
            Ontario
          </p> */}
        </div>
      </section>
    );
  }
}
export default Waiting;
