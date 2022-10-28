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
// import getReverseGeocoding from '../utils/getReverseGeocoding'
import '../assets/global.css'
import OtherOptionsPage from './Pages/OtherOptionsPage'
import addresses from '../utils/addresses'

const Popup = () => {
  const [tab, setTab] = useState('autofill')
  const [ipData, setIpData] = useState<ipData>()
  // const [reverseGeocoding, setReverseGeocoding] = useState<any>(undefined)
  const [geolocation, setGeolocation] = useState<GeolocationCoordinates>()
  const [autofillData, setAutofillData] = useState<any>()

  useEffect(() => {
    getIp().then((ipDataRes) => {
      setIpData(ipDataRes)
      let geoIndex = (ipDataRes.lat + 90) * 180 + ipDataRes.lon
      console.log(geoIndex)
      let closest = addresses.reduce((prev: any, curr: any) => {
        return Math.abs(curr.geoIndex - geoIndex) <
          Math.abs(prev.geoIndex - geoIndex)
          ? curr
          : prev
      })
      setAutofillData(closest)
    })
    navigator.geolocation.getCurrentPosition(
      (pos) => setGeolocation(pos.coords),
      (err) => console.warn(`ERROR(${err.code}): ${err.message}`),
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '455px',
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
          <SystemPage tab={tab} ipData={ipData} geolocation={geolocation} />
          <AutofillPage
            tab={tab}
            autofillData={autofillData}
            // reverseGeocoding={reverseGeocoding}
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
