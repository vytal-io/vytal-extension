const getIP = () =>
  fetch('http://ip-api.com/json/')
    .then((response) => response.json())
    .then((ipData) => {
      chrome.storage.sync.set({ ipData })
      return ipData
    })

export default getIP
