import * as React from 'react';
import { useState, useEffect } from 'react';
import Bowser from 'bowser';

const Table = () => {
  const [batLevel, setBatLevel] = useState('');
  const [batStatus, setBatStatus] = useState('');

  useEffect(() => {
    navigator.getBattery().then((res) => {
      setBatLevel(`${Math.round(res.level * 100)}%`);
      setBatStatus(res.charging ? 'Charging' : 'Not charging');
    });
  }, []);

  const uaResult = Bowser.parse(navigator.userAgent);
  const browser = uaResult.browser.name;
  const browserVersion = uaResult.browser.version;
  const browserEngine = uaResult.engine.name;
  const os = `${uaResult.os.name} ${uaResult.os.versionName}`;
  const platform = uaResult.platform.type;

  const language = navigator.language;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const cookies = navigator.cookieEnabled ? 'True' : 'False';
  const java = navigator.javaEnabled() ? 'True' : 'False';
  const dnt = navigator.doNotTrack ? 'True' : 'False';

  const pluginsLength = navigator.plugins.length;
  let pluginList = '';
  for (let i = 0; i < pluginsLength; i++) {
    if (i !== 0) pluginList += ', ';
    pluginList += navigator.plugins[i].name;
  }
  const plugins = pluginList;
  const screenSize = `${window.screen.width}x${window.screen.height}`;
  const color = window.screen.colorDepth;

  const memory = `${navigator.deviceMemory}GB`;
  const cores = navigator.hardwareConcurrency;
  const maxTouch = navigator.maxTouchPoints;
  const gl = document.createElement('canvas').getContext('webgl');
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const vendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL);
  const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
  return (
    <table>
      <col className="column-one" />
      <div className="title">Software</div>
      <tr>
        <td>Browser:</td>
        <td>{browser}</td>
      </tr>
      <tr>
        <td>Browser version:</td>
        <td>{browserVersion}</td>
      </tr>
      <tr>
        <td>Browser engine:</td>
        <td>{browserEngine}</td>
      </tr>
      <tr>
        <td>Operating system:</td>
        <td>{os}</td>
      </tr>
      <tr>
        <td>Language:</td>
        <td>{language}</td>
      </tr>
      <tr>
        <td>Timezone:</td>
        <td>{timezone}</td>
      </tr>
      <tr>
        <td>Timezone offset:</td>
        <td>{offset}</td>
      </tr>
      <tr>
        <td>Cookies enabled:</td>
        <td>{cookies}</td>
      </tr>
      <tr>
        <td>Java enabled:</td>
        <td>{java}</td>
      </tr>
      <tr>
        <td>DNT header enabled:</td>
        <td>{dnt}</td>
      </tr>
      <tr>
        <td>Plugins:</td>
        <td>{plugins}</td>
      </tr>
      <div className="title">Hardware</div>
      <tr>
        <td>Platform:</td>
        <td>{platform}</td>
      </tr>
      <tr>
        <td>Screen resolution:</td>
        <td>{screenSize}</td>
      </tr>
      <tr>
        <td>Color Resolution:</td>
        <td>{color}</td>
      </tr>
      <tr>
        <td>Battery level:</td>
        <td>{batLevel}</td>
      </tr>
      <tr>
        <td>Battery status:</td>
        <td>{batStatus}</td>
      </tr>
      <tr>
        <td>Device memory:</td>
        <td>{memory}</td>
      </tr>
      <tr>
        <td># of CPU cores:</td>
        <td>{cores}</td>
      </tr>
      <tr>
        <td>Max touchpoints:</td>
        <td>{maxTouch}</td>
      </tr>
      <tr>
        <td>WebGL vendor:</td>
        <td>{vendor}</td>
      </tr>
      <tr>
        <td>WebGL renderer:</td>
        <td>{renderer}</td>
      </tr>
    </table>
  );
};

export default Table;
