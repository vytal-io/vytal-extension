import { useState, useEffect } from 'react'
import { Box, Label, Select } from 'theme-ui'
import setWebRtcPolicy from '../WebRtcPage/handleWebRtcPolicy'
import SettingsCheckBox from './SettingsCheckBox'

interface LocationPageProps {
  tab: string
}

const SettingsPage = ({ tab }: LocationPageProps) => {
  const [isWebRtcDisabled, setIsWebRtcDisabled] = useState(false)

  useEffect(() => {
    chrome.storage.local.get(['isWebRtcDisabled'], (storage) => {
      storage.isWebRtcDisabled && setIsWebRtcDisabled(storage.isWebRtcDisabled)
    })
  }, [])

  chrome.privacy.network.webRTCIPHandlingPolicy.onChange.addListener(function (
    details
  ) {
    if (details.value === 'disable_non_proxied_udp') {
      setIsWebRtcDisabled(true)
    } else {
      setIsWebRtcDisabled(false)
    }
  })

  return (
    <Box
      sx={{
        display: tab === 'settings' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>Settings</Box>
      {/* <SettingsCheckBox
        title={'Disable WebRTC'}
        onChange={setWebRtcPolicy}
        checked={isWebRtcDisabled}
      /> */}
      <SettingsCheckBox title={'Disable Address Autofill'} />
      <SettingsCheckBox title={'Dark Mode'} />
      <Label htmlFor="configuration">Language</Label>
      <Select name="Language" id="Language">
        <option>Arabic</option>
        <option>Bengali</option>
        <option>English</option>
        <option>French</option>
        <option>Hindi</option>
        <option>Mandarin Chinese</option>
        <option>Persian</option>
        <option>Portuguese</option>
        <option>Russian</option>
        <option>Spanish</option>
        <option>Turkish</option>
        <option>Ukrainian</option>
        <option>Urdu</option>
        {/* {Object.keys(configurations).map((key) => (
            <option value={key} key={key}>
              {configurations[key].name}
            </option>
          ))} */}
      </Select>
    </Box>
  )
}

export default SettingsPage
