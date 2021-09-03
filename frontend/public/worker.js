onmessage = (e) => {
  postMessage(navigator[e.data]);
};
