import { Button, Link, Text } from 'theme-ui'
import Checkbox from 'popup/components/CheckBox'

import Page from 'popup/components/Page'

interface OptionsPageProps {
  tab: string
}

const OptionsPage = ({ tab }: OptionsPageProps) => {
  return (
    <Page isCurrentTab={tab === 'options'} title={'Other Options'}>
      {/* <Checkbox
        title="Network Prediction Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Alternate Error Pages Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Password Saving Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      /> */}
      <Checkbox
        title="Safe Browsing Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Safe Browsing Extended Reporting Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Search Suggest Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Spelling Service Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Translation Service Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Ad Measurement Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Do Not Track Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Fledge Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Hyperlink Auditing Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Protected Content Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Referrers Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Third Party Cookies Allowed"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Topics Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
    </Page>
  )
}

export default OptionsPage
