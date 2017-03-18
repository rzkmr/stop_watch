import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: { hr: '00', min: '00', sec: '00' },
      amPm: "am"
    }
  }

  componentDidMount() {
    this.loadInterval = setInterval(
      this.getTime(), 1000
    );
  }

  getTime() {
    const
      takeTwelve = n => n > 12 ? n - 12 : n,
      addZero = n => n < 10 ? "0" + n : n;

    setInterval(() => {
      let d, h, m, s, t, amPm;

      d = new Date();
      h = addZero(takeTwelve(d.getHours()));
      m = addZero(d.getMinutes());
      s = addZero(d.getSeconds());
      t = { hr: h, min: m, sec: s };

      amPm = d.getHours() >= 12 ? "pm" : "am";

      this.setState({
        time: t,
        amPm: amPm
      });

    }, 1000);
  }

  render() {
    let time = this.state.time;
    return (
      <div className="outer" id="clock">
        <div className="inner">
          <div className="most-inner digit" id="clock">
            <span>{time.hr} : </span>
            <span>{time.min} : </span>
            <span>{time.sec} : </span>
            <span className="amPm">
              {this.state.amPm}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
