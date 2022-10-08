import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Radio, Flex, Input, Select } from 'theme-ui'
import userAgents from '../../../utils/userAgents'
import detachDebugger from '../../../utils/detachDebugger'

interface UserAgentPageProps {
  tab: string
}

const UserAgentPage = ({ tab }: UserAgentPageProps) => {
  const [type, setType] = useState('none')
  const [operatingSystem, setOperatingSystem] = useState('Windows')
  const [browser, setBrowser] = useState('Chrome')
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    chrome.storage.local.get(
      ['type', 'operatingSystem', 'browser', 'userAgent'],
      (storage) => {
        storage.type && setType(storage.type)
        storage.operatingSystem && setOperatingSystem(storage.operatingSystem)
        storage.browser && setBrowser(storage.browser)
        storage.userAgent && setUserAgent(storage.userAgent)
      }
    )
  }, [])

  useEffect(() => {
    detachDebugger()
    chrome.storage.local.set({ userAgent })
  }, [userAgent])

  useEffect(() => {
    type === 'preloaded' && setUserAgent(userAgents[operatingSystem][browser])
  }, [operatingSystem, browser, type])

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    e.target.value === 'none' && setUserAgent('')
    chrome.storage.local.set({ type: e.target.value })
    setType(e.target.value)
  }

  const changeOperatingSystem = (e: ChangeEvent<HTMLSelectElement>) => {
    chrome.storage.local.set({ operatingSystem: e.target.value })
    setOperatingSystem(e.target.value)
  }

  const changeBrowser = (e: ChangeEvent<HTMLSelectElement>) => {
    chrome.storage.local.set({ browser: e.target.value })
    setBrowser(e.target.value)
  }

  const changeUserAgent = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    chrome.storage.local.set({ userAgent: e.target.value })
    chrome.storage.local.set({ type: 'custom' })
    setUserAgent(e.target.value)
    setType('custom')
  }

  return (
    <Box
      sx={{
        display: tab === 'useragent' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        User Agent
      </Box>
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
          />
          None
        </Label>
        <Label>
          <Radio
            name="type"
            value="preloaded"
            onChange={changeType}
            checked={type === 'preloaded'}
          />
          Preloaded
        </Label>
        <Label>
          <Radio
            name="type"
            value="custom"
            onChange={changeType}
            checked={type === 'custom'}
          />
          Custom
        </Label>
      </Flex>
      {type === 'preloaded' && (
        <Flex sx={{ gap: '16px' }}>
          <Box sx={{ width: '100%' }}>
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
          </Box>
          <Box sx={{ width: '100%' }}>
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
          </Box>
        </Flex>
      )}
      <Label htmlFor="userAgent">User Agent</Label>
      <Input name="userAgent" value={userAgent} onChange={changeUserAgent} />
    </Box>
  )
}

export default UserAgentPage
