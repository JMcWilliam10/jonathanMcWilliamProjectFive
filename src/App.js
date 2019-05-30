import React, { Component } from "react";
import Header from "./components/Header";
import RegisteredDonorsChart from "./components/RegisteredDonorsChart";
import firebase from "./firebase.js";
import Discussion from "./components/Discussion";
import Waiting from "./components/Waiting";
import BecomeADonor from "./components/BecomeADonor";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transplant: []
    };
  }
  onSelectedQuery = search => {
    console.log(search);
    this.setState({
      userSearchQuery: search
    });
  };
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      const newState = [];
      const data = response.val();
      data[1].forEach(value => newState.push(value));
      this.setState({
        transplant: newState
      });
      console.log(this.state.transplant);
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="wrapper">
            <Header title="Registered Organ Donors" />
            <main>
              <div className="flexCharts">
                <RegisteredDonorsChart
                  chartData={this.state.chartData}
                  selectButton={this.state.transplant}
                  transplant={this.state.transplant}
                />
                <RegisteredDonorsChart
                  chartData={this.state.chartData}
                  selectButton={this.state.transplant}
                  transplant={this.state.transplant}
                />
              </div>
            </main>

            <section>
              <div className="flex">
                <Discussion />
                <Waiting />
              </div>
            </section>
            <section>
              <BecomeADonor />
            </section>
            <section>
              <Footer />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default App;
