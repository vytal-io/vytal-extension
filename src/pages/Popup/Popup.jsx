import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import IpSettings from './IpSettings'
import DebugSettings from './DebugSettings'
import detachDebugger from '../../utils/detachDebugger'
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

  const changeProfile = (e) => {
    detachDebugger()
    chrome.storage.sync.set({
      profile: e.target.value,
    })
    setProfile(e.target.value)
  }

  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          padding: '12px',
        }}
      >
        <IpSettings ip={ip} getIP={getIP} setIP={setIP} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '12px 0 0 0',
          }}
        >
          <select
            name="profile"
            id="profile"
            value={profile}
            onChange={changeProfile}
            style={{
              width: '176px',
            }}
          >
            <option value="none">None</option>
            <option value="match">Match IP</option>
            <option value="custom">Custom</option>
            <optgroup label="Locations">
              <option value="baghdad">Baghdad</option>
              <option value="bangkok">Bangkok</option>
              <option value="berlin">Berlin</option>
              <option value="cairo">Cairo</option>
              <option value="delhi">Delhi</option>
              <option value="dubai">Dubai</option>
              <option value="hongKong">Hong Kong</option>
              <option value="houston">Houston</option>
              <option value="istanbul">Istanbul</option>
              <option value="jerusalem">Jerusalem</option>
              <option value="kyiv">Kyiv</option>
              <option value="lagos">Lagos</option>
              <option value="london">London</option>
              <option value="mecca">Mecca</option>
              <option value="mexicoCity">Mexico City</option>
              <option value="moscow">Moscow</option>
              <option value="mumbai">Mumbai</option>
              <option value="newYork">New York</option>
              <option value="paris">Paris</option>
              <option value="rome">Rome</option>
              <option value="sanFrancisco">San Francisco</option>
              <option value="saoPaulo">São Paulo</option>
              <option value="seoul">Seoul</option>
              <option value="shanghai">Shanghai</option>
              <option value="singapore">Singapore</option>
              <option value="sydney">Sydney</option>
              <option value="tehran">Tehran</option>
              <option value="tokyo">Tokyo</option>
              <option value="toronto">Toronto</option>
            </optgroup>
          </select>
          <label>Profile</label>
        </div>

        <DebugSettings
          type="timezone"
          title="Timezone"
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
        {/* <LocaleSettings ip={ip} /> */}
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
