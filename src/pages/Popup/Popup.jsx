import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import IpSettings from './IpSettings'
import DebugSettings from './DebugSettings'
import LocaleSettings from './LocaleSettings'
import UserAgentSettings from './UserAgentSettings'

const getIP = () =>
  fetch('http://ip-api.com/json/')
    .then((response) => response.json())
    .then((ipData) => {
      chrome.storage.sync.set({ ipData })
      return ipData
    })

const Popup = () => {
  const [ip, setIP] = useState(null)

  useEffect(() => {
    chrome.storage.sync.get(['ipData'], (result) => {
      if (result.ipData) {
        setIP(result.ipData)
      } else {
        Promise.resolve(getIP()).then((ipData) => setIP(ipData))
      }
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          padding: '12px',
        }}
      >
        <IpSettings ip={ip} getIP={getIP} setIP={setIP} />
        <DebugSettings type="timezone" title="Timezone" ip={ip} />
        <DebugSettings type="lat" title="Latitude" ip={ip} />
        <DebugSettings type="lon" title="Longitude" ip={ip} />
        <LocaleSettings ip={ip} />
        <UserAgentSettings ip={ip} type="lat" title="Latitude" />
        <div
          style={{
            margin: '12px 0 0 0',
            fontSize: '10px',
          }}
        >
          Leave field blank to use real value.
        </div>
      </div>
    </div>
  )
}

export default Popup
