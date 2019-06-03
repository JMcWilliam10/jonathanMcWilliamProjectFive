import React, { Component } from "react";
import RegisteredDonorsChart from "./RegisteredDonorsChart";
import firebase from "./../firebase.js";

class Compare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentSearch2: [],
      recentSearches: ["Toronto", "Kingston", "Napanee"]
    };
  }
  handleClick(e) {
    this.setState({
      first: e
    });
  }
  componentDidMount() {
    this.recentSearches();
  }

  recentSearches() {
    const dbRef2 = firebase.database().ref();
    dbRef2.on("value", response => {
      const rightState = [];
      let leftState = [];
      let secondState = ["Toronto", "Kingston", "Napanee"];
      const dataTwo = response.val();

      secondState.forEach(value => secondState.push(value));
      this.setState({
        recentSearches: secondState
      });

      leftState = Object.values(dataTwo[2]);
      this.setState({
        recentSearch2: leftState
      });

      // console.log(dataTwo);
      // rightState = Object.values(dataTwo[0]);
      // this.setState({
      //   recentSearches: rightState
      // });
    });
  }

  render() {
    return (
      <main>
        <div className="flexCharts">
          <RegisteredDonorsChart
            className="left"
            chartData={this.props.chartData}
            transplant={this.props.transplant}
            chart=".left"
            onSelectedOptionChange={this.handleClick}
            recentSearches={this.state.recentSearches}
            nodeNumber="3"
          />
          <RegisteredDonorsChart
            className="right"
            chartData={this.props.chartData}
            transplant={this.props.transplant}
            chart=".right"
            recentSearches={this.state.recentSearch2}
            nodeNumber="2"
          />
        </div>
      </main>
    );
  }
}
export default Compare;
