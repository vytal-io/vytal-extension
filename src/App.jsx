import * as React from 'react';
import { useState, useEffect } from 'react';
import Flag from 'react-flagpack';
import * as Bowser from 'bowser';
import './App.css';

const updateDOM = (id, text) => {
  document.getElementById(id).innerHTML += text;
};

const App = () => {
  const [country, setCountry] = useState('US');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.countryCode);
        setFlag(true);
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
    updateDOM('cookies', navigator.cookieEnabled);
    updateDOM('java', navigator.javaEnabled());
    updateDOM('plugins', navigator.plugins);

    updateDOM('platform', uaResult.platform.type);
    updateDOM('screenSize', `${window.screen.width}x${window.screen.height}`);
    updateDOM('color', window.screen.colorDepth);

    navigator.getBattery().then((battery) => {
      updateDOM('batteryLevel', `${Math.round(battery.level * 100)}%`);
      updateDOM('batteryStatus', `${battery.charging ? '' : 'not '} charging`);
    });

    updateDOM('memory', `${navigator.deviceMemory}GB`);
    updateDOM('cores', navigator.hardwareConcurrency);
  }, []);

  return (
    <div className="App">
      <div className="title">Connection</div>
      <div className="item" id="ipAddress">
        IP address:{' '}
      </div>
      <div className="itemWrap">
        <div className="item" id="country">
          Country:{' '}
        </div>
        <div className="flagWrap">
          {flag === true && <Flag code={country} size="S" />}
        </div>
      </div>
      <div className="item" id="region">
        Region:{' '}
      </div>
      <div className="item" id="city">
        City:{' '}
      </div>
      <div className="item" id="zip">
        Zip:{' '}
      </div>
      <div className="item" id="provider">
        Provider:{' '}
      </div>
      <div className="title">Software</div>
      <div className="item" id="browser">
        Browser:{' '}
      </div>
      <div className="item" id="browserVersion">
        Browser version:{' '}
      </div>
      <div className="item" id="browserEngine">
        Browser engine:{' '}
      </div>
      <div className="item" id="os">
        Operating system:{' '}
      </div>
      <div className="item" id="language">
        Language:{' '}
      </div>
      <div className="item" id="timezone">
        Timezone:{' '}
      </div>
      <div className="item" id="cookies">
        Cookies enabled:{' '}
      </div>
      <div className="item" id="java">
        Java enabled:{' '}
      </div>
      <div className="item" id="plugins">
        Plugins:{' '}
      </div>
      <div className="title">Hardware</div>
      <div className="item" id="platform">
        Platform:{' '}
      </div>
      <div className="item" id="screenSize">
        Screen resolution:{' '}
      </div>
      <div className="item" id="color">
        Color Resolution:{' '}
      </div>
      <div className="item" id="batteryLevel">
        Battery level:{' '}
      </div>
      <div className="item" id="batteryStatus">
        Battery status:{' '}
      </div>
      <div className="item" id="memory">
        Device memory:{' '}
      </div>
      <div className="item" id="cores">
        # of CPU cores:{' '}
      </div>
    </div>
  );
};

export default App;
