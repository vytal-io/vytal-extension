const getReverseGeocoding = (lat: number, lon: number) =>
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`
  )
    .then((response) => response.json())
    .then((data) => {
      // chrome.storage.local.set({ ipData })
      console.log(data)
      return data.features[0].properties.address
    })

export default getReverseGeocoding
