import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Radio, Flex, Select } from 'theme-ui'
import DebouncedInput from '../../Components/DebouncedInput'
import userAgents from '../../../utils/userAgents'
import detachDebugger from '../../../utils/detachDebugger'
import Page from '../../Components/Page'
import CheckBox from '../../Components/CheckBox'

interface UserAgentPageProps {
  tab: string
}

const UserAgentPage = ({ tab }: UserAgentPageProps) => {
  const [userAgentType, setUserAgentType] = useState('none')
  const [operatingSystem, setOperatingSystem] = useState('Windows')
  const [browser, setBrowser] = useState('Chrome')
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    chrome.storage.local.get(
      ['userAgentType', 'operatingSystem', 'browser', 'userAgent'],
      (storage) => {
        storage.userAgentType && setUserAgentType(storage.userAgentType)
        storage.operatingSystem && setOperatingSystem(storage.operatingSystem)
        storage.browser && setBrowser(storage.browser)
        storage.userAgent && setUserAgent(storage.userAgent)
      }
    )
  }, [])

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    setUserAgentType(e.target.value)
    chrome.storage.local.set({ userAgentType: e.target.value })

    if (e.target.value === 'none') {
      setUserAgent('')
      chrome.storage.local.set({
        userAgent: '',
      })
    } else if (e.target.value === 'preloaded') {
      setUserAgent(userAgents[operatingSystem][browser])
      chrome.storage.local.set({
        userAgent: userAgents[operatingSystem][browser],
      })
    }
  }

  const changeOperatingSystem = (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    setOperatingSystem(e.target.value)
    setUserAgent(userAgents[e.target.value][browser])
    chrome.storage.local.set({
      userAgent: userAgents[e.target.value][browser],
      operatingSystem: e.target.value,
    })
  }

  const changeBrowser = (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    setBrowser(e.target.value)
    setUserAgent(userAgents[operatingSystem][e.target.value])
    chrome.storage.local.set({
      userAgent: userAgents[operatingSystem][e.target.value],
      browser: e.target.value,
    })
  }

  const changeUserAgent = () => {
    if (userAgentType !== 'custom') {
      setUserAgentType('custom')
      chrome.storage.local.set({
        userAgentType: 'custom',
      })
    }
  }

  return (
    <Page isCurrentTab={tab === 'userAgent'} title={'User Agent'}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          mb: '8px',
        }}
      >
        <Label>
          <Radio
            name="userAgentType"
            value="none"
            onChange={changeType}
            checked={userAgentType === 'none'}
          />
          None
        </Label>
        <Label>
          <Radio
            name="userAgentType"
            value="preloaded"
            onChange={changeType}
            checked={userAgentType === 'preloaded'}
          />
          Preloaded
        </Label>
        <Label>
          <Radio
            name="userAgentType"
            value="custom"
            onChange={changeType}
            checked={userAgentType === 'custom'}
          />
          Custom
        </Label>
      </Flex>
      {userAgentType === 'preloaded' && (
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
      <DebouncedInput
        name="userAgent"
        title="User Agent"
        value={userAgent}
        setValue={setUserAgent}
        onChange={changeUserAgent}
        mb="12px"
      />
      <CheckBox title={'Enable Debugger API Spoofing'} />
    </Page>
  )
}

export default UserAgentPage
