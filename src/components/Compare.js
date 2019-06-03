import React, { Component } from "react";
import RegisteredDonorsChart from "./RegisteredDonorsChart";

class Compare extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleClick(e) {
    this.setState({
      first: e
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
