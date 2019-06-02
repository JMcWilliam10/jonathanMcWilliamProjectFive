import React, { Component } from "react";
import RegisteredDonorsChart from "./RegisteredDonorsChart";

class Compare extends Component {
  render() {
    return (
      <main>
        <div className="flexCharts">
          <RegisteredDonorsChart
            className="left"
            chartData={this.props.chartData}
            transplant={this.props.transplant}
            chart=".left"
          />
          <RegisteredDonorsChart
            className="right"
            chartData={this.props.chartData}
            transplant={this.props.transplant}
            chart=".right"
          />
        </div>
      </main>
    );
  }
}
export default Compare;
