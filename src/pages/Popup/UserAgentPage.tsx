import React, { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import DataInput from './DataInput'
import ConfigurationSelect from './ConfigurationSelect'
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
      <Box sx={{ fontSize: '20px', mb: '8px' }}>User Agent</Box>
      <ConfigurationSelect
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <DataInput
        type="timezone"
        title="Timezone"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <DataInput
        type="locale"
        title="Locale"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <DataInput
        type="lat"
        title="Latitude"
        ip={ip}
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
      <DataInput
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
