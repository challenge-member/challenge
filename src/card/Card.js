import React from 'react';
import './Card.css';

class Card extends React.Component {

  handleOnclick = () => {
      fetch('https://b2dcae86f1e44ec6bfc0846e106152eb.vfs.cloud9.ap-northeast-1.amazonaws.com/attendances', date)

      .then(response => {
    	return response.json()
    })
      .then(data => {
    // 	const p= document.createElement('p')
    // 	p.textContent = date.name
    // 	document.getElementById('test').appendChild('p')
    })
      .catch(error => {
      	console.log(error)
    })
    }
  render() {

    return (
      <>
        <li className="card-container" id="cardclick"
          onClick={this.handleOnclick}>
          <img src={this.props.state} alt="" className="state-img" />
          <img src={this.props.image} alt="" className="card-img" />
          <p className="card-name">{this.props.name}</p>
        </li>
      </>
    );


  }
}

export default Card;