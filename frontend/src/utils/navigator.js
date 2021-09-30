import { checkWebWorker } from './common';

const getDeviceMemory = (key, worker) => ({
  key: 'Device memory',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getHardwareConcurrency = (key, worker) => ({
  key: 'Hardware concurrency',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getMaxTouchPoints = (key) => ({
  key: 'Max touch points',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getPlatform = (key, worker) => ({
  key: 'Platform',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getUserAgent = (key, worker) => ({
  key: 'User agent',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getAppVersion = (key, worker) => ({
  key: 'App version',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getLanguage = (key, worker) => ({
  key: 'Language',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getLanguages = (key) => ({
  key: 'Languages',
  code: `navigator.${key}`,
  value: sortArr(navigator[key]),
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getCookieEnabled = (key) => ({
  key: 'Cookie enabled',
  code: `navigator.${key}`,
  value: navigator[key] ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getDoNotTrack = (key) => ({
  key: 'Do not track',
  code: `navigator.${key}`,
  value: navigator[key] ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getWebDriver = (key) => ({
  key: 'Web driver',
  code: `navigator.${key}`,
  value: navigator[key] ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getPlugins = (key) => ({
  key: 'Plugins',
  code: `navigator.${key}`,
  value: sortPlugins(navigator[key]),
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getVendor = (key) => ({
  key: 'Vendor',
  code: `navigator.${key}`,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

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

const checkNavigatorProperties = (key) => {
  if (Object.getOwnPropertyDescriptor(navigator, key) !== undefined) {
    return 'Failed undefined properties';
  }
  return null;
};

const checkNavigatorValue = (key) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { value } = Object.getOwnPropertyDescriptor(Navigator.prototype, key);
  } catch (err) {
    return 'Failed Navigator value';
  }
  return null;
};

const checkNavigatorPrototype = (key) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[key];
    return 'Failed Navigator.prototype';
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  return null;
};

const getNavigator = (workerData) => [
  getDeviceMemory('deviceMemory', workerData.deviceMemory),
  getHardwareConcurrency('hardwareConcurrency', workerData.hardwareConcurrency),
  getMaxTouchPoints('maxTouchPoints'),
  getPlatform('platform', workerData.platform),
  getUserAgent('userAgent', workerData.userAgent),
  getAppVersion('appVersion', workerData.appVersion),
  getLanguage('language', workerData.language),
  getLanguages('languages'),
  getCookieEnabled('cookieEnabled'),
  getDoNotTrack('doNotTrack'),
  getWebDriver('webdriver'),
  getPlugins('plugins'),
  getVendor('vendor'),
];

export default getNavigator;
