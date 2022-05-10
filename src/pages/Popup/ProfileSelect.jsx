import React from 'react'
import detachDebugger from '../../utils/detachDebugger'

const ProfileSelect = ({ profile, setProfile }) => {
  
  const changeProfile = (e) => {
    detachDebugger()
    chrome.storage.sync.set({
      profile: e.target.value,
    })
    setProfile(e.target.value)
  }

  return (
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
          width: '208px',
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
  )
}

export default ProfileSelect
