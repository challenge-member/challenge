import React from 'react';
import './Card.css';

    class Card extends React.Component {


      handleOnclick = () => {
            if (this.props.name !== "出勤" && this.props.name !== "退勤") {
              return
            }
            fetch('http://localhost:3010/api/attendances', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({status: this.props.name})
            })

            .then(response => {
          	  return response.json()
          })
            .then(data => {
              this.props.addToAttendances(data)
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