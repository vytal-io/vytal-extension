/* eslint-disable dot-notation */
export {
  getNavigator,
  checkNavigatorProperties,
  checkWebWorker,
  getScreen,
  checkScreenProperties,
};

const getNavigator = () => {
  const data = [
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory,
      issues: checkNavigatorProperties('deviceMemory'),
    },
    {
      key: 'hardwareConcurrency',
      title: 'Hardware Concurrency',
      value: navigator.hardwareConcurrency,
      issues: checkNavigatorProperties('hardwareConcurrency'),
    },
    {
      key: 'maxTouchPoints',
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints,
      issues: checkNavigatorProperties('maxTouchPoints'),
    },
    {
      key: 'platform',
      title: 'Platform',
      value: navigator.platform,
      issues: checkNavigatorProperties('platform'),
    },
    {
      key: 'userAgent',
      title: 'User agent',
      value: navigator.userAgent,
      issues: checkNavigatorProperties('userAgent'),
    },
    {
      key: 'language',
      title: 'Language',
      value: navigator.userAgent,
      issues: checkNavigatorProperties('userAgent'),
    },
    {
      key: 'languages',
      title: 'Languages',
      value: navigator.languages,
      issues: checkNavigatorProperties('languages'),
    },
    {
      key: 'cookieEnabled',
      title: 'Cookies enabled',
      value: navigator.cookieEnabled ? 'True' : 'False',
      issues: checkNavigatorProperties('cookieEnabled'),
    },
    {
      key: 'doNotTrack',
      title: 'Do not track header',
      value: navigator.doNotTrack ? 'True' : 'False',
      issues: checkNavigatorProperties('doNotTrack'),
    },
    {
      key: 'webdriver',
      title: 'Webdriver',
      value: navigator.webdriver ? 'True' : 'False',
      issues: checkNavigatorProperties('webdriver'),
    },
    {
      key: 'plugins',
      title: 'Plugins',
      value: sortPlugins(navigator.plugins),
      issues: checkNavigatorProperties('plugins'),
    },
    {
      key: 'vendor',
      title: 'Vendor',
      value: navigator.vendor,
      issues: checkNavigatorProperties('vendor'),
    },
    {
      key: 'appVersion',
      title: 'App version',
      value: navigator.appVersion,
      issues: checkNavigatorProperties('appVersion'),
    },
    {
      key: 'productSub',
      title: 'Product sub',
      value: navigator.productSub,
      issues: checkNavigatorProperties('productSub'),
    },
  ];
  return data;
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

const checkWebWorker = (obj, setWorkerData) => {
  let w;
  if (typeof w === 'undefined') {
    w = new Worker('/worker.js');
  }
  w.postMessage(obj.key);
  w.onmessage = (event) => {
    if (
      event.data !== undefined &&
      event.data.toString() !== navigator[obj.key].toString()
    ) {
      setWorkerData('<br />Did not match web worker');
    }
  };
};

const getScreen = () => {
  const data = [
    {
      key: 'width',
      title: 'Width',
      value: window.screen.width,
      issues: checkScreenProperties('width'),
    },
    // {
    //   key: 'outerWidth',
    //   title: 'Outer width',
    //   value: window.outerWidth,
    // },
    {
      key: 'availWidth',
      title: 'Avail width',
      value: window.screen.availWidth,
      issues: checkScreenProperties('availWidth'),
    },
    {
      key: 'height',
      title: 'Height',
      value: window.screen.height,
      issues: checkScreenProperties('height'),
    },
    // {
    //   key: 'outerHeight',
    //   title: 'Outer height',
    //   value: window.outerHeight,
    // },
    {
      key: 'availHeight',
      title: 'Avail height',
      value: window.screen.availHeight,
      issues: checkScreenProperties('availHeight'),
    },
    {
      key: 'pixelDepth',
      title: 'Pixel depth',
      value: window.screen.pixelDepth,
      issues: checkScreenProperties('pixelDepth'),
    },
    {
      key: 'colorDepth',
      title: 'Color depth',
      value: window.screen.colorDepth,
      issues: checkScreenProperties('colorDepth'),
    },
  ];
  return data;
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
