import React, { Component } from "react";

class Theo extends Component {
  render() {
    return (
      <section>
        {" "}
        <p>
          My son has been gifted{" "}
          <span>
            {this.props.range} days because of a{" "}
            <span className="donor">donor</span>
          </span>
        </p>
      </section>
    );
  }
}
export default Theo;
