import { checkWebWorker } from './common';

const detectTor = () => {
  const date = new Date();
  if (
    navigator.plugins.length === 0 &&
    date.getTimezoneOffset() === 0 &&
    window.outerWidth === window.screen.availWidth &&
    window.outerHeight === window.screen.availHeight
  ) {
    return true;
  }
  return false;
};

const checkDatePrototype = () => {
  if (!Date.prototype.setDate.toString().includes('[native code]')) {
    return 'Failed Date.prototype.setDate.toString()';
  }
  return null;
};

// Returns object with location data
const getOther = (battery, adBlock, workerData) => {
  console.log(battery);
  let batteryLevel, batteryStatus;
  if (battery === 'N/A') {
    batteryLevel = 'N/A';
    batteryStatus = 'N/A';
  } else {
    batteryLevel = `${Math.round(battery.level * 100)}%`;
    batteryStatus = battery.charging ? 'Charging' : 'Not charging';
  }
  return [
    {
      key: 'Brave browser',
      value: navigator.brave ? 'True' : 'False',
      issues: [],
    },
    {
      key: 'Tor browser',
      value: detectTor() ? 'True' : 'False',
      issues: [],
    },
    {
      key: 'Adblock',
      value: adBlock ? 'True' : 'False',
      issues: [],
    },
    {
      key: 'Date',
      value: new Date().toString(),
      issues: [checkDatePrototype()],
    },
    {
      key: 'Timezone offset',
      value: new Date().getTimezoneOffset(),
      issues: [
        checkDatePrototype(),
        checkWebWorker(
          new Date().getTimezoneOffset(),
          workerData.timezoneOffset
        ),
      ],
    },
    {
      key: 'Battery level',
      value: batteryLevel,
      issues: [],
    },
    {
      key: 'Battery status',
      value: batteryStatus,
      issues: [],
    },
  ];
};
export default getOther;
