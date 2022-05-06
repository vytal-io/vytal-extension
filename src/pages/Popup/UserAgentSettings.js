import React, { useState, useEffect } from 'react'
import userAgents from '../../utils/userAgents'

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
    chrome.storage.sync.set({ userAgent: e.target.value })
    setUserAgent(e.target.value)
  }

  const randomize = (e) => {
    const randomUserAgent =
      userAgents[Math.floor(Math.random() * userAgents.length)]
    chrome.storage.sync.set({
      userAgent: randomUserAgent,
      randomUA: e.target.checked,
    })
    e.target.checked ? setUserAgent(randomUserAgent) : setUserAgent('')
    setRandomUA(e.target.checked)
  }

  const changeInterval = (e) => {
    console.log(e.target.value)
    chrome.storage.sync.set({ interval: e.target.value })
    setInterval(e.target.value)
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
            width: '168px',
          }}
        />
        <label>User Agent</label>
      </div>
      <label>
        <input type="checkbox" checked={randomUA} onChange={randomize} />
        Randomize every
      </label>
      <label>
        <input
          type="text"
          value={interval}
          onChange={changeInterval}
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
