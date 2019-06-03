import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import firebase from "./../firebase.js";
import { timingSafeEqual } from "crypto";

class RegisteredDonorsChart extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      testing: [],
      city: [],
      recentSearches: ["Toronto", "Kingston", "Toronto"],
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
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
    this.recentSearches();
  }

  recentSearches() {
    const dbRef2 = firebase.database().ref();
    // console.log(dbRef2);
    dbRef2.on("value", response => {
      const secondState = [];
      const dataTwo = response.val();
      dataTwo[0].forEach(value => secondState.push(value));
      this.setState({
        city: secondState
      });
      console.log(this.state.city);
    });
  }

  displayOne() {
    return <div>Hello</div>;
  }
  displayTwo() {
    return <div>Hello</div>;
  }
  call() {
    alert("test!");
  }
  clickHandler = () => {
    let recentSearch = this.inputRef.current.value;
    console.log(recentSearch);

    this.setState({
      recentSearches: [...this.state.recentSearches, recentSearch]
    });
  };
  render() {
    return (
      <>
        <div>
          {/* <div> */}
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
          <form className="dropDownForm flex" action="">
            <select
              ref={this.inputRef}
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
                  testing: chartValue,
                  secondChart: 100 - chartValue
                });
                this.clickHandler();
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
          <h4>Recent Searches</h4>
          {/* <button onClick={this.clickHandler}>Click</button> */}
          <ul>
            {this.state.recentSearches
              .slice(
                this.state.recentSearches.length - 3,
                this.state.recentSearches.length
              )
              .map((item, i) => {
                return (
                  <li ket={i} className="fade">
                    <p>{item}</p>
                  </li>
                );
              })}
          </ul>
          {/* {this.state.testing.length ? this.displayOne : this.displayTwo} */}
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default RegisteredDonorsChart;
