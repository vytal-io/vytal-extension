const attachDebugger = (tabId: number) => {
  chrome.storage.sync.get(
    [
      'ipData',
      'timezone',
      'timezoneMatchIP',
      'lat',
      'latitudeMatchIP',
      'lon',
      'longitudeMatchIP',
      'locale',
      'localeMatchIP',
      'userAgent',
    ],
    (result) => {
      if (
        result.timezone ||
        result.lat ||
        result.lon ||
        result.locale ||
        result.userAgent
      ) {
        chrome.debugger.attach({ tabId: tabId }, '1.3', () => {
          if (!chrome.runtime.lastError) {
            // chrome.debugger.sendCommand(
            //   { tabId: tabId },
            //   'Target.autoAttachRelated',
            //   { targetId: tabId, waitForDebuggerOnStart: false },
            //   (res) => {
            //     console.log(res)
            //   }
            // )

            if (result.timezone) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setTimezoneOverride',
                {
                  timezoneId: result.timezone,
                },
                () => {
                  if (
                    chrome.runtime.lastError &&
                    chrome.runtime.lastError.message?.includes(
                      'Timezone override is already in effect'
                    )
                  ) {
                    chrome.debugger.detach({ tabId })
                  }
                }
              )
            }

            if (result.locale) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setLocaleOverride',
                {
                  locale: result.locale,
                }
              )
            }

            if (result.lat || result.lon) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setGeolocationOverride',
                {
                  latitude: result.lat
                    ? parseFloat(result.lat)
                    : result.ipData.lat,
                  longitude: result.lon
                    ? parseFloat(result.lon)
                    : result.ipData.lon,
                  accuracy: 1,
                }
              )
            }

            if (result.userAgent) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setUserAgentOverride',
                {
                  userAgent: result.userAgent,
                }
                // { acceptLanguage: "en-CA" },
                // { platform: "WebTV OS" }
              )
            }
          }
        })
      }
    }
  )
}

export default attachDebugger
