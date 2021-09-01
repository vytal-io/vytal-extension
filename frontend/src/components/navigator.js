export { getNavigator, checkUndefinedProperties };

const getNavigator = () => {
  const data = [
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
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
  // console.log(obj.prototype.constructor.name);
  // if (obj.prototype.constructor.name === 'Number') {
  //   list.push('Failed constructor name');
  // }
  return list;
};
