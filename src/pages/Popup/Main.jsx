import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import IpSettings from './IpSettings'
import ProfileSelect from './ProfileSelect'
import DebugSettings from './DataInput'
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
  const [profile, setProfile] = useState('default')

  useEffect(() => {
    chrome.storage.sync.get(['profile', 'ipData'], (result) => {
      result.profile && setProfile(result.profile)
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
        <ProfileSelect profile={profile} setProfile={setProfile} />
        <DebugSettings
          type="timezone"
          title="Timezone"
          ip={ip}
          profile={profile}
          setProfile={setProfile}
        />
        <DebugSettings
          type="locale"
          title="Locale"
          ip={ip}
          profile={profile}
          setProfile={setProfile}
        />
        <DebugSettings
          type="lat"
          title="Latitude"
          ip={ip}
          profile={profile}
          setProfile={setProfile}
        />
        <DebugSettings
          type="lon"
          title="Longitude"
          ip={ip}
          profile={profile}
          setProfile={setProfile}
        />
        <UserAgentSettings ip={ip} type="lat" title="Latitude" />
        <div
          style={{
            margin: '8px 0 0 0',
            fontSize: '10px',
          }}
        >
          Current tab won't be fully spoofed until after first or second reload.
        </div>
      </div>
    </div>
  )
}

export default Popup
