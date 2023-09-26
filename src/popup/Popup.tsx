import { useState } from 'react'
import { ThemeProvider, Flex, Box } from 'theme-ui'
import { theme } from 'theme'
import {
  Home,
  Wifi,
  MessageSquare,
  FileText,
  MapPin,
  Globe,
  Info,
  Settings,
  Sliders,
  UserCheck,
} from 'react-feather'
import VpnIcon from '../assets/vpnIcon.svg'
import TabItem from './TabItem'
import HomePage from './pages/homePage'
import LocationPage from './pages/locationPage'
import AutofillPage from './pages/autofillPage'
import WebRtcPage from './pages/webRtcPage'
import UserAgentPage from './pages/userAgentPage'
import OptionsPage from './pages/optionsPage'
import VpnPage from './pages/vpnPage'
import SettingsPage from './pages/settingsPage'
import InfoPage from './pages/infoPage'
import '../assets/global.css'

import Logo from '../assets/logo-no-bg.svg'

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
            title="Home"
            Icon={<Home size={20} />}
            // Icon={<img src={Logo} height="20" width="20" alt="logo" />}
            active={tab === 'home'}
            onClick={() => setTab('home')}
          /> */}
          <TabItem
            title="Connection Info"
            Icon={<Wifi size={20} />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          />
          <TabItem
            title="Location Data"
            Icon={<MapPin size={20} />}
            active={tab === 'location'}
            onClick={() => setTab('location')}
          />
          <TabItem
            title="Captcha Solver"
            Icon={<UserCheck size={20} />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          />
          <TabItem
            title="Autofill Data"
            Icon={<FileText size={20} />}
            active={tab === 'autofill'}
            onClick={() => setTab('autofill')}
          />
          <TabItem
            title="WebRTC Policy"
            Icon={<MessageSquare size={20} />}
            active={tab === 'webRtc'}
            onClick={() => setTab('webRtc')}
          />
          <TabItem
            title="User Agent"
            Icon={<Globe size={20} />}
            active={tab === 'userAgent'}
            onClick={() => setTab('userAgent')}
          />
          <TabItem
            title="Other Options"
            Icon={<Sliders size={20} />}
            active={tab === 'options'}
            onClick={() => setTab('options')}
          />
          {/* <TabItem
            title="VPN Recommendations"
            Icon={<img src={VpnIcon} alt="VPN Icon" />}
            active={tab === 'vpn'}
            onClick={() => setTab('vpn')}
          /> */}
          <TabItem
            title="Settings"
            Icon={<Settings size={20} />}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          />
          <Flex sx={{ flexGrow: 1, alignItems: 'flex-end' }}>
            <TabItem
              title="info"
              // Icon={<img src={Logo} height="20" width="20" alt="logo" />}
              Icon={<Info size={20} />}
              active={tab === 'info'}
              onClick={() => setTab('info')}
            />
          </Flex>
        </Flex>
        <Box sx={{ m: '16px', width: '100%' }}>
          <HomePage tab={tab} setTab={setTab} />
          <LocationPage tab={tab} setTab={setTab} />
          <AutofillPage tab={tab} />
          <WebRtcPage tab={tab} />
          <UserAgentPage tab={tab} />
          <OptionsPage tab={tab} />
          {/* <VpnPage tab={tab} /> */}
          <SettingsPage tab={tab} setTab={setTab} />
          <InfoPage tab={tab} setTab={setTab} />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
