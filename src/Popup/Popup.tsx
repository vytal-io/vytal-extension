import { useState } from 'react'
import { ThemeProvider, Flex, Box } from 'theme-ui'
import { theme } from '../theme'
import {
  Wifi,
  MessageSquare,
  FileText,
  MapPin,
  Globe,
  Info,
  Settings,
  Sliders,
} from 'react-feather'
import VpnIcon from '../assets/vpnIcon.svg'
import TabItem from './TabItem'
import LocationPage from './Pages/LocationPage'
import UserAgentPage from './Pages/UserAgentPage'
import VpnPage from './Pages/VpnPage'
import SettingsPage from './Pages/SettingsPage'
import '../assets/global.css'

const Popup = () => {
  const [tab, setTab] = useState('location')

  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ height: '100%' }}>
        <Flex
          sx={{
            minWidth: '36px',
            backgroundColor: 'primary',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {/* <TabItem
            Icon={<Wifi size={20} />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          /> */}
          <TabItem
            Icon={<MapPin size={20} />}
            active={tab === 'location'}
            onClick={() => setTab('location')}
          />
          {/* <TabItem
            Icon={<FileText size={20} />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          /> */}
          {/* <TabItem
            Icon={<MessageSquare size={20} />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          /> */}
          <TabItem
            Icon={<Globe size={20} />}
            active={tab === 'userAgent'}
            onClick={() => setTab('userAgent')}
          />
          {/* <TabItem
            Icon={<img src={VpnIcon} className="App-logo" alt="logo" />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          /> */}
          {/* <TabItem
            Icon={<Sliders size={20} />}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          /> */}
          <TabItem
            Icon={<Info size={20} />}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          />
        </Flex>
        <Box sx={{ m: '16px', width: '100%' }}>
          <LocationPage tab={tab} />
          <UserAgentPage tab={tab} />
          {/* <VpnPage tab={tab} /> */}
          <SettingsPage tab={tab} />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
