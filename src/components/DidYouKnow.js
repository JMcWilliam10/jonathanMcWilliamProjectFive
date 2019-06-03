import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class DidYouKnow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: []
    };
  }
  handleChange = () => {
    this.setState({
      toggle: "addLengthToShowGraphic"
    });
  };
  showAnswer() {
    return (
      <>
        <div className="photoWrapper">
          <img
            className={this.props.imgClass}
            src={this.props.imgSrc}
            alt="1 donor can save 8 lives"
          />
        </div>
      </>
    );
  }
  render() {
    return (
      <div>
        <Fade bottom cascade>
          <h3 className="didYouKnowSpacing">
            {" "}
            <span>{this.props.questionPartOne}</span>
            <span>
              {" "}
              <select
                name=""
                id=""
                className={this.props.selectWidth}
                onChange={this.handleChange}
              >
                <option value="">{this.props.optionSelect0}</option>
                <option value="1">{this.props.optionSelect1}</option>
                <option value="1">{this.props.optionSelect2}</option>
                <option value="1">{this.props.optionSelect3}</option>
                <option value="1">{this.props.optionSelect4}</option>
              </select>
            </span>
            <span>{this.props.questionPartTwo}</span>
          </h3>
        </Fade>
        <Fade cascade>
          <div>{this.state.toggle.length ? this.showAnswer() : null}</div>
        </Fade>
      </div>
    );
  }
}
export default DidYouKnow;
