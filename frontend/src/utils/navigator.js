import { checkWebWorker } from './common';

const getDeviceMemory = (worker) => {
  const name = 'deviceMemory';
  return {
    key: 'Device memory',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getHardwareConcurrency = (worker) => {
  const name = 'hardwareConcurrency';
  return {
    key: 'Hardware concurrency',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getMaxTouchPoints = () => {
  const name = 'maxTouchPoints';
  return {
    key: 'Max touch points',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getPlatform = (worker) => {
  const name = 'platform';
  return {
    key: 'Platform',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getUserAgent = (worker) => {
  const name = 'userAgent';
  return {
    key: 'User agent',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getAppVersion = (worker) => {
  const name = 'appVersion';
  return {
    key: 'App version',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getLanguage = (worker) => {
  const name = 'language';
  return {
    key: 'Language',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
      checkWebWorker(navigator[name], worker),
    ],
  };
};

const getLanguages = () => {
  const name = 'languages';
  return {
    key: 'Languages',
    code: `navigator.${name}`,
    value: sortArr(navigator[name]),
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getCookieEnabled = () => {
  const name = 'cookieEnabled';
  return {
    key: 'Cookie enabled',
    code: `navigator.${name}`,
    value: navigator[name] ? 'True' : 'False',
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getDoNotTrack = () => {
  const name = 'doNotTrack';
  return {
    key: 'Do not track',
    code: `navigator.${name}`,
    value: navigator[name] ? 'True' : 'False',
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getWebDriver = () => {
  const name = 'webdriver';
  return {
    key: 'Web driver',
    code: `navigator.${name}`,
    value: navigator[name] ? 'True' : 'False',
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getPlugins = () => {
  const name = 'plugins';
  return {
    key: 'Plugins',
    code: `navigator.${name}`,
    value: sortPlugins(navigator[name]),
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
};

const getVendor = () => {
  const name = 'vendor';
  return {
    key: 'Vendor',
    code: `navigator.${name}`,
    value: navigator[name],
    issues: [
      checkNavigatorProperties(name),
      checkNavigatorValue(name),
      checkNavigatorPrototype(name),
    ],
  };
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

const checkNavigatorProperties = (name) => {
  if (Object.getOwnPropertyDescriptor(navigator, name) !== undefined) {
    return 'Failed undefined properties';
  }
  return null;
};

const checkNavigatorValue = (name) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { value } = Object.getOwnPropertyDescriptor(
      Navigator.prototype,
      name
    );
  } catch (err) {
    return 'Failed Navigator property value';
  }
  return null;
};

const checkNavigatorPrototype = (name) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[name];
    return 'Failed Navigator.prototype';
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  return null;
};

const getNavigator = (workerData) => [
  getDeviceMemory(workerData.deviceMemory),
  getHardwareConcurrency(workerData.hardwareConcurrency),
  getMaxTouchPoints(),
  getPlatform(workerData.platform),
  getUserAgent(workerData.userAgent),
  getAppVersion(workerData.appVersion),
  getLanguage(workerData.language),
  getLanguages(),
  getCookieEnabled(),
  getDoNotTrack(),
  getWebDriver(),
  getPlugins(),
  getVendor(),
];

export default getNavigator;
