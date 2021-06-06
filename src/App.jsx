import * as React from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    document.getElementById(
      'screenSize'
    ).innerHTML += `Screen resolution: ${window.screen.width}x${window.screen.height}`;

    navigator.getBattery().then((battery) => {
      document.getElementById(
        'batteryLevel'
      ).innerHTML += `Battery level: ${Math.round(battery.level * 100)}%`;
      document.getElementById(
        'batteryStatus'
      ).innerHTML += `Battery status: ${(battery.charging) ? '' : 'not '} charging`;
    });

    document.getElementById(
      'memory'
    ).innerHTML += `Device memory: ${navigator.deviceMemory}GB`;

    document.getElementById(
      'cores'
    ).innerHTML += `# of CPU cores: ${navigator.hardwareConcurrency}`;
  }, []);

  return (
    <div className="App">
      <div className="title">Hardware</div>
      <div className="item" id="screenSize" />
      <div className="item" id="batteryLevel" />
      <div className="item" id="batteryStatus" />
      <div className="item" id="memory" />
      <div className="item" id="cores" />
    </div>
  );
};

export default App;
