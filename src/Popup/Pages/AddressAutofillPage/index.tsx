import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'

import getIP from '../../../utils/getIP'

interface LocationPageProps {
  tab: string
}

const AddressAutofillPage = ({ tab }: LocationPageProps) => {
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
        display: tab === 'addressAutofill' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '8px' }}>Address Autofill</Box>
    </Box>
  )
}

export default AddressAutofillPage
