import React, { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IPData from './IPData'
import getIP from '../../utils/getIP'

interface LocationPageProps {
  tab: string
}

const LocationPage = ({ tab }: LocationPageProps) => {
  const [ip, setIP] = useState(null)
  const [configuration, setConfiguration] = useState('default')

  useEffect(() => {
    chrome.storage.sync.get(['configuration', 'ipData'], (storage) => {
      storage.configuration && setConfiguration(storage.configuration)
      if (storage.ipData) {
        setIP(storage.ipData)
      } else {
        Promise.resolve(getIP()).then((ipData) => setIP(ipData))
      }
    })
  }, [])

  return (
    <Box
      sx={{
        display: tab === 'location' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '8px' }}>Location</Box>
      <ConfigurationSelect
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      {configuration === 'match' && <IPData ip={ip} setIP={setIP} />}
      <LocationInput
        type="timezone"
        title="Timezone"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <LocationInput
        type="locale"
        title="Locale"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <LocationInput
        type="lat"
        title="Latitude"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <LocationInput
        type="lon"
        title="Longitude"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
    </Box>
  )
}

export default LocationPage
