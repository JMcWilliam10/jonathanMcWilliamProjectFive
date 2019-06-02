import React, { Component } from "react";

export default class ECG extends Component {
  render() {
    return (
      <div className="relative">
        <h1 className="titleOverlay">Organ Donation Awareness</h1>
        <h2 className="theBeatGoesOn">
          ...The <span>Beat</span> Goes On
        </h2>
        <img
          src="https://olimex.files.wordpress.com/2013/10/ecg.jpg"
          alt="ECG monitor with a heart"
        />
      </div>
    );
  }
}
