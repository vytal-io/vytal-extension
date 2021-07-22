import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';

const HardwareBlock = () => {
  const [batLevel, setBatLevel] = useState('');
  const [batStatus, setBatStatus] = useState('');

  useEffect(() => {
    // waits for battery info to resolve and then updates
    if ('getBattery' in navigator) {
      navigator.getBattery().then((res) => {
        setBatLevel(`${Math.round(res.level * 100)}%`);
        setBatStatus(res.charging ? 'Charging' : 'Not charging');
      });
    } else {
      setBatLevel('N/A');
      setBatStatus('N/A');
    }
  }, []);

  const gl = document.createElement('canvas').getContext('webgl');
  const ext = gl.getExtension('WEBGL_debug_renderer_info');

  // Hardware table items
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
      key: 'batteryLevel',
      title: 'Battery level',
      value: batLevel,
    },
    {
      key: 'batteryStatus',
      title: 'Battery status',
      value: batStatus,
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
      value: navigator.maxTouchPoints,
    },
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
  return (
    <ScanBlock>
      <h1>Hardware</h1>
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};

export default HardwareBlock;
