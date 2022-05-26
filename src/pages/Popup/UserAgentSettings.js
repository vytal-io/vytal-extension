import React, { useState, useEffect } from 'react'
import userAgents from '../../utils/userAgents'
import detachDebugger from '../../utils/detachDebugger'

const UserAgentSettings = () => {
  const [userAgent, setUserAgent] = useState('')
  const [randomUA, setRandomUA] = useState(false)
  const [interval, setInterval] = useState(60)

  useEffect(() => {
    chrome.storage.sync.get(['userAgent', 'randomUA', 'interval'], (result) => {
      result.interval && setInterval(result.interval)

      result.randomUA && setRandomUA(true)

      if (result.userAgent) {
        setUserAgent(result.userAgent)
      }
    })
  }, [])

  const changeUserAgent = (e) => {
    detachDebugger()
    chrome.storage.sync.set({ userAgent: e.target.value })
    setUserAgent(e.target.value)
  }

  const randomize = (e) => {
    detachDebugger()
    const randomUserAgent =
      userAgents[Math.floor(Math.random() * userAgents.length)]
    chrome.storage.sync.set({
      userAgent: e.target.checked ? randomUserAgent : null,
      randomUA: e.target.checked,
    })
    e.target.checked ? setUserAgent(randomUserAgent) : setUserAgent('')
    setRandomUA(e.target.checked)
    if (parseInt(interval)) {
      chrome.alarms.create('userAgentAlarm', {
        delayInMinutes: parseInt(interval),
        periodInMinutes: parseInt(interval),
      })
    }
  }

  const changeInterval = (e) => {
    chrome.storage.sync.set({ interval: e.target.value })
    setInterval(e.target.value)
    if (parseInt(e.target.value)) {
      chrome.alarms.create('userAgentAlarm', {
        delayInMinutes: parseInt(e.target.value),
        periodInMinutes: parseInt(e.target.value),
      })
    }
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
        <input
          type="text"
          value={userAgent}
          onChange={changeUserAgent}
          style={{
            width: '206px',
          }}
        />
        <label>User Agent</label>
      </div>
      <div
        style={{
          margin: '6px 0 0 0',
        }}
      >
        <label
          style={{
            margin: '0 6px 0 0',
          }}
        >
          <input type="checkbox" checked={randomUA} onChange={randomize} />
          Randomize every
        </label>
        <label>
          <input
            type="number"
            value={interval}
            onChange={changeInterval}
            style={{
              width: '30px',
              margin: '0 4px 0 0',
            }}
          />
          minutes
        </label>
      </div>
    </>
  )
}

export default UserAgentSettings
