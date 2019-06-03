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
      recentSearch2: [],
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
    // this.recentSearches();
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
    // pass the node number down to the registered donors chart from compare
    // render a data attribute value in the select element via props
    // grab the data attribute value in click handler and store it in a variable
    // pass that variable to .ref()
    //  when referencing our database
    console.log(this.inputRef.current);

    let dataForFirebase = this.inputRef.current.id;
    console.log(dataForFirebase);

    const dbRef = firebase.database().ref(dataForFirebase);
    dbRef.push(recentSearch);
    this.setState({
      recentSearches: [...this.state.recentSearches, recentSearch]
    });
    // this.setState({
    //   recentSearch2: [...this.state.recentSearch2, recentSearch]
    // });
  };
  render() {
    return (
      <>
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
          <form className="dropDownForm flex" action="">
            <select
              ref={this.inputRef}
              className={this.props.chart}
              id={this.props.nodeNumber}
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
          <h4>{this.props.title}</h4>
          <ul>
            {this.props.recentSearches
              .slice(
                this.props.recentSearches.length - 3,
                this.props.recentSearches.length
              )
              .map((item, i) => {
                return (
                  <li key={i} className="fade">
                    <p>{item}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default RegisteredDonorsChart;
