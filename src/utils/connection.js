export { fetchAPI, getConnection };

// Gets connection values
const fetchAPI = (setData) => {
  fetch('https://api.locatejs.com/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
};

// Returns object with connection data
const getConnection = (connectionData) => {
  const isProxy = checkProxy(connectionData);
  return [
    {
      key: 'IP address',
      value: connectionData.query,
      issues: isProxy,
    },
    {
      key: 'Country',
      value: connectionData.country,
      issues: isProxy,
    },
    {
      key: 'Region',
      value: connectionData.regionName,
      issues: isProxy,
    },
    {
      key: 'City',
      value: connectionData.city,
      issues: isProxy,
    },
    {
      key: 'Time zone',
      value: connectionData.timezone,
      issues: isProxy,
    },
    {
      key: 'Latitude',
      value: connectionData.lat,
      issues: isProxy,
    },
    {
      key: 'Longitude',
      value: connectionData.lon,
      issues: isProxy,
    },
    {
      key: 'ISP',
      value: connectionData.isp,
      issues: isProxy,
    },
    {
      key: 'Org',
      value: connectionData.org,
      issues: isProxy,
    },
    {
      key: 'ASN',
      value: connectionData.as,
      issues: isProxy,
    },
  ];
};

const checkProxy = (data) => {
  const issues = [];
  if (data.security.vpn) {
    issues.push('VPN has been detected');
  }
  if (data.security.proxy) {
    issues.push('Proxy has been detected');
  }
  if (data.security.tor) {
    issues.push('Tor node has been detected');
  }
  if (data.security.relay) {
    issues.push('Private relay has been detected');
  }
  if (issues.length === 0 && data.proxy) {
    issues.push('VPN/proxy has been detected');
  }
  return issues;
};
