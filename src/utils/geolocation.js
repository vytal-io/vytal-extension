const getGeolocation = (setGeolocationData) => {
  new Promise((showPosition, showError) => {
    navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true });
  }).then(async (position) => {
    const geocode = await getGeocode(position.coords.latitude, position.coords.longitude);
    setGeolocationData([
      getObj('Latitude', position.coords.latitude),
      getObj('Longitude', position.coords.longitude),
      getObj('Accuracy', position.coords.accuracy),
      getObj('Altitude', position.coords.altitude),
      getObj('Altitude accuracy', position.coords.altitudeAccuracy),
      getObj('Heading', position.coords.heading),
      getObj('Speed', position.coords.speed),
      getObj('Reverse geocoding', geocode),
    ]);
  })
    .catch((e) => setGeolocationData(e.message));
};

const getGeocode = (lat, long) => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyByyRWGncal9iAq1-3Ek2WQ3ROLw9bCS-8`)
  .then((response) => response.json())
  .then((data) => data.results[0].formatted_address);

const getObj = (key, value) => ({
  key,
  value,
  issues: [],
});

export default getGeolocation;
