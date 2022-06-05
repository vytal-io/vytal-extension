const checkDatePrototype = () => {
  if (!Date.prototype.setDate.toString().includes('[native code]')) {
    return 'Failed Date.prototype.setDate.toString()';
  }
  return null;
};

const checkIntlConstructor = () => {
  if (
    !Object.getPrototypeOf(Intl.DateTimeFormat.prototype)
      .constructor.toString()
      .includes('Object')
  ) {
    return 'Failed Object.getPrototypeOf(Intl.DateTimeFormat.prototype).constructor.toString()';
  }
  return null;
};

const checkIntlPrototype = () => {
  if (
    !Intl.DateTimeFormat.prototype.resolvedOptions
      .toString()
      .includes('[native code]')
  ) {
    return 'Failed Intl.DateTimeFormat.prototype.resolvedOptions.toString()';
  }
  return null;
};

const checkNavigatorProperties = (key) => {
  if (Object.getOwnPropertyDescriptor(navigator, key) !== undefined) {
    return 'Failed Object.getOwnPropertyDescriptor(navigator, key)';
  }
  return null;
};

const checkNavigatorValue = (key) => {
  if (
    Object.getOwnPropertyDescriptor(Navigator.prototype, key).value !==
    undefined
  ) {
    return 'Failed object.getOwnPropertyDescriptor(Navigator.prototype, key).value';
  }
  return null;
};

const checkNavigatorPrototype = (key) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[key];
    return 'Failed Navigator.prototype[key]';
  } catch (err) {
    return null;
  }
};

const getNavigatorValue = (type) =>
  [
    checkNavigatorProperties(type),
    checkNavigatorValue(type),
    checkNavigatorPrototype(type),
  ].filter(Boolean);

const windowData = {
  locale: {
    value: Intl.DateTimeFormat().resolvedOptions().locale,
    issues: [checkIntlPrototype(), checkIntlConstructor()].filter(Boolean),
  },
  timeZone: {
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    issues: [checkIntlPrototype(), checkIntlConstructor()].filter(Boolean),
  },
  timezoneOffset: {
    value: new Date().getTimezoneOffset(),
    issues: [checkDatePrototype()].filter(Boolean),
  },
  dateString: {
    value: new Date().toString(),
    issues: [checkDatePrototype()].filter(Boolean),
  },
  dateLocale: {
    value: new Date().toLocaleString(),
    issues: [checkDatePrototype()].filter(Boolean),
  },
  userAgent: {
    value: navigator.userAgent,
    issues: getNavigatorValue('userAgent'),
  },
  appVersion: {
    value: navigator.appVersion,
    issues: getNavigatorValue('appVersion'),
  },
};

export default windowData;
