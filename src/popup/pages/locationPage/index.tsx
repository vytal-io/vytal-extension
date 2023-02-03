import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import { Box, Button, Flex, Label, Select } from 'theme-ui'
import Page from 'popup/components/Page'
import Checkbox from 'popup/components/CheckBox'
import DebouncedInput from 'popup/components/DebouncedInput'
import detachDebugger from 'utils/detachDebugger'
import countryLocales from 'utils/countryLocales'
import configurations from 'utils/configurations'
import getIp from 'utils/getIp'
import { ipData } from 'types'
import { RotateCw } from 'react-feather'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

interface LocationPageProps {
  tab: string
  setTab: (tab: string) => void
}

const LocationPage = ({ tab, setTab }: LocationPageProps) => {
  const [browserDefault, setBrowserDefault] = useState(true)
  const [ipData, setIpData] = useState<ipData>()
  const [ipInfo, setIpInfo] = useState('loading...')
  const [timezone, setTimezone] = useState('')
  const [locale, setLocale] = useState('')
  const [lat, setLatitude] = useState('')
  const [lon, setLongitude] = useState('')
  const [configuration, setConfiguration] = useState('custom')

  polyfillCountryFlagEmojis();

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
      [
        'locationBrowserDefault',
        'configuration',
        'timezone',
        'locale',
        'lat',
        'lon',
      ],
      (storage) => {
        storage.configuration && setConfiguration(storage.configuration)
        storage.locationBrowserDefault !== undefined &&
          setBrowserDefault(storage.locationBrowserDefault)
        if (storage.configuration === 'matchIp' && ipData) {
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
        } else {
          storage.timezone && setTimezone(storage.timezone)
          storage.locale && setLocale(storage.locale)
          storage.lat && setLatitude(storage.lat)
          storage.lon && setLongitude(storage.lon)
        }
      }
    )
  }, [ipData])

  const changeBrowserDefault = () => {
    detachDebugger()
    chrome.storage.local.set({
      locationBrowserDefault: !browserDefault,
    })
    setBrowserDefault(!browserDefault)
  }

  const changeConfiguration = (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    setConfiguration(e.target.value)
    chrome.storage.local.set({
      configuration: e.target.value,
    })
    if (e.target.value === 'matchIp') {
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
    } else {
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
    if (configuration !== 'custom') {
      setConfiguration('custom')
      chrome.storage.local.set({
        configuration: 'custom',
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
        <Label htmlFor="configuration">Configuration</Label>
        <Select
          name="configuration"
          value={configuration}
          onChange={changeConfiguration}
          mb={'8px'}
        >
          <option value="matchIp">Match IP Address</option>
          <option value="custom">Custom</option>
          <optgroup label="Locations">
            {Object.keys(configurations).map((key) => (
              <option value={key} key={key}>
                {configurations[key].name}
              </option>
            ))}
          </optgroup>
        </Select>
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
        <Flex sx={{ gap: '12px' }}>
          <DebouncedInput
            name="lat"
            title="Latitude"
            value={lat}
            setValue={setLatitude}
            onChange={changeInputText}
            type="number"
          />
          <DebouncedInput
            name="lon"
            title="Longitude"
            value={lon}
            setValue={setLongitude}
            onChange={changeInputText}
            mb="12px"
            type="number"
          />
        </Flex>
      </Box>
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
