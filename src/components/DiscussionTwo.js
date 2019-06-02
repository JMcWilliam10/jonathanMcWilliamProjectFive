import React from "react";
import firebase from "./../firebase.js";

class DiscussionTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      userInput: []
    };
  }
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      const newState = [];
      const data = response.val();
      console.log(data);
      data[1].forEach(value =>
        this.setState({
          books: newState
        })
      );
    });
  }
  handleChange = event => {
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
  removeBook = bookId => {
    const dbRef = firebase.database().ref(bookId);
    dbRef.remove();
  };
  render() {
    return (
      <div className="App">
        <form action="">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Add Book"
            value={this.state.userInput}
          />
          <button onClick={this.handleClick}>Add</button>
        </form>
        <ul>
          {this.state.books.map(book => {
            return (
              <li>
                <p>{book.name}</p>
                <button onClick={() => this.removeBook(book.key)}>
                  {" "}
                  Remove{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DiscussionTwo;
