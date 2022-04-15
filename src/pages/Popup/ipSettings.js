import React, { useState, useEffect } from 'react'

const getIP = () =>
  fetch('http://ip-api.com/json/')
    .then((response) => response.json())
    .then((ipData) => {
      chrome.storage.sync.set({ ipData })
      return ipData
    })

const detachDebugger = () => {
  chrome.debugger.getTargets((tabs) => {
    console.log(tabs)
    for (const tab in tabs) {
      if (tabs[tab].attached && tabs[tab].tabId) {
        chrome.debugger.detach({ tabId: tabs[tab].tabId })
      }
    }
  })
}

const Popup = () => {
  const [ip, setIP] = useState()

  useEffect(() => {
    chrome.storage.sync.get(['ipData'], (result) => {
      console.log(result.ipData)
      if (result.ipData) {
        setIP(result.ipData)
      } else {
        Promise.resolve(getIP()).then((ipData) => setIP(ipData))
      }
    })
  }, [])

  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        Current IP: {ip && `${ip.query} ${getFlagEmoji(ip.countryCode)}`}
      </div>
      <button
        type="button"
        onClick={() => {
          Promise.resolve(getIP()).then((ipData) => setIP(ipData))
          detachDebugger()
        }}
      >
        Reload
      </button>
    </div>
  )
}

export default Popup
