import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <>
        <li className="card-container">
          <img src={this.props.state} alt="" className="state-img" />
          <img src={this.props.image} alt="" className="card-img" />
          <p className="card-name">{this.props.name}</p>
        </li>
      </>
    );
  }
}

export default Card;