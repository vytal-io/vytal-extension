export { getMap, getConnection, getLocation };

const getMap = (data) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${data.lat},${data.lon}&markers=color:red%7Clabel:%7C${data.lat},${data.lon}&size=500x200&zoom=10&key=AIzaSyB-YN-X8PGBSPd7NOaQu4csVhgJUnF3ZGk`;

const compareTimeZone = (locationTimeZone, workerTimeZone) => {
  if (locationTimeZone !== workerTimeZone) {
    return "Location data doesn't match system data";
  }
  return null;
};

const checkProxy = (proxy) => {
  if (proxy) {
    return 'VPN/proxy has been detected';
  }
  return null;
};

// Returns object with location data
const getLocation = (data, workerData) => {
  const timeZoneIssue = compareTimeZone(data.timezone, workerData.timeZone);
  const isProxy = checkProxy(data.proxy);
  return [
    {
      key: 'Country',
      value: data.country,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'Region',
      value: data.regionName,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'City',
      value: data.city,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'Time zone',
      value: data.timezone,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'Zip code',
      value: data.zip,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'Latitude',
      value: data.lat,
      issues: [timeZoneIssue, isProxy],
    },
    {
      key: 'Longitude',
      value: data.lon,
      issues: [timeZoneIssue, isProxy],
    },
  ];
};

// Returns object with location data
const getConnection = (data) => {
  const isProxy = checkProxy(data.proxy);
  return [
    {
      key: 'IP address',
      value: data.query,
      issues: [isProxy],
    },
    {
      key: 'ISP',
      value: data.isp,
      issues: [isProxy],
    },
    {
      key: 'Org',
      value: data.org,
      issues: [isProxy],
    },
    {
      key: 'ASN',
      value: data.as,
      issues: [isProxy],
    },
  ];
};
