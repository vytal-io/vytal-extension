import CheckBox from '../../Components/CheckBox'
import Page from '../../Components/Page'

interface OtherOptionsPageProps {
  tab: string
}

const OtherOptionsPage = ({ tab }: OtherOptionsPageProps) => {
  return (
    <Page isCurrentTab={tab === 'otherOptions'} title={'Other Options'}>
      <CheckBox title={'Network Prediction Enabled'} />
      <CheckBox title={'Alternate Error Pages Enabled'} />
      <CheckBox title={'Safe Browsing Reporting Enabled'} />
      <CheckBox title={'Search Suggest Enabled'} />
      <CheckBox title={'Spelling Service Enabled'} />
      <CheckBox title={'Translation Service Enabled'} />
      <CheckBox title={'Hyperlink Auditing Enabled'} />
      <CheckBox title={'Referrers Enabled'} />
      <CheckBox title={'Third Party Cookies Allowed'} />
    </Page>
  )
}

export default OtherOptionsPage
