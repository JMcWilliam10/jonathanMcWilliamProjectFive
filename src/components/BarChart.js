import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentageValue: [],
      chartData: {
        labels: ["Heart", "Lung", "Kidney", "Liver", "Pancreas"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850"
            ],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050"
        }
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
        labels: ["Registered", "Not Registered"],
        datasets: [
          {
            data: [a, b],
            backgroundColor: ["rgba(0, 255, 0, 0.6)", "rgba(255, 0, 0, 0.6)"]
          }
        ]
      }
    });
  }
  render() {
    return (
      <Fade>
        <div className="chartWrapper">
          <Bar
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
      </Fade>
    );
  }
}

export default BarChart;
