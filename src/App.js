import React, { Component } from "react";
import Header from "./components/Header";
import CheckDonorStatus from "./components/CheckDonorStatus";
import firebase from "./firebase.js";
import Compare from "./components/Compare";
// import Discussion from "./components/Discussion";
import DiscussionTwo from "./components/DiscussionTwo";
import Facts from "./components/Facts";
import Fade from "react-reveal/Fade";
import Theo from "./components/Theo";
import Waiting from "./components/Waiting";
import BecomeADonor from "./components/BecomeADonor";
import ECG from "./components/ECG";
import BarChart from "./components/BarChart";
import Footer from "./components/Footer";
import PageBreak from "./components/PageBreak";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transplant: [],
      comments: [],
      time: "",
      firstChartValue: undefined,
      secondChartValue: undefined
    };
  }
  onSelectedQuery = search => {
    console.log(search);
    this.setState({
      userSearchQuery: search
    });
  };
  componentDidMount() {
    this.firstQuery();
    // this.secondQuery();
    this.dateRange();
  }

  firstQuery() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      const newState = [];
      const data = response.val();
      data[1].forEach(value => newState.push(value));
      this.setState({
        transplant: newState
      });
      // console.log(this.state.transplant);
    });
  }

  // secondQuery() {
  //   const dbRef2 = firebase.database().ref();
  //   dbRef2.on("value", response => {
  //     const secondState = [];
  //     const dataTwo = response.val();
  //     dataTwo[0].forEach(value => secondState.push(value));
  //     this.setState({
  //       comments: secondState
  //     });
  //     console.log(this.state.comments);
  //   });
  // }

  dateRange() {
    // Original sources to create this function
    // https://stackoverflow.com/questions/23609042/how-to-avoid-octal-literals-are-not-allowed-in-strict-mode-with-createwritestr
    // https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const transplantDate = new Date("2016-07-25");
    const today = new Date();

    const diffDays = Math.round(
      Math.abs((transplantDate.getTime() - today.getTime()) / oneDay)
    );
    //
    this.setState({
      time: diffDays
    });
  }
  thirdQuery() {}

  render() {
    return (
      <div className="App">
        <ECG />
        <Facts />
        {/* <PageBreak /> */}
        <BarChart />
        {/* <PageBreak /> */}
        <Header title="Compare The Percentage of Registered Organ Donors in Ontario By City" />
        <Compare transplant={this.state.transplant} />
        <Theo range={this.state.time} />
        {/* <PageBreak /> */}
        <Waiting
          waiting="As of June 1, 2019, there are 36 children waiting on organ donations in
            Ontario."
        />
        <CheckDonorStatus />
        <BecomeADonor />
        <Footer />
      </div>
    );
  }
}

export default App;
