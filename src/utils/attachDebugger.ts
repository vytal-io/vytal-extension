const attachDebugger = (tabId: number) => {
  chrome.storage.local.get(
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
      'platform',
      'userAgentBrowserDefault',
    ],
    (storage) => {
      if (
        (storage.timezone ||
          storage.lat ||
          storage.lon ||
          storage.locale ||
          storage.userAgent) &&
        !storage.userAgentBrowserDefault
      ) {
        chrome.debugger.attach({ tabId: tabId }, '1.3', () => {
          if (!chrome.runtime.lastError) {
            if (storage.timezone) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setTimezoneOverride',
                {
                  timezoneId: storage.timezone,
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

            if (storage.locale) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setLocaleOverride',
                {
                  locale: storage.locale,
                }
              )
            }

            if (storage.lat || storage.lon) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setGeolocationOverride',
                {
                  latitude: storage.lat
                    ? parseFloat(storage.lat)
                    : storage.ipData.lat,
                  longitude: storage.lon
                    ? parseFloat(storage.lon)
                    : storage.ipData.lon,
                  accuracy: 1,
                }
              )
            }

            if (
              !storage.userAgentBrowserDefault &&
              (storage.userAgent || storage.platform)
            ) {
              chrome.debugger.sendCommand(
                { tabId: tabId },
                'Emulation.setUserAgentOverride',
                {
                  userAgent: storage.userAgent,
                  platform: storage.platform,
                }
                // { acceptLanguage: "en-CA" },
              )
            }
          }
        })
      }
    }
  )
}

export default attachDebugger
