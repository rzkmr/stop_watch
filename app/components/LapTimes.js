import React, { Component } from 'react';
import {render} from 'react-dom';

import TimeElapsed from './TimeElapsed';

export default class LapTimes extends Component {
  render() {
    const rows = this.props.lapTimes.sort((a,b)=>{return b-a}).map((lapTime, index) =>
      <tr key={++index}>
        <td>{this.props.lapTimes.length - index + 1}</td>
        <td><TimeElapsed timeElapsed={lapTime} /></td>
      </tr>
    );

    return (
      <table id="lap-times">
        <thead>
          <tr>
            <th>Lap</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
