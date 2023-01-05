import React from 'react';
import './Action.css';

class Action extends React.Component {
  render() {
    return (
      <>
        <div className="action-container">
          <p className="act-ttl">最近の活動</p>
          <div className="actions">
            <p className="act-date">Action dates</p>
          </div>
        </div>
      </>
    );
  }
}

export default Action;