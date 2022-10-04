import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Flex, Label, Radio } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IpData from './IpData'
import getIp from '../../../utils/getIp'
import detachDebugger from '../../../utils/detachDebugger'
import countryLocales from '../../../utils/countryLocales'
import { ipData } from '../../../types'
import configurations from '../../../utils/configurations'

interface SystemPageProps {
  tab: string
}

const SystemPage = ({ tab }: SystemPageProps) => {
  const [type, setType] = useState('default')
  const [timezone, setTimezone] = useState('')
  const [locale, setLocale] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [ip, setIp] = useState<ipData | undefined>(undefined)
  const [configuration, setConfiguration] = useState('custom')

  useEffect(() => {
    Promise.resolve(getIp()).then((ipData) => setIp(ipData))
  }, [])

  useEffect(() => {
    if (type === 'default') {
      setTimezone('')
      setLocale('')
      setLatitude('')
      setLongitude('')
      chrome.storage.local.set({
        timezone: '',
        locale: '',
        latitude: '',
        longitude: '',
      })
    } else if (type === 'matchIp') {
      if (ip) {
        setTimezone(ip.timezone)
        setLocale(countryLocales[ip.countryCode].locale)
        setLatitude(`${ip.lat}`)
        setLongitude(`${ip.lon}`)
        chrome.storage.local.set({
          timezone: ip.timezone,
          locale: countryLocales[ip.countryCode].locale,
          latitude: ip.lat,
          longitude: ip.lon,
        })
      }
    } else if (type === 'custom') {
      if (configuration !== 'custom') {
        setTimezone(configurations[configuration].timezone)
        setLocale(configurations[configuration].locale)
        setLatitude(configurations[configuration].lat)
        setLongitude(configurations[configuration].lon)
        chrome.storage.local.set({
          timezone: configurations[configuration].timezone,
          locale: configurations[configuration].locale,
          latitude: configurations[configuration].lat,
          longitude: configurations[configuration].lon,
        })
      }
    }
  }, [configuration, ip, type])

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    // detachDebugger()
    // e.target.value === 'none' && setUserAgent('')
    // chrome.storage.local.set({ type: e.target.value })
    setType(e.target.value)
  }

  return (
    <Box
      sx={{
        display: tab === 'system' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>System Data</Box>
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
            checked={type === 'default'}
          />
          Default
        </Label>
        <Label>
          <Radio
            name="systemType"
            value="matchIp"
            onChange={changeType}
            checked={type === 'matchIp'}
          />
          Match IP
        </Label>
        <Label>
          <Radio
            name="systemType"
            value="custom"
            onChange={changeType}
            checked={type === 'custom'}
          />
          Custom
        </Label>
      </Flex>
      {type === 'custom' && (
        <ConfigurationSelect
          configuration={configuration}
          setConfiguration={setConfiguration}
        />
      )}
      <LocationInput
        name="timezone"
        title="Timezone"
        value={timezone}
        setValue={setTimezone}
      />
      <LocationInput
        name="locale"
        title="Locale"
        value={locale}
        setValue={setLocale}
      />
      <LocationInput
        name="lat"
        title="Latitude"
        value={latitude}
        setValue={setLatitude}
      />
      <LocationInput
        name="lon"
        title="Longitude"
        value={longitude}
        setValue={setLongitude}
      />
    </Box>
  )
}

export default SystemPage
