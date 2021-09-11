/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
// import Bowser from 'bowser';

export {
  getNavigator,
  checkNavigatorProperties,
  checkWebWorker,
  getScreen,
  checkScreenProperties,
  detectTor,
};

const getDeviceMemory = () => ({
  key: 'deviceMemory',
  title: 'Device memory',
  value: navigator.deviceMemory,
  issues: [
    checkNavigatorProperties('deviceMemory'),
    checkNavigatorValue('deviceMemory'),
    checkNavigatorPrototype('deviceMemory'),
  ],
});

const getHardwareConcurrency = () => ({
  key: 'hardwareConcurrency',
  title: 'Hardware Concurrency',
  value: navigator.hardwareConcurrency,
  issues: [
    checkNavigatorProperties('hardwareConcurrency'),
    checkNavigatorValue('hardwareConcurrency'),
    checkNavigatorPrototype('hardwareConcurrency'),
  ],
});

const getMaxTouchPoints = () => ({
  key: 'maxTouchPoints',
  title: 'Max touchpoints',
  value: navigator.maxTouchPoints,
  issues: [
    checkNavigatorProperties('maxTouchPoints'),
    checkNavigatorValue('maxTouchPoints'),
    checkNavigatorPrototype('maxTouchPoints'),
  ],
});

const getPlatform = () => ({
  key: 'platform',
  title: 'Platform',
  value: navigator.platform,
  issues: [
    checkNavigatorProperties('platform'),
    checkNavigatorValue('platform'),
    checkNavigatorPrototype('platform'),
  ],
});

const getUserAgent = () => ({
  key: 'userAgent',
  title: 'User agent',
  value: navigator.userAgent,
  issues: [
    checkNavigatorProperties('userAgent'),
    checkNavigatorValue('userAgent'),
    checkNavigatorPrototype('userAgent'),
  ],
});

const getLanguage = () => ({
  key: 'language',
  title: 'Language',
  value: navigator.language,
  issues: [
    checkNavigatorProperties('language'),
    checkNavigatorValue('language'),
    checkNavigatorPrototype('language'),
  ],
});

const getLanguages = () => ({
  key: 'languages',
  title: 'Languages',
  value: navigator.languages,
  issues: [
    checkNavigatorProperties('languages'),
    checkNavigatorValue('languages'),
    checkNavigatorPrototype('languages'),
  ],
});

const getCookieEnabled = () => ({
  key: 'cookieEnabled',
  title: 'Cookies enabled',
  value: navigator.cookieEnabled ? 'True' : 'False',
  issues: [
    checkNavigatorProperties('cookieEnabled'),
    checkNavigatorValue('cookieEnabled'),
    checkNavigatorPrototype('cookieEnabled'),
  ],
});

const getDoNotTrack = () => ({
  key: 'doNotTrack',
  title: 'Do not track header',
  value: navigator.doNotTrack ? 'True' : 'False',
  issues: [
    checkNavigatorProperties('doNotTrack'),
    checkNavigatorValue('doNotTrack'),
    checkNavigatorPrototype('doNotTrack'),
  ],
});

const getWebDriver = () => ({
  key: 'webdriver',
  title: 'Webdriver',
  value: navigator.webdriver ? 'True' : 'False',
  issues: [
    checkNavigatorProperties('webdriver'),
    checkNavigatorValue('webdriver'),
    checkNavigatorPrototype('webdriver'),
  ],
});

const getPlugins = () => ({
  key: 'plugins',
  title: 'Plugins',
  value: sortPlugins(navigator.plugins),
  issues: [
    checkNavigatorProperties('plugins'),
    checkNavigatorValue('plugins'),
    checkNavigatorPrototype('plugins'),
  ],
});

const getVendor = () => ({
  key: 'vendor',
  title: 'Vendor',
  value: navigator.vendor,
  issues: [
    checkNavigatorProperties('vendor'),
    checkNavigatorValue('vendor'),
    checkNavigatorPrototype('vendor'),
  ],
});

const getAppVersion = () => ({
  key: 'appVersion',
  title: 'App Version',
  value: navigator.appVersion,
  issues: [
    checkNavigatorProperties('appVersion'),
    checkNavigatorValue('appVersion'),
    checkNavigatorPrototype('appVersion'),
  ],
});

const getProductSub = () => ({
  key: 'productSub',
  title: 'Product sub',
  value: navigator.productSub,
  issues: [
    checkNavigatorProperties('productSub'),
    checkNavigatorValue('productSub'),
    checkNavigatorPrototype('productSub'),
  ],
});

const getWidth = () => ({
  key: 'width',
  title: 'Width',
  value: window.screen.width,
  issues: [
    checkScreenProperties('width'),
    checkScreenValue('width'),
    checkScreenPrototype('width'),
    checkWidth(),
  ],
});

