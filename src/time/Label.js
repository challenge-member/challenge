import React from 'react';
import './Label.css';

class Label extends React.Component {
  render() {
    return (
      <div className={this.props.classdt}>
        <img src={this.props.img} alt="" className="dt-img" />
        <p className="detail">{this.props.detail}</p>
      </div>
    );
  }
}

export default Label;