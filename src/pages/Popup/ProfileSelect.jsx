import React from 'react'
import profiles from '../../utils/profiles'
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
          width: '214px',
        }}
      >
        <option value="none">None</option>
        <option value="match">Match IP</option>
        <option value="custom">Custom</option>
        <optgroup label="Locations">
          {Object.keys(profiles).map((key) => (
            <option value={key}>{profiles[key].name}</option>
          ))}
        </optgroup>
      </select>
      <label>Profile</label>
    </div>
  )
}

export default ProfileSelect
