import React, { useState, useEffect } from 'react'

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

const DebugSettings = ({ type, ip }) => {
  const [value, setValue] = useState()
  const [matchIP, setMatchIP] = useState(false)
  const matchIPStorage = `${type}MatchIP`

  useEffect(() => {
    console.log('fsffdsfsd')
    chrome.storage.sync.get([type, matchIPStorage], (result) => {
      setMatchIP(result[matchIPStorage])

      if (result[matchIPStorage] && !result[type]) {
        setValue(ip[type])
        chrome.storage.sync.set({ [type]: ip[type] })
      } else {
        setValue(result[type])
      }
    })
  }, [ip, matchIPStorage, type])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0 0 0',
      }}
    >
      <label>
        <input
          type="text"
          value={value}
          // onChange={() => setMatchIP(!matchIP)}
          style={{
            width: '100px',
            margin: '0 5px 0 0',
          }}
        />
        {type}
      </label>
      <label>
        Match IP
        <input
          type="checkbox"
          checked={matchIP}
          onChange={() => setMatchIP(!matchIP)}
        />
      </label>
    </div>
  )
}

export default DebugSettings
