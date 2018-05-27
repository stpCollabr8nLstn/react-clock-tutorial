import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    const { now } = props;
    this.state = {
      now,
      secDeg: this.calcDegree(now.getSeconds(), 60),
      minDeg: this.calcDegree(now.getMinutes(), 60),
      hrDeg: this.calcDegree(now.getHours(), 12),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: new Date()
    });
    this.setClock();
  }

  setClock() {
    const { now } = this.state;
    this.setState({
      secDeg: this.calcDegree(now.getSeconds(), 60),
      minDeg: this.calcDegree(now.getMinutes(), 60),
      hrDeg: this.calcDegree(now.getHours(), 12),
    })
  }

  calcDegree (unit, totalUnits) {
    return ((unit / totalUnits) * 360) + 90;
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{transform:`rotate(${this.state.hrDeg}deg)`}}></div>
          <div
            className="hand min-hand"
            style={{transform:`rotate(${this.state.minDeg}deg)`}}></div>
          <div
            className="hand second-hand"
            style={{transform:`rotate(${this.state.secDeg}deg)`}}></div>
        </div>
      </div>
    );
  }
}

export default Clock;
