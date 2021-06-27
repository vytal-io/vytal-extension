chrome.storage.sync.get('sendData', ({ sendData }) => {
  document.getElementById('sendData').checked = sendData;
});

window.onchange = function change(event) {
  if (event.target.matches('#sendData')) {
    chrome.storage.sync.get('sendData', ({ sendData }) => {
      const value = !sendData;
      chrome.storage.sync.set({ sendData: value });
    });
  }
};
