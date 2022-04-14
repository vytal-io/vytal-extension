import countryLocales from './countryLocales';

const attachTab = (tabId, ipData) => {
  console.log(1);
  chrome.debugger.attach({ tabId: tabId }, '1.3', function () {
    console.log(2, chrome.runtime.lastError);

    if (!chrome.runtime.lastError) {
      console.log(3);

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.clearGeolocationOverride'
      );

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.clearIdleOverride'
      );

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.setLocaleOverride',
        { locale: countryLocales[ipData.countryCode].locale }
      );

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.setTimezoneOverride',
        { timezoneId: ipData.timezone }
      );

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.setGeolocationOverride',
        {
          latitude: ipData.lat,
          longitude: ipData.lon,
          accuracy: 1,
        }
      );

      chrome.debugger.sendCommand(
        { tabId: tabId },
        'Emulation.setUserAgentOverride',
        {
          userAgent:
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.69',
        }
        // { acceptLanguage: "en-CA" },
        // { platform: "WebTV OS" }
      );
    }
  });
};

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  // chrome.debugger.getTargets((tabs) => {
  //   let tab = tabs.find((obj) => {
  //     return obj.tabId === tabId;
  //   });

  //   if (!tab.attached) {
      chrome.storage.sync.get(['ipData'], (result) => {
        console.log(result.ipData)
        attachTab(tabId, result.ipData);
      });
  //   }
  // });
});

// fetch('http://ip-api.com/json/')
// .then((response) => response.json())
// .then((ipData) => {});

// Detects if there are posts for current url
// chrome.tabs.onCreated.addListener((tab) => {
//   console.log(tab.id)
//   attachTab(tab.id);
// });

// chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//   console.log(tabId)
// });

// chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//   chrome.debugger.attach({ tabId: tabId }, "1.3", function () {
//     if (!chrome.runtime.lastError) {
//       // console.log("attached debugger to tab: " + tabId);
//       // // https://chromedevtools.github.io/devtools-protocol/tot/ - "geolocation"

//       chrome.debugger.sendCommand(
//         { tabId: tabId },
//         "Emulation.setTimezoneOverride",
//         { timezoneId: "Asia/Shanghai" }
//       );
//     }
//   });
// });

// chrome.debugger.sendCommand(
//   { tabId: tabId },
//   "Emulation.setAutomationOverride",
//   {
//     enabled:
//       true,
//   },
// );
