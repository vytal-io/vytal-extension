import { useState, useEffect } from 'react'
import { Box, Label, Select } from 'theme-ui'
import setWebRtcPolicy from '../../utils/setWebRtcPolicy'
import SettingsCheckBox from './SettingsCheckBox'

interface LocationPageProps {
  tab: string
}

const SettingsPage = ({ tab }: LocationPageProps) => {
  const [isWebRtcDisabled, setIsWebRtcDisabled] = useState(false)

  useEffect(() => {
    chrome.storage.sync.get(['isWebRtcDisabled'], (storage) => {
      storage.isWebRtcDisabled && setIsWebRtcDisabled(storage.isWebRtcDisabled)
    })
  }, [])

  return (
    <Box
      sx={{
        display: tab === 'settings' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>Settings</Box>
      <SettingsCheckBox
        title={'Block WebRTC'}
        onChange={() => {
          setWebRtcPolicy()
          setIsWebRtcDisabled(!isWebRtcDisabled)
        }}
        checked={isWebRtcDisabled}
      />
      <SettingsCheckBox title={'Block Address Autofill'} />
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
