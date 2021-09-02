/* eslint-disable dot-notation */
export { getNavigator, checkUndefinedProperties };

const getNavigator = () => {
  const data = [
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory || 'N/A',
    },
    {
      key: 'hardwareConcurrency',
      title: 'Hardware Concurrency',
      value: navigator.hardwareConcurrency || 'N/A',
    },
    {
      key: 'maxTouchPoints',
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints || 'N/A',
    },
    {
      key: 'platform',
      title: 'Platform',
      value: navigator.platform || 'N/A',
    },
    {
      key: 'userAgent',
      title: 'User agent',
      value: navigator.userAgent || 'N/A',
    },
    {
      key: 'language',
      title: 'Language',
      value: navigator.language || 'N/A',
    },
    {
      key: 'languages',
      title: 'Languages',
      value: navigator.languages || 'N/A',
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
      value: sortPlugins(navigator.plugins) || 'N/A',
    },
    // {
    //   key: 'connection',
    //   title: 'Connection',
    //   value: JSON.stringify(navigator.connection) || 'N/A',
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'geolocation',
    //   title: 'Geolocation',
    //   value: navigator.geolocation || 'N/A',
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'hid',
    //   title: 'Hid',
    //   value: navigator.hid || 'N/A',
    //       prototype: Navigator.prototype.hardwareConcurrency,
    // },
    // {
    //   key: 'keyboard',
    //   title: 'Keyboard',
    //   value: navigator.keyboard || 'N/A',
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
      value: navigator.vendor || 'N/A',
    },
    {
      key: 'appVersion',
      title: 'App version',
      value: navigator.appVersion || 'N/A',
    },
    {
      key: 'productSub',
      title: 'Product sub',
      value: navigator.productSub || 'N/A',
    },
    {
      key: 'vendorSub',
      title: 'Vendor sub',
      value: navigator.vendorSub || 'N/A',
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
  let w;
  if (typeof Worker !== 'undefined') {
    if (typeof w === 'undefined') {
      w = new Worker('/worker.js');
    }
    w.onmessage = (event) => {
      console.log(event);
    };
  } else {
    document.getElementById('result').innerHTML =
      'Sorry! No Web Worker support.';
  }

  return list.toString().split(',').join('<br />');
};
