import React, { useState, useEffect } from 'react'
import { Box, Label, Radio, Flex, Input, Select } from 'theme-ui'
import userAgents from '../../utils/userAgents'
import detachDebugger from '../../utils/detachDebugger'
import UserAgentSelect from './UserAgentSelect'

const LocationPage = () => {
  const [type, setType] = useState('desktop')
  const [operatingSystem, setOperatingSystem] = useState('linux')
  const [browser, setBrowser] = useState('')
  const [userAgent, setUserAgent] = useState('')

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

  const changeOperatingSystem = (e: any) => {
    // detachDebugger()
    // chrome.storage.sync.set({ userAgent: e.target.value })
    // chrome.storage.sync.set({ type: 'custom' })
    // setUserAgent(e.target.value)
    // setType('custom')
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
      {(type === 'desktop' || type === 'mobile') && (
        <>
          <Label htmlFor="operatingSystem">Operating System</Label>
          <Select
            name="operatingSystem"
            id="operatingSystem"
            value={operatingSystem}
            onChange={changeOperatingSystem}
            mb={'8px'}
          >
            {Object.keys(userAgents[type]).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </Select>
          <Label htmlFor="browser">Browser</Label>
          <Select
            name="browser"
            id="browser"
            // value={operatingSystem}
            // onChange={changeOperatingSystem}
            mb={'8px'}
          >
            {Object.keys(userAgents[type][operatingSystem]).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </Select>
          {/* <UserAgentSelect
            title="Operating System"
            configuration={operatingSystem}
            setConfiguration={setOperatingSystem}
          />
          <UserAgentSelect
            title="Browser"
            configuration={browser}
            setConfiguration={setBrowser}
          /> */}
        </>
      )}
      <Label htmlFor="userAgent">User Agent</Label>
      <Input name="userAgent" value={userAgent} onChange={changeUserAgent} />
    </Box>
  )
}

export default LocationPage
