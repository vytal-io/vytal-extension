const attachTab = (tabId) =>{
  chrome.debugger.attach({ tabId: tabId }, "1.3", function () {
    if (!chrome.runtime.lastError) {
      // console.log("attached debugger to tab: " + tabId);
      // // https://chromedevtools.github.io/devtools-protocol/tot/ - "geolocation"

      chrome.debugger.sendCommand(
        { tabId: tabId },
        "Emulation.setTimezoneOverride",
        { timezoneId: "Asia/Shanghai" }
      );
      
      chrome.debugger.sendCommand(
        { tabId: tabId },
        "Emulation.setLocaleOverride",
        { locale: "zh-Hans-CN" }
      );

      const london = {
        latitude: 31.230416,
        longitude: 121.473701,
        accuracy: 1,
      };
      chrome.debugger.sendCommand(
        { tabId: tabId },
        "Emulation.setGeolocationOverride",
        london,
        function (result) {
          console.log(result);
        }
      );
      // chrome.debugger.sendCommand(
      //   { tabId: tabId },
      //   "Emulation.setUserAgentOverride",
      //   {
      //     userAgent:
      //       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.35",
      //   },
      //   { acceptLanguage: "mr-IN" }
      // );

      // chrome.debugger.sendCommand(
      //   { tabId: tabId },
      //   "[Emulation.setLocaleOverride](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setLocaleOverride)",
      //   { locale: "mr-IN" }
      // );
      //chrome.debugger.sendCommand({tabId: tabId}, "Emulation.clearGeolocationOverride");
      // chrome.debugger.detach({ tabId: tabId });
    }
  });
}

// Detects if there are posts for current url
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  attachTab(tabId);
});

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