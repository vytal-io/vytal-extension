import md5 from 'crypto-js/md5';
import Bowser from 'bowser';
import axios from 'axios';

export {
  getLocation,
  getSoftware,
  getHardware,
  getWebGL,
  getBattery,
  getFingerprint,
  getHash,
  getName,
  handleSave,
};

const getLocation = (locationData) => {
  const data = [
    {
      key: 'country',
      title: 'Country',
      value: locationData.country,
    },
    {
      key: 'regionName',
      title: 'Region',
      value: locationData.regionName,
    },
    {
      key: 'lat',
      title: 'City',
      value: locationData.city,
    },
    {
      key: 'zip',
      title: 'Zip code',
      value: locationData.zip,
    },
    {
      key: 'lat',
      title: 'Latitude',
      value: locationData.lat,
    },
    {
      key: 'lon',
      title: 'Longitude',
      value: locationData.lon,
    },
  ];
  return data;
};

const getHardware = () => {
  const data = [
    {
      key: 'screenResolution',
      title: 'Screen resolution',
      value: `${window.screen.width}x${window.screen.height}`,
    },
    {
      key: 'colorResolution',
      title: 'Color Resolution',
      value: window.screen.colorDepth,
    },
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
    },
    {
      key: 'cpuCores',
      title: '# of CPU cores',
      value: navigator.hardwareConcurrency || 'N/A',
    },
    {
      key: 'maxTouchpoints',
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints || 0,
    },
  ];
  return data;
};

const getBattery = async () => {
  let level, status;
  if ('getBattery' in navigator) {
    await navigator.getBattery().then((res) => {
      level = `${Math.round(res.level * 100)}%`;
      status = res.charging ? 'Charging' : 'Not charging';
    });
  } else {
    level = 'N/A';
    status = 'N/A';
  }
  const data = [
    {
      key: 'batteryLevel',
      title: 'Battery level',
      value: level,
    },
    {
      key: 'batteryStatus',
      title: 'Battery status',
      value: status,
    },
  ];
  return data;
};

const getWebGL = () => {
  const gl = document.createElement('canvas').getContext('webgl');
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const data = [
    {
      key: 'webGLVendor',
      title: 'WebGL vendor',
      value: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
    },
    {
      key: 'webglRenderer',
      title: 'WebGL renderer',
      value: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
    },
  ];
  return data;
};

const getSoftware = () => {
  const uaResult = Bowser.parse(navigator.userAgent);
  const date = new Date();
  const data = [
    {
      key: 'browser',
      title: 'Browser',
      value: uaResult.browser.name,
    },
    {
      key: 'browserVersion',
      title: 'Browser version',
      value: uaResult.browser.version,
    },
    {
      key: 'browserEngine',
      title: 'Browser engine',
      value: uaResult.browser.engine || 'N/A',
    },
    {
      key: 'os',
      title: 'OS',
      value: `${uaResult.os.name} ${uaResult.os.versionName}`,
    },
    {
      key: 'osVersion',
      title: 'OS version',
      value: uaResult.os.version,
    },
    {
      key: 'platform',
      title: 'Platform',
      value: navigator.platform,
    },
    {
      key: 'systemType',
      title: 'System type',
      value: uaResult.platform.type,
    },
    {
      key: 'userAgent',
      title: 'User agent',
      value: navigator.userAgent || 'N/A',
    },
    {
      key: 'preferredLanguage',
      title: 'Preferred language',
      value: navigator.language || 'N/A',
    },
    {
      key: 'languages',
      title: 'Languages',
      value: sortArr(navigator.languages) || 'N/A',
    },
    {
      key: 'timezone',
      title: 'Timezone',
      value: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
    },
    {
      key: 'timezoneOffset',
      title: 'Timezone offset',
      value: date.getTimezoneOffset() || 'N/A',
    },
    {
      key: 'cookiesEnabled',
      title: 'Cookies enabled',
      value: navigator.cookieEnabled ? 'True' : 'False',
    },
    {
      key: 'javaEnabled',
      title: 'Java enabled',
      value: navigator.javaEnabled() ? 'True' : 'False',
    },
    {
      key: 'dntHeader',
      title: 'DNT header enabled',
      value: navigator.doNotTrack ? 'True' : 'False',
    },
    {
      key: 'automatedBrowser',
      title: 'Automated browser',
      value: navigator.webdriver ? 'True' : 'False',
    },
    {
      key: 'plugins',
      title: 'Plugins',
      value: sortPlugins(navigator.plugins) || 'N/A',
    },
  ];
  return data;
};

// sorts array into comma separated list
const sortArr = (arr) => {
  const arrLength = arr.length;
  let list = '';
  for (let i = 0; i < arrLength; i++) {
    if (i !== 0) list += ', ';
    list += arr[i];
  }
  return list;
};

// sorts plugins object into comma separated list
const sortPlugins = (data) => {
  const { length } = data;

  let list = '';
  for (let i = 0; i < length; i++) {
    if (i !== 0) list += ', ';
    list += data[i].name;
  }
  return list;
};

const getFingerprint = (name, hash) => {
  const data = [
    {
      key: 'name',
      title: 'Name',
      value: name,
    },
    {
      key: 'hash',
      title: 'Hash',
      value: hash,
    },
  ];
  return data;
};

const getHash = (data) => md5(JSON.stringify(data)).toString();

const getName = (hash, setName) => {
  axios
    .get(`https://api.vytal.io/fingerprint/?hash=${hash}`)
    .then((response) => {
      if (response.data.length !== 0) {
        setName(response.data[response.data.length - 1].name);
      }
    });
};

const handleSave = (e, hash, setSaved) => {
  e.preventDefault();
  axios.post('https://api.vytal.io/fingerprint/', {
    name: e.target[0].value,
    hash,
  });
  setSaved(true);
};
