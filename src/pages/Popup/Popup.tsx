import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../theme'
import { Home, MapPin, Globe, Command, Users, List } from 'react-feather'
import Icon from './Icon'
// import Navbar from './Navbar'
// import IpSettings from './IpSettings'
// import ProfileSelect from './ProfileSelect'
// import DebugSettings from './DebugSettings'
// import UserAgentSettings from './UserAgentSettings'

const Popup = () => {
  const [ip, setIP] = useState(null)
  const [profile, setProfile] = useState('default')

  useEffect(() => {}, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div
          sx={{
            display: 'flex',
            height: '350px',
            width: '100%',
          }}
        >
          <div
            sx={{
              width: '36px',
              backgroundColor: 'var(--main)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Icon icon={<Home size={20} />} />
            <Icon icon={<MapPin size={20} />} />
            <Icon icon={<Globe size={20} />} />
            <Icon icon={<Command size={20} />} />
            <Icon icon={<List size={20} />} />
            <Icon icon={<Users size={20} />} />
          </div>
          <div style={{}}></div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Popup
