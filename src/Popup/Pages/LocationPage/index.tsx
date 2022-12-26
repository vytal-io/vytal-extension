import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import { Box, Button, Flex, Label, Radio, Select } from 'theme-ui'
import Page from '../../Components/Page'
import DebouncedInput from '../../Components/DebouncedInput'
import detachDebugger from '../../../utils/detachDebugger'
import countryLocales from '../../../utils/countryLocales'
import configurations from '../../../utils/configurations'
import { ipData } from '../../../types'
import getIp from '../../../utils/getIp'
import { RotateCw } from 'react-feather'

interface LocationPageProps {
  tab: string
  setTab: (tab: string) => void
}

const LocationPage = ({ tab, setTab }: LocationPageProps) => {
  const [ipData, setIpData] = useState<ipData>()
  const [ipInfo, setIpInfo] = useState('loading...')
  const [locationType, setLocationType] = useState('')
  const [timezone, setTimezone] = useState('')
  const [locale, setLocale] = useState('')
  const [lat, setLatitude] = useState('')
  const [lon, setLongitude] = useState('')
  const [configuration, setConfiguration] = useState('custom')

  const reloadIp = useCallback(() => {
    setIpInfo('loading...')
    getIp()
      .then((ipDataRes) => {
        setIpData(ipDataRes)
        setIpInfo(`${getFlagEmoji(ipDataRes.countryCode)} ${ipDataRes.query}`)
      })
      .catch(() => {
        setIpInfo('error')
      })
  }, [])

  useEffect(() => {
    reloadIp()
  }, [reloadIp])

  useEffect(() => {
    chrome.storage.local.get(
      ['locationType', 'configuration', 'timezone', 'locale', 'lat', 'lon'],
      (storage) => {
        if (storage.locationType === 'matchIp' && ipData) {
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
        } else if (storage.locationType === 'custom') {
          storage.configuration && setConfiguration(storage.configuration)
          storage.timezone && setTimezone(storage.timezone)
          storage.locale && setLocale(storage.locale)
          storage.lat && setLatitude(storage.lat)
          storage.lon && setLongitude(storage.lon)
        }
        storage.locationType
          ? setLocationType(storage.locationType)
          : setLocationType('default')
      }
    )
  }, [ipData])

  const changeType = (e: ChangeEvent<HTMLInputElement>) => {
    detachDebugger()
    setLocationType(e.target.value)
    chrome.storage.local.set({ locationType: e.target.value })

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
    } else if (e.target.value === 'custom') {
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
    if (locationType !== 'custom' || configuration !== 'custom') {
      setConfiguration('custom')
      setLocationType('custom')
      chrome.storage.local.set({
        configuration: 'custom',
        locationType: 'custom',
      })
    }
  }

  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  return (
    <Page isCurrentTab={tab === 'location'} title={'Location Data'}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          mb: '8px',
        }}
      >
        <Label sx={{ cursor: 'pointer' }}>
          <Radio
            name="locationType"
            value="default"
            onChange={changeType}
            checked={locationType === 'default'}
          />
          Default
        </Label>
        <Label sx={{ cursor: 'pointer' }}>
          <Radio
            name="locationType"
            value="matchIp"
            onChange={changeType}
            checked={locationType === 'matchIp'}
          />
          Match IP
        </Label>
        <Label sx={{ cursor: 'pointer' }}>
          <Radio
            name="locationType"
            value="custom"
            onChange={changeType}
            checked={locationType === 'custom'}
          />
          Custom
        </Label>
      </Flex>
      {locationType === 'matchIp' && (
        <Flex
          sx={{
            border: '1px solid',
            mt: '12px',
            mb: '8px',
            borderRadius: '4px',
            borderColor: 'grey',
            alignItems: 'center',
            p: '4px 8px',
          }}
        >
          <Box sx={{ fontWeight: '700', width: '100px', pr: '8px' }}>
            IP Address
          </Box>
          <Box
            sx={{
              width: '188px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={ipData?.query}
          >
            {ipInfo}
          </Box>
          <RotateCw
            size={20}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              reloadIp()
            }}
          />
        </Flex>
      )}
      {locationType === 'custom' && (
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
      <Box
        sx={{
          color: 'text',
          mb: '8px',
          fontSize: '11px',
          position: 'fixed',
          bottom: '0',
        }}
      >
        Vytal does not change your IP address. To change your IP address you
        will need a{' '}
        <Button variant="text" onClick={() => setTab('vpn')}>
          VPN or proxy
        </Button>
        .
      </Box>
    </Page>
  )
}

export default LocationPage
