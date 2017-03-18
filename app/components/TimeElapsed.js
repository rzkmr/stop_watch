import React, { Component } from 'react';
import {render} from 'react-dom';

const leftPad = (width, n) => {
  if ((n + '').length > width) {
    return n;
  }
  const padding = new Array(width).join('0');
  return (padding + n).slice(-width);
};

export default class TimeElapsed extends Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      hr: Math.floor((seconds / 3600) % 24).toString(),
      min: Math.floor((seconds / 60) % 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id={this.props.id} className="digit">
        <span>{leftPad(2, units.hr)} : </span>
        <span>{leftPad(2, units.min)} : </span>
        <span>{leftPad(2, units.sec)} . </span>
        <span>{units.msec}</span>
      </div>
    );
  }
}
