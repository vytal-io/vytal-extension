/* eslint-disable import/prefer-default-export */
onmessage = (e) => {
  console.log(e.data, navigator[e.data]);
  postMessage(navigator[e.data]);
};
