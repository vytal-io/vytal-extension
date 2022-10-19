const getIp = () =>
  fetch(
    'http://ip-api.com/json?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,proxy,query'
  )
    .then((response) => response.json())
    .then((ipData) => {
      console.log(ipData)
      chrome.storage.local.set({ ipData })
      return ipData
    })

export default getIp
