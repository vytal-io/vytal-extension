import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
  chrome.storage.sync.set({ [el.target.id]: el.target.checked });
  console.log(el.target.id);
};

// function getChecked(elID: string): boolean {
//   // console.log(elID);
//   chrome.storage.sync.get('oldRedirect', (res) => {
//     console.log(res.oldRedirect + '123');
//   });
//   console.log('?');
//   return true;
// }

const App = () => {
  useEffect(() => {
    chrome.storage.sync.get(null, (res) => {
      const allKeys = Object.entries(res);
      console.log(allKeys);
      allKeys.forEach((item) => {
        console.log(item);
        const test: any = document.getElementById(item[0]);
        test.checked = item[1];
      });
    });
  }, []);

  return (
    <div className="App">
      <label>
        <div className="optionWrap">
          <input
            type="checkbox"
            id="oldRedirect"
            onChange={handleChange}
          />
          Redirect to old Reddit
        </div>
      </label>
    </div>
  );
};

export default App;
