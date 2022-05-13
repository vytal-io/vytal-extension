import React, { useState, useEffect } from 'react'
import profiles from '../../utils/profiles'
import countryLocales from '../../utils/countryLocales'

const DebugSettings = ({ type, title, ip, profile, setProfile }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (profile === 'none') {
      setValue('')
      chrome.storage.sync.set({ [type]: '' })
    } else if (profile === 'match') {
      if (ip) {
        const ipTypeValue =
          type === 'locale' ? countryLocales[ip.countryCode].locale : ip[type]
        setValue(ipTypeValue)
        chrome.storage.sync.set({ [type]: ipTypeValue })
      }
    } else if (profile === 'custom') {
      chrome.storage.sync.get([type], (result) => {
        console.log(type)
        console.log(result)
        result[type] && setValue(result[type])
      })
    } else if (profile !== 'default') {
      setValue(profiles[profile][type])
      chrome.storage.sync.set({ [type]: profiles[profile][type] })
    }
  }, [ip, profile, type])

  const changeTextValue = (e) => {
    chrome.storage.sync.set({ timezone: e.target.value })
    setValue(e.target.value)
    chrome.storage.sync.set({ profile: 'custom' })
    setProfile('custom')
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '12px 0 0 0',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={changeTextValue}
        style={{
          width: '206px',
        }}
      />
      <label>{title}</label>
    </div>
  )
}

export default DebugSettings
