import attachDebugger from '../../utils/attachDebugger'
import userAgents from '../../utils/userAgents'

const attachTab = (tabId) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === tabId)
    if (!currentTab.attached) {
      attachDebugger(tabId)
    }
  })
}

chrome.tabs.onCreated.addListener((tab) => {
  attachDebugger(tab.id)
})

chrome.tabs.onActivated.addListener((tab) => {
  attachTab(tab.tabId)
})

chrome.tabs.onUpdated.addListener((tabId) => {
  attachTab(tabId)
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'userAgentAlarm') {
    chrome.storage.sync.get(['randomUA'], (result) => {
      if (result.randomUA) {
        const randomUserAgent =
          userAgents[Math.floor(Math.random() * userAgents.length)]
        chrome.storage.sync.set({
          userAgent: randomUserAgent,
        })
      }
    })
  }
})
