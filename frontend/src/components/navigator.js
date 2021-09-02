/* eslint-disable dot-notation */
export { getNavigator, checkUndefinedProperties, checkWebWorker };

const getNavigator = () => {
  const data = [
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory,
    },
    {
      key: 'hardwareConcurrency',
      title: 'Hardware Concurrency',
      value: navigator.hardwareConcurrency,
    },
    {
      key: 'maxTouchPoints',
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints,
    },
    {
      key: 'platform',
      title: 'Platform',
      value: navigator.platform,
    },
    {
      key: 'userAgent',
      title: 'User agent',
      value: navigator.userAgent,
    },
    {
      key: 'language',
      title: 'Language',
      value: navigator.language,
    },
    {
      key: 'languages',
      title: 'Languages',
      value: navigator.languages,
    },
    {
      key: 'cookieEnabled',
      title: 'Cookies enabled',
      value: navigator.cookieEnabled ? 'True' : 'False',
    },
    {
      key: 'doNotTrack',
      title: 'Do not track header',
      value: navigator.doNotTrack ? 'True' : 'False',
    },
    {
      key: 'webdriver',
      title: 'Webdriver',
      value: navigator.webdriver ? 'True' : 'False',
    },
    {
      key: 'plugins',
      title: 'Plugins',
      value: sortPlugins(navigator.plugins),
    },
    // {
    //   key: 'connection',
    //   title: 'Connection',
    //   value: JSON.stringify(navigator.connection),
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'geolocation',
    //   title: 'Geolocation',
    //   value: navigator.geolocation,
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'hid',
    //   title: 'Hid',
    //   value: navigator.hid,
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'keyboard',
    //   title: 'Keyboard',
    //   value: navigator.keyboard,
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    {
      key: 'onLine',
      title: 'Online',
      value: navigator.onLine ? 'True' : 'False',
    },
    {
      key: 'vendor',
      title: 'Vendor',
      value: navigator.vendor,
    },
    {
      key: 'appVersion',
      title: 'App version',
      value: navigator.appVersion,
    },
    {
      key: 'productSub',
      title: 'Product sub',
      value: navigator.productSub,
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

const checkUndefinedProperties = (obj) => {
  const list = [];
  if (Object.getOwnPropertyDescriptor(navigator, obj.key) !== undefined) {
    list.push('Failed undefined properties');
  }
  if (
    Object.getOwnPropertyDescriptor(Navigator.prototype, obj.key).value !==
    undefined
  ) {
    list.push('Failed descriptor.value undefined');
  }
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[obj.key];
    list.push('Failed Navigator.prototype');
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  // let frame = document.getElementById('testFrame');
  // if (!frame) {
  //   frame = document.createElement('iframe');
  //   frame.setAttribute('id', 'testFrame');
  //   document.body.appendChild(frame);
  // }
  // console.log(navigator.hardwareConcurrency);

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
      console.log(event.data, navigator[obj.key]);
      setWorkerData('Did not match web worker');
    }
  };
};