const getOuterWidth = () => ({
  key: 'outerWidth',
  title: 'Outer width',
  value: window.outerWidth,
  // issues: checkWindowProperties('outerWidth'),
  issues: [],
});

const getAvailWidth = () => ({
  key: 'availWidth',
  title: 'Avail width',
  value: window.screen.availWidth,
  issues: [
    checkScreenProperties('availWidth'),
    checkScreenValue('availWidth'),
    checkScreenPrototype('availWidth'),
    checkWidth(),
  ],
});

const getHeight = () => ({
  key: 'height',
  title: 'Height',
  value: window.screen.height,
  issues: [
    checkScreenProperties('height'),
    checkScreenValue('height'),
    checkScreenPrototype('height'),
  ],
});

const getOuterHeight = () => ({
  key: 'outerHeight',
  title: 'Outer height',
  value: window.outerHeight,
  // issues: checkWindowProperties('outerHeight'),
  issues: [],
});

const getAvailHeight = () => ({
  key: 'availHeight',
  title: 'Avail height',
  value: window.screen.availHeight,
  issues: [
    checkScreenProperties('availHeight'),
    checkScreenValue('availHeight'),
    checkScreenPrototype('availHeight'),
    checkHeight(),
  ],
});

const getPixelDepth = () => ({
  key: 'pixelDepth',
  title: 'Pixel depth',
  value: window.screen.pixelDepth,
  issues: [
    checkScreenProperties('pixelDepth'),
    checkScreenValue('pixelDepth'),
    checkScreenPrototype('pixelDepth'),
  ],
});

const getColorDepth = () => ({
  key: 'colorDepth',
  title: 'Color depth',
  value: window.screen.colorDepth,
  issues: [
    checkScreenProperties('colorDepth'),
    checkScreenValue('colorDepth'),
    checkScreenPrototype('colorDepth'),
  ],
});

const getNavigator = () => [
  getDeviceMemory(),
  getHardwareConcurrency(),
  getMaxTouchPoints(),
  getPlatform(),
  getUserAgent(),
  getLanguage(),
  getLanguages(),
  getCookieEnabled(),
  getDoNotTrack(),
  getWebDriver(),
  getPlugins(),
  getVendor(),
  getAppVersion(),
  getProductSub(),
];

const getScreen = () => [
  getWidth(),
  getAvailWidth(),
  getOuterWidth(),
  getHeight(),
  getAvailHeight(),
  getOuterHeight(),
  getPixelDepth(),
  getColorDepth(),
];

const detectTor = () => {
  const date = new Date();
  if (
    navigator.plugins.length === 0 &&
    date.getTimezoneOffset() === 0 &&
    window.outerWidth === window.screen.availWidth &&
    window.outerHeight === window.screen.availHeight
  ) {
    return true;
  }
  return false;
};

// const getTor = () => ({
//   key: 'tor',
//   title: 'Tor browser',
//   value: detectTor() ? 'True' : 'False',
//   issues: [],
// });

// const getAdblock = () => ({
//   key: 'adblock',
//   title: 'Adblock',
//   value: Promise.resolve(detectAdblock()),
//   issues: [],
// });

// const detectAdblock = () =>
//   fetch('https://www3.doubleclick.net', {
//     method: 'HEAD',
//     mode: 'no-cors',
//     cache: 'no-store',
//   });

// const getOther = () => [getBrave(), getTor(), getAdblock()];

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
  if (
    Object.getOwnPropertyDescriptor(Navigator.prototype, key).value !==
    undefined
  ) {
    return 'Failed descriptor.value undefined';
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

const checkScreenProperties = (key) => {
  if (Object.getOwnPropertyDescriptor(window.screen, key) !== undefined) {
    return 'Failed undefined properties';
  }
  return null;
};

const checkScreenValue = (key) => {
  if (
    Object.getOwnPropertyDescriptor(Screen.prototype, key).value !== undefined
  ) {
    return 'Failed descriptor.value undefined';
  }
  return null;
};

const checkScreenPrototype = (key) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Screen.prototype[key];
    return 'Failed Navigator.prototype';
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  return null;
};

const checkWidth = () => {
  if (window.screen.availWidth > window.screen.width) {
    return 'Avail width is wider then width';
  }
  return null;
};

const checkHeight = () => {
  if (window.screen.availHeight > window.screen.height) {
    return 'Avail height is wider then height';
  }
  return null;
};

const checkWebWorker = (key, setWorkerData) => {
  let w;
  if (typeof w === 'undefined') {
    w = new Worker('/worker.js');
  }
  w.postMessage(key);
  w.onmessage = (event) => {
    if (
      event.data !== undefined &&
      event.data.toString() !== navigator[key].toString()
    ) {
      setWorkerData(event.data.toString());
    }
  };
};
