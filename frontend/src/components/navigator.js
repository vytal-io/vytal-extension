/* eslint-disable import/prefer-default-export */
export { getNavigator };

const getNavigator = () => {
  const data = [
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
      test:
        checkUndefinedProperties('deviceMemory') &&
        'failed undefined properties',
    },
  ];
  return data;
};

const checkUndefinedProperties = (property) => {
  if (Object.getOwnPropertyDescriptor(navigator, property) !== undefined) {
    return true;
  }
  return false;
};
