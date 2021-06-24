import * as React from 'react';
import { useState, useEffect } from 'react';
import Bowser from 'bowser';
import Table from './Table';

const sortArr = (arr) => {
  const arrLength = arr.length;
  let list = '';
  for (let i = 0; i < arrLength; i++) {
    if (i !== 0) list += ', ';
    list += arr[i];
  }
  return list;
};

const TableWrap = () => {
  const uaResult = Bowser.parse(navigator.userAgent);
  const date = new Date();
  const pluginsLength = navigator.plugins.length;

  let pluginList = '';
  for (let i = 0; i < pluginsLength; i++) {
    if (i !== 0) pluginList += ', ';
    pluginList += navigator.plugins[i].name;
  }

  const [batLevel, setBatLevel] = useState('');
  const [batStatus, setBatStatus] = useState('');

  useEffect(() => {
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

  const software = [
    {
      title: 'Browser',
      value: uaResult.browser.name,
    },
    {
      title: 'Browser version',
      value: uaResult.browser.version,
    },
    {
      title: 'Browser engine',
      value: uaResult.browser.engine || 'N/A',
    },
    {
      title: 'OS',
      value: `${uaResult.os.name} ${uaResult.os.versionName}`,
    },
    {
      title: 'OS version',
      value: uaResult.os.version,
    },
    {
      title: 'Platform',
      value: navigator.platform,
    },
    {
      title: 'System type',
      value: uaResult.platform.type,
    },
    {
      title: 'User Agent',
      value: navigator.userAgent || 'N/A',
    },
    {
      title: 'Preferred language',
      value: navigator.language || 'N/A',
    },
    {
      title: 'Languages',
      value: sortArr(navigator.languages) || 'N/A',
    },
    {
      title: 'Timezone',
      value: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
    },
    {
      title: 'Timezone offset',
      value: date.getTimezoneOffset() || 'N/A',
    },
    {
      title: 'Cookies enabled',
      value: navigator.cookieEnabled ? 'True' : 'False',
    },
    {
      title: 'Java enabled',
      value: navigator.javaEnabled() ? 'True' : 'False',
    },
    {
      title: 'DNT header enabled',
      value: navigator.doNotTrack ? 'True' : 'False',
    },
    {
      title: 'Automated browser',
      value: navigator.webdriver ? 'True' : 'False',
    },
    {
      title: 'Plugins',
      value: pluginList || 'N/A',
    },
  ];

  const hardware = [
    {
      title: 'Screen resolution',
      value: `${window.screen.width}x${window.screen.height}`,
    },
    {
      title: 'Color Resolution',
      value: window.screen.colorDepth,
    },
    {
      title: 'Battery level',
      value: batLevel,
    },
    {
      title: 'Battery status',
      value: batStatus,
    },
    {
      title: 'Device memory',
      value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
    },
    {
      title: '# of CPU cores',
      value: navigator.hardwareConcurrency || 'N/A',
    },
    {
      title: 'Max touchpoints',
      value: navigator.maxTouchPoints,
    },
    {
      title: 'WebGL vendor',
      value: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
    },
    {
      title: 'WebGL renderer',
      value: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
    },
  ];

  return (
    <div className="tableWrap">
      <Table title="Software" data={software} />
      <Table title="Hardware" data={hardware} />
    </div>
  );
};

export default TableWrap;
