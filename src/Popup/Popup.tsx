import { useState } from 'react'
import { ThemeProvider, Flex, Box } from 'theme-ui'
import { theme } from '../theme'
import { MapPin, Globe, Info } from 'react-feather'
import TabItem from './TabItem'
import LocationPage from './Pages/LocationPage'
import UserAgentPage from './Pages/UserAgentPage'
import SettingsPage from './Pages/SettingsPage'
import '../assets/global.css'

const Popup = () => {
  const [tab, setTab] = useState('location')

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '440px',
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
          <TabItem
            Icon={MapPin}
            active={tab === 'location'}
            onClick={() => setTab('location')}
          />
          <TabItem
            Icon={Globe}
            active={tab === 'userAgent'}
            onClick={() => setTab('userAgent')}
          />
          <TabItem
            Icon={Info}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          />
        </Flex>
        <Box sx={{ m: '12px', width: '100%' }}>
          <LocationPage tab={tab} />
          <UserAgentPage tab={tab} />
          <SettingsPage tab={tab} />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
