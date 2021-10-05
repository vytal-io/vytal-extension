// Gets location values
const fetchAPI = (setData) => {
  fetch('https://api.vytal.io/ip/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
};

const checkWebWorker = (key, worker) => {
  if (`${key}` !== `${worker}`) {
    return `Did not match web worker (${worker})`;
  }
  return null;
};

const getWebWorker = () => {
  let w;
  if (typeof w === 'undefined') {
    w = new Worker('worker.js');
  }
  return w;
};

export { fetchAPI, checkWebWorker, getWebWorker };
