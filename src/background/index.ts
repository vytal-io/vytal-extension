import attachDebugger from './attachDebugger'

const attachTab = (tabId: number) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === tabId)
    if (!currentTab?.attached) {
      attachDebugger(tabId)
    }
  })
}

chrome.tabs.onCreated.addListener((tab) => {
  tab.id && attachDebugger(tab.id)
})

chrome.tabs.onActivated.addListener((tab) => {
  attachTab(tab.tabId)
})

chrome.tabs.onUpdated.addListener((tabId) => {
  attachTab(tabId)
})
