import * as React from 'react';
import { useEffect } from 'react';
import * as Bowser from 'bowser';
import Navbar from './Navbar';
import './App.css';

const updateDOM = (id, text) => {
  document.getElementById(id).innerHTML += text;
};

const App = () => {
  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        updateDOM('ipAddress', data.query);
        updateDOM('country', data.country);
        updateDOM('region', data.regionName);
        updateDOM('city', data.city);
        updateDOM('zip', data.zip);
        updateDOM('provider', data.isp);
      });

    const uaResult = Bowser.parse(navigator.userAgent);
    updateDOM('browser', uaResult.browser.name);
    updateDOM('browserVersion', uaResult.browser.version);
    updateDOM('browserEngine', uaResult.engine.name);
    updateDOM('os', `${uaResult.os.name} ${uaResult.os.versionName}`);

    updateDOM('language', navigator.language);
    updateDOM('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
    const date = new Date();
    updateDOM('offset', date.getTimezoneOffset());
    updateDOM('cookies', navigator.cookieEnabled);
    updateDOM('java', navigator.javaEnabled());
    updateDOM('dnt', navigator.doNotTrack ? 'true' : 'false');

    const pluginsLength = navigator.plugins.length;
    let plugins = '';
    for (let i = 0; i < pluginsLength; i++) {
      if (i !== 0) plugins += ', ';
      plugins += navigator.plugins[i].name;
    }
    updateDOM('plugins', plugins);

    updateDOM('platform', uaResult.platform.type);
    updateDOM('screenSize', `${window.screen.width}x${window.screen.height}`);
    updateDOM('color', window.screen.colorDepth);

    navigator.getBattery().then((battery) => {
      updateDOM('batteryLevel', `${Math.round(battery.level * 100)}%`);
      updateDOM('batteryStatus', battery.charging ? 'Charging' : 'Not charging');
    });

    updateDOM('memory', `${navigator.deviceMemory}GB`);
    updateDOM('cores', navigator.hardwareConcurrency);
    updateDOM('maxTouch', navigator.maxTouchPoints);
    const gl = document.createElement('canvas').getContext('webgl');
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    updateDOM('vendor', gl.getParameter(ext.UNMASKED_VENDOR_WEBGL));
    updateDOM('renderer', gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <table>
        <col className="column-one" />
        <div className="title">Connection</div>
        <tr>
          <td>IP address:</td>
          <td>
            <div id="ipAddress" />
          </td>
        </tr>
        <tr>
          <td>Country:</td>
          <td>
            <div id="country" />
          </td>
        </tr>
        <tr>
          <td>Region:</td>
          <td>
            <div id="region" />
          </td>
        </tr>
        <tr>
          <td>City:</td>
          <td>
            <div id="city" />
          </td>
        </tr>
        <tr>
          <td>Zip code:</td>
          <td>
            <div id="zip" />
          </td>
        </tr>
        <tr>
          <td>Provider:</td>
          <td>
            <div id="provider" />
          </td>
        </tr>
        <div className="title">Software</div>
        <tr>
          <td>Browser:</td>
          <td>
            <div id="browser" />
          </td>
        </tr>
        <tr>
          <td>Browser version:</td>
          <td>
            <div id="browserVersion" />
          </td>
        </tr>
        <tr>
          <td>Browser engine:</td>
          <td>
            <div id="browserEngine" />
          </td>
        </tr>
        <tr>
          <td>Operating system:</td>
          <td>
            <div id="os" />
          </td>
        </tr>
        <tr>
          <td>Language:</td>
          <td>
            <div id="language" />
          </td>
        </tr>
        <tr>
          <td>Timezone:</td>
          <td>
            <div id="timezone" />
          </td>
        </tr>
        <tr>
          <td>Timezone offset:</td>
          <td>
            <div id="offset" />
          </td>
        </tr>
        <tr>
          <td>Cookies enabled:</td>
          <td>
            <div className="capitalize" id="cookies" />
          </td>
        </tr>
        <tr>
          <td>Java enabled:</td>
          <td>
            <div className="capitalize" id="java" />
          </td>
        </tr>
        <tr>
          <td>DNT header enabled:</td>
          <td>
            <div className="capitalize" id="dnt" />
          </td>
        </tr>
        <tr>
          <td>Plugins:</td>
          <td>
            <div id="plugins" />
          </td>
        </tr>
        <div className="title">Hardware</div>
        <tr>
          <td>Platform:</td>
          <td>
            <div className="capitalize" id="platform" />
          </td>
        </tr>
        <tr>
          <td>Screen resolution:</td>
          <td>
            <div id="screenSize" />
          </td>
        </tr>
        <tr>
          <td>Color Resolution:</td>
          <td>
            <div id="color" />
          </td>
        </tr>
        <tr>
          <td>Battery level:</td>
          <td>
            <div id="batteryLevel" />
          </td>
        </tr>
        <tr>
          <td>Battery status:</td>
          <td>
            <div id="batteryStatus" />
          </td>
        </tr>
        <tr>
          <td>Device memory:</td>
          <td>
            <div id="memory" />
          </td>
        </tr>
        <tr>
          <td># of CPU cores:</td>
          <td>
            <div id="cores" />
          </td>
        </tr>
        <tr>
          <td>Max touchpoints:</td>
          <td>
            <div id="maxTouch" />
          </td>
        </tr>
        <tr>
          <td>WebGL vendor:</td>
          <td>
            <div id="vendor" />
          </td>
        </tr>
        <tr>
          <td>WebGL renderer:</td>
          <td>
            <div id="renderer" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;
