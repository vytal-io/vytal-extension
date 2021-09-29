const getWidth = (key) => ({
  key: 'Width',
  code: `window.screen.${key}`,
  value: window.screen[key],
  issues: [
    checkScreenProperties('width'),
    checkScreenValue('width'),
    checkScreenPrototype('width'),
    checkWidth(),
  ],
});

const getAvailWidth = (key) => ({
  key: 'Avail width',
  code: `window.screen.${key}`,
  value: window.screen[key],
  issues: [
    checkScreenProperties('availWidth'),
    checkScreenValue('availWidth'),
    checkScreenPrototype('availWidth'),
    checkWidth(),
  ],
});

const getOuterWidth = (key) => ({
  key: 'Outer width',
  code: `window.${key}`,
  value: window[key],
  issues: [],
});

const getHeight = (key) => ({
  key: 'Height',
  code: `window.screen.${key}`,
  value: window.screen[key],
  issues: [
    checkScreenProperties('height'),
    checkScreenValue('height'),
    checkScreenPrototype('height'),
  ],
});

const getAvailHeight = (key) => ({
  key: 'Avail height',
  code: `window.screen.${key}`,
  value: window.screen[key],
  issues: [
    checkScreenProperties('availHeight'),
    checkScreenValue('availHeight'),
    checkScreenPrototype('availHeight'),
    checkHeight(),
  ],
});

const getOuterHeight = (key) => ({
  key: 'Outer height',
  code: `window.${key}`,
  value: window[key],
  issues: [],
});

const getPixelDepth = (key) => ({
  key: 'Pixel depth',
  code: `window.screen.${key}`,
  value: window.screen[key],
  issues: [
    checkScreenProperties('pixelDepth'),
    checkScreenValue('pixelDepth'),
    checkScreenPrototype('pixelDepth'),
  ],
});

const getColorDepth = (key) => ({
  key: 'Color depth',
  code: `window.screen.${key}`,
  value: window.screen[key],
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
  getWidth('width'),
  getAvailWidth('availWidth'),
  getOuterWidth('outerWidth'),
  getHeight('height'),
  getAvailHeight('availHeight'),
  getOuterHeight('outerHeight'),
  getPixelDepth('pixelDepth'),
  getColorDepth('colorDepth'),
];

export default getScreen;
