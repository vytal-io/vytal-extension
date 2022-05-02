import React, { useState, useEffect } from 'react'

const DebugSettings = ({ type, title, ip }) => {
  const [value, setValue] = useState('')
  const [matchIP, setMatchIP] = useState(false)
  const matchIPStorage = `${type}MatchIP`

  useEffect(() => {
    if (ip) {
      chrome.storage.sync.get([type, matchIPStorage], (result) => {
        result[matchIPStorage] && setMatchIP(result[matchIPStorage])

        if (result[matchIPStorage]) {
          setValue(ip[type])
          chrome.storage.sync.set({ [type]: ip[type] })
        } else if (result[type]) {
          setValue(result[type])
        }
      })
    }
  }, [ip, matchIPStorage, type])

  const changeTextValue = (e) => {
    chrome.storage.sync.set({ [type]: e.target.value })
    setValue(e.target.value)
    if (matchIP) {
      chrome.storage.sync.set({ [matchIPStorage]: !matchIP })
      setMatchIP(!matchIP)
    }
  }

  const toggleMatchIP = (e) => {
    chrome.storage.sync.set({
      [type]: ip[type],
      [matchIPStorage]: !matchIP,
    })
    !matchIP && setValue(ip[type])
    setMatchIP(e.target.checked)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '12px 0 0 0',
      }}
    >
      <label>
        <input
          type="text"
          value={value}
          onChange={changeTextValue}
          style={{
            width: '120px',
            margin: '0 5px 0 0',
          }}
        />
        {title}
      </label>
      <label>
        <input type="checkbox" checked={matchIP} onChange={toggleMatchIP} />
        Match IP
      </label>
    </div>
  )
}

export default DebugSettings
