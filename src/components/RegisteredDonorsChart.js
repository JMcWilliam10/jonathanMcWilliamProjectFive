import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class RegisteredDonorsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.ChartData();
  }
  ChartData(a, b) {
    this.setState({
      chartData: {
        labels: ["Registered", "Not Registered"],
        datasets: [
          {
            data: [a ? !null : 7, a ? !null : 7],
            backgroundColor: ["rgba(0, 255, 0, 0.6)", "rgba(255, 0, 0, 0.6)"]
          }
        ]
      }
    });
  }

  // handleChange(e) {
  //   ChartData(33, 67);
  // }
  render() {
    return (
      <>
        <div>
          <div>
            <Pie
              data={this.state.chartData}
              options={{
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}
            />
            <form className="dropDownForm" action="">
              <select
                className=""
                id="selectOne"
                onChange={() =>
                  this.setState({
                    chartData: {
                      labels: ["Registered", "Not Registered"],
                      datasets: [
                        {
                          data: [2, 2]
                        }
                      ]
                    }
                  })
                }
              >
                {this.props.transplant.map((item, i) => {
                  return (
                    <option key={i} val={item.DonorRegistrationRate}>
                      {item.Communities}
                    </option>
                  );
                })}
                <button>Button</button>
              </select>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default RegisteredDonorsChart;
