import React from 'react';
import './Time.css';

class Time extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.class}>
          <h2 className="time-name">{this.props.name}</h2>
          <p className="time-date">{this.props.time}</p>
        </div>
      </>
    );
  }
}

export default Time;