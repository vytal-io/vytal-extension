/* eslint-disable import/prefer-default-export */
import md5 from 'crypto-js/md5';

const getHash = (data) => md5(JSON.stringify(data)).toString();

// Hardware table items
const getHardware = () => {
  const data = [
    {
      key: 'screenResolution',
      title: 'Screen resolution',
      value: `${window.screen.width}x${window.screen.height}`,
    },
    {
      key: 'colorResolution',
      title: 'Color Resolution',
      value: window.screen.colorDepth,
    },
    {
      key: 'deviceMemory',
      title: 'Device memory',
      value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
    },
    {
      key: 'cpuCores',
      title: '# of CPU cores',
      value: navigator.hardwareConcurrency || 'N/A',
    },
    {
      key: 'maxTouchpoints',
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints || 0,
    },
  ];
  return data;
};

const getBattery = async () => {
  let level, status;
  if ('getBattery' in navigator) {
    await navigator.getBattery().then((res) => {
      level = `${Math.round(res.level * 100)}%`;
      status = res.charging ? 'Charging' : 'Not charging';
    });
  } else {
    level = 'N/A';
    status = 'N/A';
  }
  const data = [
    {
      key: 'batteryLevel',
      title: 'Battery level',
      value: level,
    },
    {
      key: 'batteryStatus',
      title: 'Battery status',
      value: status,
    },
  ];
  return data;
};

const getWebGL = () => {
  const gl = document.createElement('canvas').getContext('webgl');
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const data = [
    {
      key: 'webGLVendor',
      title: 'WebGL vendor',
      value: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
    },
    {
      key: 'webglRenderer',
      title: 'WebGL renderer',
      value: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
    },
  ];
  return data;
};

export { getHash, getHardware, getWebGL, getBattery };
