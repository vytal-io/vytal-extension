import * as React from 'react';
import { useEffect } from 'react';
import './App.css';

const updateDOM = (id, text) => {
  document.getElementById(id).innerHTML += text;
};

const App = () => {
  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        updateDOM('ipAddress', data.query);
        updateDOM('country', data.country);
        updateDOM('region', data.regionName);
        updateDOM('city', data.city);
        updateDOM('provider', data.isp);
      });

    updateDOM('screenSize', `${window.screen.width}x${window.screen.height}`);

    navigator.getBattery().then((battery) => {
      updateDOM('batteryLevel', `${Math.round(battery.level * 100)}%`);
      updateDOM('batteryStatus', `${(battery.charging) ? '' : 'not '} charging`);
    });

    updateDOM('memory', `${navigator.deviceMemory}GB`);
    updateDOM('cores', navigator.hardwareConcurrency);
  }, []);

  return (
    <div className="App">
      <div className="title">Connection</div>
      <div className="item" id="ipAddress">IP address: </div>
      <div className="item" id="country">Country: </div>
      <div className="item" id="region">Region: </div>
      <div className="item" id="city">City: </div>
      <div className="item" id="provider">Provider: </div>
      <div className="title">Hardware</div>
      <div className="item" id="screenSize">Screen resolution: </div>
      <div className="item" id="batteryLevel">Battery level: </div>
      <div className="item" id="batteryStatus">Battery status: </div>
      <div className="item" id="memory">Device memory: </div>
      <div className="item" id="cores"># of CPU cores: </div>
    </div>
  );
};

export default App;
