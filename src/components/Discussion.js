import React, { Component } from "react";

class Discussion extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  comment(event) {
    event.preventDefault();
    console.log("going to city");
  }
  render() {
    return (
      <>
        <div className="discussion">
          <h2>Discussion Form</h2>
          <form className="discussionForm" action="" onChange={this.comment}>
            <input type="text" />
            <input className="greenHeart" type="button" value="💚" />
          </form>
        </div>
      </>
    );
  }
}

export default Discussion;
