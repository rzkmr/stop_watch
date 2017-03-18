import React, { Component } from 'react';
import {render} from 'react-dom';

import Clock from './Clock';
import LapTimes from './LapTimes';
import TimeElapsed from './TimeElapsed';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);

    ["lap", "update", "reset", "toggle"].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      lapTimes: [],
      timeElapsed: 0,
    };
  }

  toggle() {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
  lap() {
    const {lapTimes, timeElapsed} = this.state;
    this.setState({lapTimes: lapTimes.concat(timeElapsed)});
  }
  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  render() {
    const {isRunning, lapTimes, timeElapsed} = this.state;
    return (
      <div>
        <Clock name="CityRow" />
        <div className="container">
          <div className = "display">
            <TimeElapsed id="timer" timeElapsed={timeElapsed} />
            <button onClick={this.toggle}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={isRunning ? this.lap : this.reset}
              disabled={!isRunning && !timeElapsed}
             >
              {isRunning || !timeElapsed ? 'Lap' : 'Reset'}
            </button>
            {lapTimes.length > 0 && <LapTimes lapTimes={lapTimes} />}
          </div>
        </div>
      </div>
    );
  }
}

