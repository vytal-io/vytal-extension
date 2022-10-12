import { Label, Select } from 'theme-ui'
import Page from '../../Components/Page'
import CheckBox from '../../Components/CheckBox'  

interface SystemPageProps {
  tab: string
}

const SettingsPage = ({ tab }: SystemPageProps) => {
  return (
    <Page isCurrentTab={tab === 'settings'} title={'Settings'}>
      <CheckBox title={'Disable Address Autofill'} />
      <CheckBox title={'Dark Mode'} />
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
    </Page>
  )
}

export default SettingsPage
