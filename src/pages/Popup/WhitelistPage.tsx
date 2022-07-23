import React, { useState, useEffect } from 'react'
import { Box, Label, Input, Flex } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IPData from './IPData'
import getIP from '../../utils/getIP'

const WhitelistPage = ({ tab }: any) => {
  const [ip, setIP] = useState(null)
  const [configuration, setConfiguration] = useState('default')
  const [currentUrl, setCurrentUrl] = useState('')

  const getCurrentUrl = async () => {
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
    if (tab.url) {
      let domain = new URL(tab.url)
      setCurrentUrl(domain.hostname.replace('www.', ''))
    }
  }

  useEffect(() => {
    getCurrentUrl()
  }, [])

  return (
    <Box
      sx={{
        m: '12px',
        width: '100%',
        display: tab === 'whitelist' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '8px' }}>Whitelist</Box>
      <Flex>
        <Input name="url" value={currentUrl} />
      </Flex>
    </Box>
  )
}

export default WhitelistPage
