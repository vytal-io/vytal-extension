import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Select } from 'theme-ui'
import Checkbox from '../../components/CheckBox'
import DebouncedInput from '../../components/DebouncedInput'
import userAgents from '../../../utils/userAgents'
import detachDebugger from '../../../utils/detachDebugger'
import Page from '../../components/Page'

interface UserAgentPageProps {
  tab: string
}

const UserAgentPage = ({ tab }: UserAgentPageProps) => {
  const [browserDefault, setBrowserDefault] = useState(true)
  const [userAgentInfo, setUserAgentInfo] = useState('')
  const [userAgent, setUserAgent] = useState('')
  const [platform, setPlatform] = useState('')

  useEffect(() => {
    chrome.storage.local.get(
      ['userAgentBrowserDefault', 'userAgentInfo', 'userAgent', 'platform'],
      (storage) => {
        storage.userAgentBrowserDefault !== undefined &&
          setBrowserDefault(storage.userAgentBrowserDefault)
        storage.userAgentInfo && setUserAgentInfo(storage.userAgentInfo)
        storage.userAgent && setUserAgent(storage.userAgent)
        storage.platform && setPlatform(storage.platform)
      }
    )
  }, [])

  const changeBrowserDefault = () => {
    detachDebugger()
    chrome.storage.local.set({
      userAgentBrowserDefault: !browserDefault,
    })
    setBrowserDefault(!browserDefault)
  }

  const changeUserAgentInfo = async (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    setUserAgentInfo(e.target.value)
    chrome.storage.local.set({
      userAgentInfo: e.target.value,
    })

    if (e.target.value !== 'custom') {
      const userAgentObj = JSON.parse(e.target.value)
      setUserAgent(userAgentObj.value)
      setPlatform(userAgentObj.platform)
      chrome.storage.local.set({
        userAgent: userAgentObj.value,
        platform: userAgentObj.platform,
      })
    }
  }

  const changeTextInput = () => {
    if (userAgentInfo !== 'custom') {
      setUserAgentInfo('custom')
      chrome.storage.local.set({
        userAgentType: 'custom',
      })
    }
  }

  return (
    <Page isCurrentTab={tab === 'userAgent'} title={'User Agent'}>
      <Checkbox
        title="Use browser default"
        onChange={changeBrowserDefault}
        checked={browserDefault}
      />
      <Box
        sx={{
          opacity: browserDefault ? '0.5' : '1',
          pointerEvents: browserDefault ? 'none' : 'auto',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Label htmlFor="type">Type</Label>
          <Select
            name="type"
            id="type"
            value={userAgentInfo}
            onChange={changeUserAgentInfo}
            mb={'8px'}
          >
            <option value="custom">Custom</option>
            {Object.keys(userAgents).map((key) => (
              <optgroup key={key} label={userAgents[key].title}>
                {userAgents[key].values.map((key: any) => (
                  <option key={key.value} value={JSON.stringify(key)}>
                    {key.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </Select>
        </Box>
        <DebouncedInput
          name="userAgent"
          title="User Agent"
          value={userAgent}
          setValue={setUserAgent}
          onChange={changeTextInput}
          mb="12px"
        />
        <DebouncedInput
          name="platform"
          title="Platform"
          value={platform}
          setValue={setPlatform}
          onChange={changeTextInput}
          mb="12px"
        />
      </Box>
    </Page>
  )
}

export default UserAgentPage
