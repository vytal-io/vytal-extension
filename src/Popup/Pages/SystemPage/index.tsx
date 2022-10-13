import { useState, useEffect, ChangeEvent } from 'react'
import { Flex, Label, Radio, Select } from 'theme-ui'
import Page from '../../Components/Page'
import DebouncedInput from '../../Components/DebouncedInput'
import detachDebugger from '../../../utils/detachDebugger'
import countryLocales from '../../../utils/countryLocales'
import { ipData } from '../../../types'
import configurations from '../../../utils/configurations'
import CheckBox from '../../Components/CheckBox'

interface SystemPageProps {
  tab: string
  ipData?: ipData
}

const SystemPage = ({ tab, ipData }: SystemPageProps) => {
  const [systemType, setSystemType] = useState('')
  const [timezone, setTimezone] = useState('')
  const [locale, setLocale] = useState('')
  const [lat, setLatitude] = useState('')
  const [lon, setLongitude] = useState('')
  const [configuration, setConfiguration] = useState('custom')

  useEffect(() => {
    chrome.storage.local.get(
      ['systemType', 'configuration', 'timezone', 'locale', 'lat', 'lon'],
      (storage) => {
        console.log(ipData)
        if (storage.systemType === 'matchIp' && ipData) {
          setTimezone(ipData.timezone)
          setLocale(countryLocales[ipData.countryCode].locale)
          setLatitude(`${ipData.lat}`)
          setLongitude(`${ipData.lon}`)
          chrome.storage.local.set({
            timezone: ipData.timezone,
            locale: countryLocales[ipData.countryCode].locale,
            lat: ipData.lat,
            lon: ipData.lon,
          })
        } else if (storage.systemType === 'custom') {
          storage.configuration && setConfiguration(storage.configuration)
          storage.timezone && setTimezone(storage.timezone)
          storage.locale && setLocale(storage.locale)
          storage.lat && setLatitude(storage.lat)
          storage.lon && setLongitude(storage.lon)
        }
        storage.systemType
          ? setSystemType(storage.systemType)
          : setSystemType('default')
      }
    )
  }, [ipData])

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    setSystemType(e.target.value)
    chrome.storage.local.set({ systemType: e.target.value })

    if (e.target.value === 'default') {
      setTimezone('')
      setLocale('')
      setLatitude('')
      setLongitude('')
      chrome.storage.local.set({
        timezone: '',
        locale: '',
        lat: '',
        lon: '',
      })
    } else if (e.target.value === 'matchIp') {
      if (ipData) {
        setTimezone(ipData.timezone)
        setLocale(countryLocales[ipData.countryCode].locale)
        setLatitude(`${ipData.lat}`)
        setLongitude(`${ipData.lon}`)
        chrome.storage.local.set({
          timezone: ipData.timezone,
          locale: countryLocales[ipData.countryCode].locale,
          lat: ipData.lat,
          lon: ipData.lon,
        })
      }
    } else if (e.target.value === 'custom')
      if (configuration !== 'custom') {
        setTimezone(configurations[configuration].timezone)
        setLocale(configurations[configuration].locale)
        setLatitude(configurations[configuration].lat)
        setLongitude(configurations[configuration].lon)
        chrome.storage.local.set({
          timezone: configurations[configuration].timezone,
          locale: configurations[configuration].locale,
          lat: configurations[configuration].lat,
          lon: configurations[configuration].lon,
        })
      }
  }

  const changeConfiguration = (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    setConfiguration(e.target.value)
    chrome.storage.local.set({
      configuration: e.target.value,
    })
    if (e.target.value !== 'custom') {
      setTimezone(configurations[e.target.value].timezone)
      setLocale(configurations[e.target.value].locale)
      setLatitude(configurations[e.target.value].lat)
      setLongitude(configurations[e.target.value].lon)
      chrome.storage.local.set({
        timezone: configurations[e.target.value].timezone,
        locale: configurations[e.target.value].locale,
        lat: configurations[e.target.value].lat,
        lon: configurations[e.target.value].lon,
      })
    }
  }

  const changeInputText = () => {
    if (systemType !== 'custom' || configuration !== 'custom') {
      setConfiguration('custom')
      setSystemType('custom')
      chrome.storage.local.set({
        configuration: 'custom',
        systemType: 'custom',
      })
    }
  }

  return (
    <Page isCurrentTab={tab === 'system'} title={'System Data'}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          mb: '8px',
        }}
      >
        <Label>
          <Radio
            name="systemType"
            value="default"
            onChange={changeType}
            checked={systemType === 'default'}
          />
          Default
        </Label>
        <Label>
          <Radio
            name="systemType"
            value="matchIp"
            onChange={changeType}
            checked={systemType === 'matchIp'}
          />
          Match IP
        </Label>
        <Label>
          <Radio
            name="systemType"
            value="custom"
            onChange={changeType}
            checked={systemType === 'custom'}
          />
          Custom
        </Label>
      </Flex>
      {systemType === 'custom' && (
        <>
          <Label htmlFor="configuration">Configuration</Label>
          <Select
            name="configuration"
            value={configuration}
            onChange={changeConfiguration}
            mb={'8px'}
          >
            <option value="custom">Custom</option>
            {Object.keys(configurations).map((key) => (
              <option value={key} key={key}>
                {configurations[key].name}
              </option>
            ))}
          </Select>
        </>
      )}
      <DebouncedInput
        name="timezone"
        title="Timezone"
        value={timezone}
        setValue={setTimezone}
        onChange={changeInputText}
      />
      <DebouncedInput
        name="locale"
        title="Locale"
        value={locale}
        setValue={setLocale}
        onChange={changeInputText}
      />
      <DebouncedInput
        name="lat"
        title="Latitude"
        value={lat}
        setValue={setLatitude}
        onChange={changeInputText}
      />
      <DebouncedInput
        name="lon"
        title="Longitude"
        value={lon}
        setValue={setLongitude}
        onChange={changeInputText}
        mb="12px"
      />
      <CheckBox title={'Enable Debugger API Spoofing'} />
    </Page>
  )
}

export default SystemPage
