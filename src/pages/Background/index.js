import userAgents from '../../utils/userAgents'

const attachTab = (tabId) => {
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
                    chrome.runtime.lastError.message.includes(
                      'Timezone override is already in effect'
                    )
                  ) {
                    chrome.debugger.detach({ tabId })
                    attachTab(tabId)
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
              // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.69',
            }
          }
        })
      }
    }
  )
}

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === tabId)
    if (!currentTab.attached) {
      attachTab(tabId)
    }
  })
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'userAgentAlarm') {
    chrome.storage.sync.get(['randomUA'], (result) => {
      if (result.randomUA) {
        console.log('userAgentAlarm')
        const randomUserAgent =
          userAgents[Math.floor(Math.random() * userAgents.length)]
        chrome.storage.sync.set({
          userAgent: randomUserAgent,
        })
      }
    })
  }
})
