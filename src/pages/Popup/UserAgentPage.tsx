import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Radio, Flex, Input, Select } from 'theme-ui'
import userAgents from '../../utils/userAgents'
import detachDebugger from '../../utils/detachDebugger'

interface UserAgentPageProps {
  tab: string
}

const UserAgentPage = ({ tab }: UserAgentPageProps) => {
  const [type, setType] = useState('none')
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

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    e.target.value === 'none' && setUserAgent('')
    chrome.storage.sync.set({ type: e.target.value })
    setType(e.target.value)
  }

  const changeOperatingSystem = (e: ChangeEvent<HTMLSelectElement>) => {
    chrome.storage.sync.set({ operatingSystem: e.target.value })
    setOperatingSystem(e.target.value)
  }

  const changeBrowser = (e: ChangeEvent<HTMLSelectElement>) => {
    chrome.storage.sync.set({ browser: e.target.value })
    setBrowser(e.target.value)
  }

  const changeUserAgent = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    chrome.storage.sync.set({ userAgent: e.target.value })
    chrome.storage.sync.set({ type: 'custom' })
    setUserAgent(e.target.value)
    setType('custom')
  }

  return (
    <Box
      sx={{
        display: tab === 'useragent' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>User Agent</Box>
      <Flex
        sx={{
          justifyContent: 'space-between',
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

export default UserAgentPage
