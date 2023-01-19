import React from 'react';
import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    }
  }
  componentDidMount() {
    setInterval(this.displayGreeting, 1000);
  }

  getCurrentTime = () => new Date();

  displayGreeting = () => {
      const currentDatetime = this.getCurrentTime();
      const currentTime = currentDatetime.getHours()
      if (currentTime < 11) {
      this.setState({greeting: "おはよう"});
    } else if(currentTime < 17) {
      this.setState({greeting: "こんにちは"});
    } else {
      this.setState({greeting: "こんばんは"});
    }
  }

  render() {
    return (
      <p className="title"><span id="greeting">{this.state.greeting}</span>, VO DAI TRINH</p>
    );
  }
}

export default Title;