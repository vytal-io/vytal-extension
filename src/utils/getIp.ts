const getIp = () =>
  fetch('http://ip-api.com/json/')
    .then((response) => response.json())
    .then((ipData) => {
      console.log(ipData)
      chrome.storage.local.set({ ipData })
      return ipData
    })

export default getIp
