const getWidth = () => ({
  key: 'width',
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
  value: window.outerWidth,
  // issues: checkWindowProperties('outerWidth'),
  issues: [],
});

const getAvailWidth = () => ({
  key: 'availWidth',
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
  value: window.screen.height,
  issues: [
    checkScreenProperties('height'),
    checkScreenValue('height'),
    checkScreenPrototype('height'),
  ],
});

const getOuterHeight = () => ({
  key: 'outerHeight',
  value: window.outerHeight,
  // issues: checkWindowProperties('outerHeight'),
  issues: [],
});

const getAvailHeight = () => ({
  key: 'availHeight',
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
  value: window.screen.pixelDepth,
  issues: [
    checkScreenProperties('pixelDepth'),
    checkScreenValue('pixelDepth'),
    checkScreenPrototype('pixelDepth'),
  ],
});

const getColorDepth = () => ({
  key: 'colorDepth',
  value: window.screen.colorDepth,
  issues: [
    checkScreenProperties('colorDepth'),
    checkScreenValue('colorDepth'),
    checkScreenPrototype('colorDepth'),
  ],
});

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

const checkScreenProperties = (key) => {
  if (Object.getOwnPropertyDescriptor(window.screen, key) !== undefined) {
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
