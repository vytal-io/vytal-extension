import { useState, useEffect } from 'react'
import { Box, Label, Checkbox, Select } from 'theme-ui'
import SettingsCheckBox from './SettingsCheckBox'

interface LocationPageProps {
  tab: string
}

const SettingsPage = ({ tab }: LocationPageProps) => {
  const [ip, setIP] = useState(null)

  useEffect(() => {}, [])

  return (
    <Box
      sx={{
        display: tab === 'settings' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>Settings</Box>
      <SettingsCheckBox title={'Block WebRTC'} />
      <SettingsCheckBox title={'Block Address Autofill'} />
      <SettingsCheckBox title={'Dark Mode'} />
      <Label htmlFor="configuration">Language</Label>
      <Select name="Language" id="Language">
        <option>English</option>
        <option>French</option>
        <option>Chinese</option>
        <option>Russian</option>
        <option>Farsi</option>

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
