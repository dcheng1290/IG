import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 50 }}>
          {this.props.value}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
