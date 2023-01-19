import React from 'react';
import './Time.css';
import Label from './Label';
import Detail from '../image/Detail.png';

class Time extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.class}>
          {(this.props.class === "time time3") && (
            <Label 
            detail="詳細"
            classdt="dt"
            img= {Detail}
            />
          )}
          
          <h2 className="time-name">{this.props.name}</h2>
          <p className="time-date">{this.props.time}</p>
        </div>
      </>
    );
  }
}

export default Time;