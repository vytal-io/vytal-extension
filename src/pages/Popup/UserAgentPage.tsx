import React, { useState, useEffect } from 'react'
import { Box, Label, Radio, Flex, Input } from 'theme-ui'
import userAgents from '../../utils/userAgents'
import detachDebugger from '../../utils/detachDebugger'

const LocationPage = () => {
  const [type, setType] = useState('desktop')
  const [userAgent, setUserAgent] = useState('')
  // const [configuration, setConfiguration] = useState('default')

  useEffect(() => {
    chrome.storage.sync.get(['type', 'userAgent'], (result) => {
      result.type && setType(result.type)
      result.userAgent && setUserAgent(result.userAgent)
    })
  }, [])

  const changeType = (e: any) => {
    detachDebugger()
    chrome.storage.sync.set({ type: e.target.value })
    setType(e.target.value)
  }

  const changeUserAgent = (e: any) => {
    detachDebugger()
    chrome.storage.sync.set({ userAgent: e.target.value })
    chrome.storage.sync.set({ type: 'custom' })
    setUserAgent(e.target.value)
    setType('custom')
  }

  return (
    <Box
      sx={{
        m: '12px',
        width: '100%',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '8px' }}>User Agent</Box>
      <Flex mt={'12px'} mb={'8px'}>
        <Label>
          <Radio
            name="type"
            value="desktop"
            onChange={changeType}
            checked={type === 'desktop'}
          />{' '}
          Desktop
        </Label>
        <Label>
          <Radio
            name="type"
            value="mobile"
            onChange={changeType}
            checked={type === 'mobile'}
          />{' '}
          Mobile
        </Label>
        <Label>
          <Radio
            name="type"
            value="custom"
            onChange={changeType}
            checked={type === 'custom'}
          />{' '}
          Custom
        </Label>
      </Flex>
      {/* <UserAgentSelect
        title="Operating System"
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <UserAgentSelect
        title="Browser"
        configuration={configuration}
        setConfiguration={setConfiguration}
      /> */}
      {/* <LocationInput
        type="userAgent"
        title="User Agent"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      /> */}
      <Label htmlFor="userAgent">User Agent</Label>
      <Input name="userAgent" value={userAgent} onChange={changeUserAgent} />
    </Box>
  )
}

export default LocationPage
