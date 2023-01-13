import attachDebugger from '../utils/attachDebugger'

const attachTab = (e: any) => {
  chrome.debugger.getTargets((tabs) => {
    const currentTab = tabs.find((obj) => obj.tabId === e.tabId)
    if (!currentTab?.attached) {
      attachDebugger(e.tabId)
    }
  })
}

chrome.webNavigation.onBeforeNavigate.addListener(attachTab)
