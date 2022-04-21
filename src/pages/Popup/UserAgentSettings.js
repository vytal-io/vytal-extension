import React, { useState, useEffect } from 'react'

const UserAgentSettings = () => {
  const [value, setUserAgent] = useState('')

  useEffect(() => {
    chrome.storage.sync.get(['userAgent'], (result) => {
      if (result.userAgent) {
        setUserAgent(result.userAgent)
      }
    })
  }, [])

  const changeTextValue = (e) => {
    chrome.storage.sync.set({ userAgent: e.target.value })
    setUserAgent(e.target.value)
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
            width: '218px',
            margin: '0 5px 0 0',
          }}
        />
        User Agent
      </label>
    </div>
  )
}

export default UserAgentSettings
