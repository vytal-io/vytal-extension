import attachDebugger from '../../utils/attachDebugger'
import userAgents from '../../utils/userAgents'

chrome.tabs.onCreated.addListener((tab) => {
  attachDebugger(tab.id)
})

chrome.tabs.onActivated.addListener((tab) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === tab.tabId)
    if (!currentTab.attached) {
      attachDebugger(tab.tabId)
    }
  })
})

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === tabId)
    if (!currentTab.attached) {
      attachDebugger(tabId)
    }
  })
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
