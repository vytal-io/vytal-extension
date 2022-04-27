import React, { useState, useEffect } from 'react'
import userAgents from '../../utils/userAgents'

const UserAgentSettings = () => {
  const [userAgent, setUserAgent] = useState('')

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

  const randomize = (e) => {
    const randomUserAgent =
      userAgents[Math.floor(Math.random() * userAgents.length)]
    chrome.storage.sync.set({ [randomize]: randomUserAgent })
    setUserAgent(randomUserAgent)
  }

  return (
    <>
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
            value={userAgent}
            onChange={changeTextValue}
            style={{
              width: '218px',
              margin: '0 5px 0 0',
            }}
          />
          User Agent
        </label>
      </div>
      <label>
        <input type="checkbox" checked={false} onChange={randomize} />
        Randomize every
      </label>
      <label>
        <input
          type="text"
          // value={value}
          // onChange={changeTextValue}
          style={{
            width: '24px',
            margin: '0 5px 0 0',
          }}
        />
        minutes
      </label>
    </>
  )
}

export default UserAgentSettings
