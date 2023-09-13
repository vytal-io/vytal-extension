import { Button, Link, Text } from 'theme-ui'
import Checkbox from 'popup/components/CheckBox'

import Page from 'popup/components/Page'

interface AutofillPageProps {
  tab: string
}

const AutofillPage = ({ tab }: AutofillPageProps) => {
  return (
    <Page isCurrentTab={tab === 'autofill'} title={'Autofill Data'}>
      <Checkbox
        title="Autofill Address Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
      <Checkbox
        title="Autofill Credit Card Enabled"
        // onChange={changeBrowserDefault}
        // checked={browserDefault}
      />
    </Page>
  )
}

export default AutofillPage
