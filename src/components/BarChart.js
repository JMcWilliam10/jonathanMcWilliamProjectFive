import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentageValue: [],
      chartData: {
        labels: [
          "Kidney",
          "Liver",
          "Kidney/Pancreas",
          "Heart",
          "Lung",
          "Other",
          "Pancreas (Whole)",
          "Heart/Lung",
          "Small Bowel"
        ],
        datasets: [
          {
            label: "Currently Waiting",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#c45850",
              "#e8c3b9",
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#c45850",
              "#e8c3b9"
            ],
            data: [1156, 276, 60, 56, 54, 12, 10, 0, 1]
          }
        ]
      },
      options: {
        legend: { display: false }
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
        <section className="barChart">
          <h2>Ontarians Waiting For Organs By Category as of June 19, 2019 </h2>
          <div className="chartWrapper">
            <HorizontalBar
              data={this.state.chartData}
              options={{
                responsive: true,
                legend: {
                  display: false
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        fontColor: "#fff",
                        fontSize: 20
                      }
                    }
                  ],
                  xAxes: [
                    {
                      ticks: {
                        fontColor: "#fff",
                        fontSize: 20
                      }
                    }
                  ]
                },
                fontColor: "#666"
              }}
            />
          </div>
        </section>
      </Fade>
    );
  }
}

export default BarChart;
