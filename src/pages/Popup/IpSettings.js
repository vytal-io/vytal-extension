import React from 'react'
import detachDebugger from '../../utils/detachDebugger'

const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

const IpSettings = ({ ip, getIP, setIP }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        Current IP: {ip && `${ip.query} ${getFlagEmoji(ip.countryCode)}`}
      </div>
      <button
        type="button"
        onClick={() => {
          Promise.resolve(getIP()).then((ipData) => setIP(ipData))
          detachDebugger()
        }}
      >
        Reload
      </button>
    </div>
  )
}

export default IpSettings
