import React, { useState, useEffect } from 'react'
import { ThemeProvider, Flex } from 'theme-ui'
import { theme } from '../../theme'
import { Home, MapPin, Globe, Users, List } from 'react-feather'
import Icon from './Icon'
import LocationPage from './LocationPage'
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
      <Flex
        sx={{
          width: '350px',
          height: '350px',
        }}
      >
        <Flex
          sx={{
            minWidth: '36px',
            backgroundColor: 'primary',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Icon icon={<Home size={20} />} />
          <Icon icon={<MapPin size={20} />} />
          <Icon icon={<Globe size={20} />} />
          <Icon icon={<List size={20} />} />
          <Icon icon={<Users size={20} />} />
        </Flex>
        <LocationPage />
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
