import React from 'react';
import './Popup.css';

const getIP = () => fetch('http://ip-api.com/json/')
.then((response) => response.json())
.then((ipData) => {
  chrome.storage.sync.set({ ipData });
});


const Popup = () => {
  return (
    <div className="App">
      <button type="button" onClick={() => getIP()}>Click Me!</button>
    </div>
  );
};

export default Popup;
