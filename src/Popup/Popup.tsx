import { useState, useEffect } from 'react'
import { ThemeProvider, Flex, Box } from 'theme-ui'
import { theme } from '../theme'
import {
  Wifi,
  HardDrive,
  FileText,
  MessageSquare,
  Globe,
  Settings,
} from 'react-feather'
import TabItem from './TabItem'
import SystemPage from './Pages/SystemPage'
import UserAgentPage from './Pages/UserAgentPage'
import SettingsPage from './Pages/SettingsPage'
import AutofillPage from './Pages/AutofillPage'
import WebRtcPage from './Pages/WebRtcPage'
import ConnectionPage from './Pages/ConnectionPage'
import { ipData } from '../types'
import getIp from '../utils/getIp'
import getReverseGeocoding from '../utils/getReverseGeocoding'
import '../assets/global.css'
import OtherOptionsPage from './Pages/OtherOptionsPage'

const Popup = () => {
  const [tab, setTab] = useState('autofill')
  const [ipData, setIpData] = useState<ipData | undefined>(undefined)
  const [reverseGeocoding, setReverseGeocoding] = useState<any>(undefined)

  useEffect(() => {
    getIp().then((ipDataRes) => {
      setIpData(ipDataRes)
      if (ipDataRes.lat && ipDataRes.lon) {
        getReverseGeocoding(ipDataRes.lat, ipDataRes.lon).then(
          (reverseGeocodingRes) => {
            setReverseGeocoding(reverseGeocodingRes)
            console.log(reverseGeocodingRes)
          }
        )
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '410px',
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
            Icon={Wifi}
            active={tab === 'connection'}
            onClick={() => setTab('connection')}
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
            active={tab === 'userAgent'}
            onClick={() => setTab('userAgent')}
          />
          {/* <TabItem
            Icon={Sliders}
            active={tab === 'otherOptions'}
            onClick={() => setTab('otherOptions')}
          /> */}
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
          <ConnectionPage tab={tab} ipData={ipData} />
          <SystemPage tab={tab} ipData={ipData} />
          <AutofillPage
            tab={tab}
            ipData={ipData}
            reverseGeocoding={reverseGeocoding}
          />
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
            Connection tab won't be fully spoofed until after 1st or 2nd reload.
          </Text> */}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
