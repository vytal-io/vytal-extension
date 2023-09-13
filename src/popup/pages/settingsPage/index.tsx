import { Button, Link, Text, Box, Label, Select } from 'theme-ui'
import Page from 'popup/components/Page'
import Checkbox from 'popup/components/CheckBox'

interface SettingsPageProps {
  tab: string
  setTab: (tab: string) => void
}

const SettingsPage = ({ tab, setTab }: SettingsPageProps) => {
  return (
    <Page isCurrentTab={tab === 'settings'} title={'Settings'}>
      <Checkbox
        title="Dark Mode"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Box sx={{ width: '100%' }}>
        <Label
          htmlFor="type
        "
        >
          Default Popup Page
        </Label>
        <Select
          name="type"
          id="type"
          // value={userAgentInfo}
          // onChange={changeUserAgentInfo}
          mb={'8px'}
        >
          {/* <option value="custom">Custom</option>
          {Object.keys(userAgents).map((key) => (
            <optgroup key={key} label={userAgents[key].title}>
              {userAgents[key].values.map((key: any) => (
                <option key={key.value} value={JSON.stringify(key)}>
                  {key.title}
                </option>
              ))}
            </optgroup>
          ))} */}
          <option>Home</option>
          <option>Location Data</option>
          <option>Other Settings</option>
        </Select>
      </Box>
    </Page>
  )
}

export default SettingsPage
