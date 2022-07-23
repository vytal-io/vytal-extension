import React, { useState, useEffect } from 'react'
import { Box, Label, Input, Flex, Button } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IPData from './IPData'
import getIP from '../../utils/getIP'

const WhitelistPage = ({ tab }: any) => {
  const [ip, setIP] = useState(null)
  const [configuration, setConfiguration] = useState('default')
  const [currentUrl, setCurrentUrl] = useState('')
  const [whitelist, setWhitelist] = useState<string[]>([])

  const getCurrentUrl = async () => {
    const queryOptions = { active: true, lastFocusedWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    if (tab.url) {
      const domain = new URL(tab.url)
      const hostname = domain.hostname.replace('www.', '')
      if (hostname.includes('.')) {
        setCurrentUrl(hostname)
      }
    }
  }

  useEffect(() => {
    getCurrentUrl()
    chrome.storage.sync.get(['whitelist'], (result) => {
      result.whitelist && setWhitelist(result.whitelist)
    })
  }, [])

  useEffect(() => {
    chrome.storage.sync.set({ whitelist })
  }, [whitelist])

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
        <Input name="url" value={currentUrl} spellCheck="false" />
        <Button
          onClick={() => {
            setWhitelist((prevWhitelist) => [...prevWhitelist, currentUrl])
            // detachDebugger()
          }}
          sx={{ height: '28px', flexShrink: 0, ml: '8px' }}
        >
          Add
        </Button>
      </Flex>
      {whitelist.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        )
      })}
    </Box>
  )
}

export default WhitelistPage
