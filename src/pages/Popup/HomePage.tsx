import React, { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IPData from './IPData'
import getIP from '../../utils/getIP'

const LocationPage = () => {
  const [ip, setIP] = useState(null)
  const [configuration, setConfiguration] = useState('default')

  useEffect(() => {
    chrome.storage.sync.get(['configuration', 'ipData'], (result) => {
      result.configuration && setConfiguration(result.configuration)
      if (result.ipData) {
        setIP(result.ipData)
      } else {
        Promise.resolve(getIP()).then((ipData) => setIP(ipData))
      }
    })
  }, [])

  return (
    <Box
      sx={{
        m: '12px',
        width: '100%',
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
