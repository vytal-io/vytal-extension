import React, { useState, useEffect } from 'react'
import { Box, Input, Flex, Button, Close } from 'theme-ui'

const WhitelistPage = ({ tab }: any) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    !whitelist.includes(e.target.url.value) &&
      setWhitelist((prevWhitelist) => [...prevWhitelist, e.target.url.value])
    // detachDebugger()
  }

  return (
    <Box
      sx={{
        m: '12px',
        width: '100%',
        display: tab === 'whitelist' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>Whitelist</Box>
      <Flex as="form" onSubmit={(e) => handleSubmit(e)}>
        <Input name="url" defaultValue={currentUrl} spellCheck="false" />
        <Button sx={{ height: '28px', flexShrink: 0, ml: '8px' }}>Add</Button>
      </Flex>
      {whitelist.length ? (
        <Box
          sx={{
            border: '1px solid ',
            borderRadius: '4px',
            borderColor: 'grey',
            p: '2px 8px',
            my: '8px',
            maxHeight: '260px',
            overflow: 'auto',
          }}
        >
          {whitelist.map((element, index) => {
            return (
              <Flex
                key={index}
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  my: '8px',
                }}
              >
                {element}{' '}
                <Close
                  sx={{ width: '24px', height: '24px' }}
                  onClick={() =>
                    setWhitelist(whitelist.filter((item) => item !== element))
                  }
                />
              </Flex>
            )
          })}
        </Box>
      ) : null}
    </Box>
  )
}

export default WhitelistPage
