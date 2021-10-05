const getWidth = () => {
  const name = 'width';
  return {
    key: 'Width',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('width'),
      checkScreenValue('width'),
      checkScreenPrototype('width'),
      checkWidth(),
    ],
  };
};

const getAvailWidth = () => {
  const name = 'availWidth';
  return {
    key: 'Avail width',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('availWidth'),
      checkScreenValue('availWidth'),
      checkScreenPrototype('availWidth'),
      checkWidth(),
    ],
  };
};

const getOuterWidth = () => {
  const name = 'outerWidth';
  return {
    key: 'Outer width',
    code: `window.${name}`,
    value: window[name],
    issues: [],
  };
};

const getHeight = () => {
  const name = 'height';
  return {
    key: 'Height',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('height'),
      checkScreenValue('height'),
      checkScreenPrototype('height'),
    ],
  };
};

const getAvailHeight = () => {
  const name = 'availHeight';
  return {
    key: 'Avail height',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('availHeight'),
      checkScreenValue('availHeight'),
      checkScreenPrototype('availHeight'),
      checkHeight(),
    ],
  };
};

const getOuterHeight = () => {
  const name = 'outerHeight';
  return {
    key: 'Outer height',
    code: `window.${name}`,
    value: window[name],
    issues: [],
  };
};

const getPixelDepth = () => {
  const name = 'pixelDepth';
  return {
    key: 'Pixel depth',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('pixelDepth'),
      checkScreenValue('pixelDepth'),
      checkScreenPrototype('pixelDepth'),
    ],
  };
};

const getColorDepth = () => {
  const name = 'colorDepth';
  return {
    key: 'Color depth',
    code: `window.screen.${name}`,
    value: window.screen[name],
    issues: [
      checkScreenProperties('colorDepth'),
      checkScreenValue('colorDepth'),
      checkScreenPrototype('colorDepth'),
    ],
  };
};

const checkScreenValue = (name) => {
  if (
    Object.getOwnPropertyDescriptor(Screen.prototype, name).value !== undefined
  ) {
    return 'Failed descriptor.value undefined';
  }
  return null;
};

const checkScreenPrototype = (name) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Screen.prototype[name];
    return 'Failed Screen.prototype';
  } catch (err) {
    // eslint-disable-next-line no-unused-vars
    const check = '';
  }
  return null;
};

const checkWidth = () => {
  if (window.screen.availWidth > window.screen.width) {
    return 'Avail width is greater than width';
  }
  return null;
};

const checkHeight = () => {
  if (window.screen.availHeight > window.screen.height) {
    return 'Avail height is greater than height';
  }
  return null;
};

const checkScreenProperties = (name) => {
  if (Object.getOwnPropertyDescriptor(window.screen, name) !== undefined) {
    return 'Failed undefined properties';
  }
  return null;
};

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

export default getScreen;
