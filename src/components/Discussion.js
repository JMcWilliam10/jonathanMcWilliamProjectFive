import React, { Component } from "react";
import firebase from "./../firebase.js";

class Discussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        "Stay Strong",
        "Never Give Up",
        "Be Brave",
        "Miracles Do Happen",
        "Stay Strong",
        "Never Give Up",
        "Be Brave"
      ],
      userInput: []
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    console.log(dbRef);
    dbRef.on("value", response => {
      const data = response.val();
      this.setState({
        messages: data[0]
      });
      console.log(this.state.transplant);
    });
  }
  comment(event) {
    event.preventDefault();
    const newState = [];
  }
  comment = event => {
    event.preventDefault();
    console.log(firebase.database().ref());
    const dbRef2 = firebase
      .database()
      .ref()
      .child("1");
    dbRef2.push(this.state.userInput);
    this.setState({
      userInput: ""
    });
  };
  handleChange = event => {
    console.log(this.event);
    this.setState({
      userInput: event.target.value
    });
  };
  handleClick = event => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    this.setState({
      userInput: ""
    });
  };
  render() {
    return (
      <section>
        <div className="flex">
          <div className="discussion">
            <h2>Make A Wish</h2>
            <form className="discussionForm" action="">
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Make a Wish"
                max-length="15"
                value={this.state.userInput}
              />
              <input
                className="greenHeart"
                type="button"
                value="💚"
                onClick={this.handleClick}
              />
            </form>
            <div>
              {this.state.comments.map((comment, i) => {
                return (
                  <li key={i}>
                    <p>{comment}</p>
                  </li>
                );
              })}
            </div>

            <img
              className="wishingWell"
              src="https://www.misskatecuttables.com/uploads/shopping_cart/7395/med_wishing-well.png"
              alt="Wishing Well"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Discussion;
