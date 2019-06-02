import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class RegisteredDonorsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: [],
      chartData: {
        labels: ["Please Select The Dropdown"],
        datasets: [
          {
            data: [100, 0],
            backgroundColor: ["black"]
          }
        ]
      }
    };
  }
  chartData(a, b) {
    this.setState({
      percentageValue: {
        DataOne: a,
        Data: b
      },
      chartData: {
        labels: ["Registered Percentage", "Non-Registered Percentage"],
        datasets: [
          {
            data: [a, b],
            backgroundColor: ["rgba(0, 255, 0, 0.6)", "rgba(255, 0, 0, 0.6)"]
          }
        ]
      }
    });
  }
  displayOne() {
    return <div>Hello</div>;
  }
  displayTwo() {
    return <div>Hello</div>;
  }
  render() {
    return (
      <>
        <div>
          <div>
            <div className="chartWrapper">
              <Pie
                data={this.state.chartData}
                options={{
                  responsive: true,
                  legend: {
                    display: false,
                    position: "bottom"
                  }
                }}
              />
            </div>
            <form className="dropDownForm" action="">
              <select
                className={this.props.chart}
                id=""
                onChange={() => {
                  const selectedOption = document.getElementsByClassName(
                    this.props.chart
                  )[0].selectedIndex;
                  let chartValue = parseInt(
                    this.props.transplant[selectedOption].DonorRegistrationRate
                  );
                  this.chartData(chartValue, 100 - chartValue);
                  this.setState({
                    testing: chartValue
                  });
                }}
              >
                {this.props.transplant.map((item, i) => {
                  return (
                    <option id={i} key={i} val={item.DonorRegistrationRate}>
                      {item.Communities}
                    </option>
                  );
                })}
              </select>
            </form>
            {this.state.testing.length ? this.displayOne : this.displayTwo}
          </div>
        </div>
      </>
    );
  }
}

export default RegisteredDonorsChart;
