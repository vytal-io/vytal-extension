export { fetchAPI, getWebWorker };

// Gets location values
const fetchAPI = (setData) => {
  fetch('https://api.vytal.io/ip/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
};

const getWebWorker = () => {
  let w;
  if (typeof w === 'undefined') {
    w = new Worker('worker.js');
  }
  return w;
};
