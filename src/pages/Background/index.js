import attachDebugger from '../../utils/attachDebugger'

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
