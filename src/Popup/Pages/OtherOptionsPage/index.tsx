import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Radio, Flex, Input, Select, Divider } from 'theme-ui'
import userAgents from '../../../utils/userAgents'
import detachDebugger from '../../../utils/detachDebugger'
import SettingsCheckBox from '../SettingsPage/SettingsCheckBox'

interface OtherOptionsPageProps {
  tab: string
}

const OtherOptionsPage = ({ tab }: OtherOptionsPageProps) => {
  return (
    <Box
      sx={{
        display: tab === 'otherOptions' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        Other Options
      </Box>

      <SettingsCheckBox title={'Network Prediction Enabled'} />
      <SettingsCheckBox title={'Alternate Error Pages Enabled'} />
      <SettingsCheckBox title={'Search Suggest Enabled'} />
      <SettingsCheckBox title={'Spelling Service Enabled'} />
      <SettingsCheckBox title={'Translation Service Enabled'} />
      <SettingsCheckBox title={'Hyperlink Auditing Enabled'} />
      <SettingsCheckBox title={'Referrers Enabled'} />
      <SettingsCheckBox title={'Third Party Cookies Allowed'} />
    </Box>
  )
}

export default OtherOptionsPage
