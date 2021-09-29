import { checkWebWorker } from './common';

const getDeviceMemory = (key, worker) => ({
  key,
  value: navigator[key],
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getHardwareConcurrency = (key, worker) => ({
  key,
  value: navigator.hardwareConcurrency,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getMaxTouchPoints = (key) => ({
  key,
  value: navigator.maxTouchPoints,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getPlatform = (key, worker) => ({
  key,
  value: navigator.platform,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getUserAgent = (key, worker) => ({
  key,
  value: navigator.userAgent,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getAppVersion = (key, worker) => ({
  key,
  value: navigator.appVersion,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getLanguage = (key, worker) => ({
  key,
  value: navigator.language,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getLanguages = (key, worker) => ({
  key,
  value: navigator.languages,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
    checkWebWorker(navigator[key], worker),
  ],
});

const getCookieEnabled = (key) => ({
  key,
  value: navigator.cookieEnabled ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getDoNotTrack = (key) => ({
  key,
  value: navigator.doNotTrack ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getWebDriver = (key) => ({
  key,
  value: navigator.webdriver ? 'True' : 'False',
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getPlugins = (key) => ({
  key,
  value: sortPlugins(navigator.plugins),
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

const getVendor = (key) => ({
  key,
  value: navigator.vendor,
  issues: [
    checkNavigatorProperties(key),
    checkNavigatorValue(key),
    checkNavigatorPrototype(key),
  ],
});

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
    return 'Failed Navigator.prototype';
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
  getLanguages('languages', workerData.languages),
  getCookieEnabled('cookieEnabled'),
  getDoNotTrack('doNotTrack'),
  getWebDriver('webdriver'),
  getPlugins('plugins'),
  getVendor('vendor'),
];

export default getNavigator;
