/* eslint-disable dot-notation */
export {
  getNavigator,
  checkNavigatorProperties,
  checkWebWorker,
  getScreen,
  checkScreenProperties,
};

const getDeviceMemory = () => ({
  key: 'deviceMemory',
  title: 'Device memory',
  value: navigator.deviceMemory,
  issues: checkNavigatorProperties('deviceMemory'),
});

const getHardwareConcurrency = () => ({
  key: 'hardwareConcurrency',
  title: 'Hardware Concurrency',
  value: navigator.hardwareConcurrency,
  issues: checkNavigatorProperties('hardwareConcurrency'),
});

const getMaxTouchPoints = () => ({
  key: 'maxTouchPoints',
  title: 'Max touchpoints',
  value: navigator.maxTouchPoints,
  issues: checkNavigatorProperties('maxTouchPoints'),
});

const getPlatform = () => ({
  key: 'platform',
  title: 'Platform',
  value: navigator.platform,
  issues: checkNavigatorProperties('platform'),
});

const getUserAgent = () => ({
  key: 'userAgent',
  title: 'User agent',
  value: navigator.userAgent,
  issues: checkNavigatorProperties('userAgent'),
});

const getLanguage = () => ({
  key: 'language',
  title: 'Language',
  value: navigator.language,
  issues: checkNavigatorProperties('language'),
});

const getLanguages = () => ({
  key: 'languages',
  title: 'Languages',
  value: navigator.languages,
  issues: checkNavigatorProperties('languages'),
});

const getCookieEnabled = () => ({
  key: 'cookieEnabled',
  title: 'Cookies enabled',
  value: navigator.cookieEnabled ? 'True' : 'False',
  issues: checkNavigatorProperties('cookieEnabled'),
});

const getDoNotTrack = () => ({
  key: 'doNotTrack',
  title: 'Do not track header',
  value: navigator.doNotTrack ? 'True' : 'False',
  issues: checkNavigatorProperties('doNotTrack'),
});

const getWebDriver = () => ({
  key: 'webdriver',
  title: 'Webdriver',
  value: navigator.webdriver ? 'True' : 'False',
  issues: checkNavigatorProperties('webdriver'),
});

const getPlugins = () => ({
  key: 'plugins',
  title: 'Plugins',
  value: sortPlugins(navigator.plugins),
  issues: checkNavigatorProperties('plugins'),
});

const getVendor = () => ({
  key: 'vendor',
  title: 'Vendor',
  value: navigator.vendor,
  issues: checkNavigatorProperties('vendor'),
});

const getAppVersion = () => ({
  key: 'appVersion',
  title: 'App Version',
  value: navigator.appVersion,
  issues: checkNavigatorProperties('appVersion'),
});

const getProductSub = () => ({
  key: 'productSub',
  title: 'Product sub',
  value: navigator.productSub,
  issues: checkNavigatorProperties('productSub'),
});

const getWidth = () => ({
  key: 'width',
  title: 'Width',
  value: window.screen.width,
  issues: checkScreenProperties('width') + checkWidth(),
});

const getOuterWidth = () => ({
  key: 'outerWidth',
  title: 'Outer width',
  value: window.outerWidth,
  // issues: checkWindowProperties('outerWidth'),
  issues: '',
});

const getAvailWidth = () => ({
  key: 'availWidth',
  title: 'Avail width',
  value: window.screen.availWidth,
  issues: checkScreenProperties('availWidth') + checkWidth(),
});

const getHeight = () => ({
  key: 'height',
  title: 'Height',
  value: window.screen.height,
  issues: checkScreenProperties('height'),
});

const getOuterHeight = () => ({
  key: 'outerHeight',
  title: 'Outer height',
  value: window.outerHeight,
  // issues: checkWindowProperties('outerHeight'),
  issues: '',
});

const getAvailHeight = () => ({
  key: 'availHeight',
  title: 'Avail height',
  value: window.screen.availHeight,
  issues: checkScreenProperties('availHeight'),
});

const getPixelDepth = () => ({
  key: 'pixelDepth',
  title: 'Pixel depth',
  value: window.screen.pixelDepth,
  issues: checkScreenProperties('pixelDepth'),
});

const getColorDepth = () => ({
  key: 'colorDepth',
  title: 'Color depth',
  value: window.screen.colorDepth,
  issues: checkScreenProperties('colorDepth'),
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
  const list = [];
  if (Object.getOwnPropertyDescriptor(navigator, key) !== undefined) {
    list.push('Failed undefined properties');
  }
  if (
    Object.getOwnPropertyDescriptor(Navigator.prototype, key).value !==
    undefined
  ) {
    list.push('Failed descriptor.value undefined');
  }
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[key];
    list.push('Failed Navigator.prototype');
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  return list.toString().split(',').join('<br />');
};

const checkScreenProperties = (key) => {
  const list = [];
  if (Object.getOwnPropertyDescriptor(window.screen, key) !== undefined) {
    list.push('Failed undefined properties');
  }
  if (
    Object.getOwnPropertyDescriptor(Screen.prototype, key).value !== undefined
  ) {
    list.push('Failed descriptor.value undefined');
  }
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Screen.prototype[key];
    list.push('Failed Navigator.prototype');
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }

  return list.toString().split(',').join('<br />');
};

// const checkWindowProperties = (key) => {
//   const list = [];
//   if (
//     Object.getOwnPropertyDescriptor(Window.prototype, key).value !== undefined
//   ) {
//     list.push('Failed descriptor.value undefined');
//   }
//   // try {
//   //   // eslint-disable-next-line no-unused-vars
//   //   const check = Window.prototype[key];
//   //   list.push('Failed Navigator.prototype');
//   // } catch (err) {
//   //   // eslint-disable-next-line no-unused-vars
//   //   const check = '';
//   // }

//   return list.toString().split(',').join('<br />');
// };

const checkWidth = () => {
  if (window.screen.availWidth > window.screen.width) {
    return '<br />Avail width is wider then width';
  }
  return '';
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
      setWorkerData(
        `<br />Did not match web worker (${event.data.toString()})`
      );
    }
  };
};
