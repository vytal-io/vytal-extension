import { useState, useEffect } from 'react'
import { ThemeProvider, Flex, Box } from 'theme-ui'
import { theme } from '../theme'
import {
  MapPin,
  HardDrive,
  FileText,
  MessageSquare,
  Globe,
  Sliders,
  Settings,
} from 'react-feather'
import TabItem from './TabItem'
import SystemPage from './Pages/SystemPage'
import UserAgentPage from './Pages/UserAgentPage'
import SettingsPage from './Pages/SettingsPage'
import AutofillPage from './Pages/AutofillPage'
import WebRtcPage from './Pages/WebRtcPage'
import CurrentPage from './Pages/CurrentPage'
import { ipData } from '../types'
import getIp from '../utils/getIp'
import '../assets/global.css'
import OtherOptionsPage from './Pages/OtherOptionsPage'

const Popup = () => {
  const [tab, setTab] = useState('webRtc')
  const [ipData, setIpData] = useState<ipData | undefined>(undefined)

  useEffect(() => {
    Promise.resolve(getIp()).then((data) => {
      setIpData(data)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '400px',
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
            active={tab === 'current'}
            onClick={() => setTab('current')}
          />
          <TabItem
            Icon={HardDrive}
            active={tab === 'system'}
            onClick={() => setTab('system')}
          />
          <TabItem
            Icon={FileText}
            active={tab === 'autofill'}
            onClick={() => setTab('autofill')}
          />
          <TabItem
            Icon={MessageSquare}
            active={tab === 'webRtc'}
            onClick={() => setTab('webRtc')}
          />
          <TabItem
            Icon={Globe}
            active={tab === 'useragent'}
            onClick={() => setTab('useragent')}
          />
          <TabItem
            Icon={Sliders}
            active={tab === 'otherOptions'}
            onClick={() => setTab('otherOptions')}
          />
          <TabItem
            Icon={Settings}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          />
          {/* <TabItem
            Icon={ExternalLink}
            onClick={() => window.open('https://vytal.io')}
          /> */}
        </Flex>
        <Box sx={{ m: '12px', width: '100%' }}>
          <CurrentPage tab={tab} />
          <SystemPage tab={tab} ipData={ipData} />
          <AutofillPage tab={tab} />
          <WebRtcPage tab={tab} />
          <UserAgentPage tab={tab} />
          <OtherOptionsPage tab={tab} />
          <SettingsPage tab={tab} />
          {/* <Text
            sx={{
              mb: '8px',
              fontSize: '10px',
              position: 'fixed',
              bottom: '0',
            }}
          >
            Current tab won't be fully spoofed until after 1st or 2nd reload.
          </Text> */}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
