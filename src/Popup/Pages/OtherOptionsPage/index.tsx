import SettingsCheckBox from '../SettingsPage/SettingsCheckBox'
import Page from '../../Components/Page'

interface OtherOptionsPageProps {
  tab: string
}

const OtherOptionsPage = ({ tab }: OtherOptionsPageProps) => {
  return (
    <Page isCurrentTab={tab === 'otherOptions'} title={'Other Options'}>
      <SettingsCheckBox title={'Network Prediction Enabled'} />
      <SettingsCheckBox title={'Alternate Error Pages Enabled'} />
      <SettingsCheckBox title={'Safe Browsing Reporting Enabled'} />
      <SettingsCheckBox title={'Search Suggest Enabled'} />
      <SettingsCheckBox title={'Spelling Service Enabled'} />
      <SettingsCheckBox title={'Translation Service Enabled'} />
      <SettingsCheckBox title={'Hyperlink Auditing Enabled'} />
      <SettingsCheckBox title={'Referrers Enabled'} />
      <SettingsCheckBox title={'Third Party Cookies Allowed'} />
    </Page>
  )
}

export default OtherOptionsPage
