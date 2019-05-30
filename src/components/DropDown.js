import React, { Component } from "react";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  query(event) {
    event.preventDefault();
    console.log("going to city");
  }

  render() {
    return (
      <form action="" onSubmit={this.query}>
        <select className="" id="">
          {this.props.transplant.map(item => {
            return <option val={item.Communities}>{item.Communities}</option>;
          })}
        </select>
        <select className="" id="">
          {this.props.transplant.map(item => {
            return (
              <option val={item.DonorRegistrationRate} datatype={23}>
                {item.Communities}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}
export default DropDown;
