import * as React from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    document.getElementById(
      'screenSize'
    ).innerHTML += `Screen resolution: ${window.screen.width}x${window.screen.height}`;
  }, []);

  return (
    <div className="App">
      <div className="title">Hardware</div>
      <div className="item" id="screenSize" />
    </div>
  );
};

export default App;
