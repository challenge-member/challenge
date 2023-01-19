import './App.css';
import React from 'react';
import Main from './main/Main.js';

function App() {
    return (
      <>
        <div className="app">
          <div className="navbar">navbar</div>
          <div className="main">
            <Main />
          </div>
          <div className="datetime">datetime</div>
        </div>
      </>
   );
}

export default App;


