const getGeolocation = (setGeolocationData) => {
  new Promise((showPosition, showError) => {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      enableHighAccuracy: true,
    });
  })
    .then(async (position) => {
      const geocode = await getGeocode(
        position.coords.latitude,
        position.coords.longitude
      );

      const issues = checkIssues();
      console.log(issues);
      console.log(navigator.geolocation.getCurrentPosition);

      setGeolocationData([
        getObj('Latitude', position.coords.latitude, issues),
        getObj('Longitude', position.coords.longitude, issues),
        getObj('Accuracy', position.coords.accuracy, issues),
        getObj('Altitude', position.coords.altitude, issues),
        getObj('Altitude accuracy', position.coords.altitudeAccuracy, issues),
        getObj('Heading', position.coords.heading, issues),
        getObj('Speed', position.coords.speed, issues),
        getObj('Reverse geocoding', geocode, issues),
      ]);
    })
    .catch((e) => setGeolocationData(e.message));
};

const checkIssues = () => {
  console.log(navigator.geolocation.getCurrentPosition.toString());
  if (
    !navigator.geolocation.getCurrentPosition
      .toString()
      .includes('[native code]')
  ) {
    return "Failed navigator.geolocation.getCurrentPosition.toString().includes('[native code]')";
  }
  return null;
};

const getGeocode = (lat, long) =>
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyByyRWGncal9iAq1-3Ek2WQ3ROLw9bCS-8`
  )
    .then((response) => response.json())
    .then((data) => data.results[0].formatted_address);

const getObj = (key, value, issues) => ({
  key,
  value,
  issues: [issues].filter(Boolean),
});

export default getGeolocation;
