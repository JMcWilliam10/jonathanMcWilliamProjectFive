import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Theo extends Component {
  render() {
    return (
      <>
        <Fade>
          <div className="bringToFront">
            {" "}
            <h2>
              My son has been gifted{" "}
              <span>
                <span className="donor">{this.props.range}</span> extra days and
                counting because of a <span className="heart">heart </span>
                donor
              </span>
            </h2>
          </div>

          <div className="theo">
            {/* <div>
              <img src="https://i.imgur.com/81ow8KD.jpg" alt="" />
            </div> */}
            <div>
              <img src="https://i.imgur.com/m7asSTx.jpg" alt="" />
            </div>
          </div>
        </Fade>
      </>
    );
  }
}
export default Theo;
