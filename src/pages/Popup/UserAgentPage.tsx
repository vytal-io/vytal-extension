import React, { useState, useEffect } from 'react'
import { Box, Label, Radio, Flex, Input, Select } from 'theme-ui'
import userAgents from '../../utils/userAgents'
import detachDebugger from '../../utils/detachDebugger'

const LocationPage = () => {
  const [type, setType] = useState('None')
  const [operatingSystem, setOperatingSystem] = useState('Windows')
  const [browser, setBrowser] = useState('Chrome')
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    chrome.storage.sync.get(
      ['type', 'operatingSystem', 'browser', 'userAgent'],
      (result) => {
        result.type && setType(result.type)
        result.operatingSystem && setOperatingSystem(result.operatingSystem)
        result.browser && setBrowser(result.browser)
        result.userAgent && setUserAgent(result.userAgent)
      }
    )
  }, [])

  useEffect(() => {
    detachDebugger()
    chrome.storage.sync.set({ userAgent })
  }, [userAgent])

  useEffect(() => {
    type === 'preloaded' && setUserAgent(userAgents[operatingSystem][browser])
  }, [operatingSystem, browser, type])

  const changeType = (e: any) => {
    detachDebugger()
    e.target.value === 'none' && setUserAgent('')
    chrome.storage.sync.set({ type: e.target.value })
    setType(e.target.value)
  }

  const changeOperatingSystem = (e: any) => {
    console.log(e.target.value)
    chrome.storage.sync.set({ operatingSystem: e.target.value })
    setOperatingSystem(e.target.value)
  }

  const changeBrowser = (e: any) => {
    chrome.storage.sync.set({ browser: e.target.value })
    setBrowser(e.target.value)
  }

  const changeUserAgent = (e: any) => {
    detachDebugger()
    console.log(e.target.value)
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
      <Flex
        sx={{
          justifyContent: 'space-between',
          mt: '12px',
          mb: '8px',
        }}
      >
        <Label>
          <Radio
            name="type"
            value="none"
            onChange={changeType}
            checked={type === 'none'}
          />{' '}
          None
        </Label>
        <Label>
          <Radio
            name="type"
            value="preloaded"
            onChange={changeType}
            checked={type === 'preloaded'}
          />{' '}
          Preloaded
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
      {type === 'preloaded' && (
        <>
          <Label htmlFor="operatingSystem">Operating System</Label>
          <Select
            name="operatingSystem"
            id="operatingSystem"
            value={operatingSystem}
            onChange={changeOperatingSystem}
            defaultValue=""
            mb={'8px'}
          >
            <option sx={{ display: 'none' }}></option>
            {Object.keys(userAgents).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </Select>
          <Label htmlFor="browser">Browser</Label>
          <Select
            name="browser"
            id="browser"
            value={browser}
            onChange={changeBrowser}
            defaultValue=""
            mb={'8px'}
          >
            {Object.keys(userAgents[operatingSystem]).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </Select>
        </>
      )}
      <Label htmlFor="userAgent">User Agent</Label>
      <Input name="userAgent" value={userAgent} onChange={changeUserAgent} />
    </Box>
  )
}

export default LocationPage
