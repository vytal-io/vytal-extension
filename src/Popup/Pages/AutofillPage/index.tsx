// import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'

interface SystemPageProps {
  tab: string
}

const AutofillPage = ({ tab }: SystemPageProps) => {
  // const [ip, setIP] = useState(null)
  // const [configuration, setConfiguration] = useState('default')

  // useEffect(() => {
  //   chrome.storage.local.get(['configuration', 'ipData'], (storage) => {
  //     storage.configuration && setConfiguration(storage.configuration)
  //     if (storage.ipData) {
  //       setIP(storage.ipData)
  //     } else {
  //       Promise.resolve(getIP()).then((ipData) => setIP(ipData))
  //     }
  //   })
  // }, [])

  return (
    <Box
      sx={{
        display: tab === 'autofill' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        Autofill Options
      </Box>
    </Box>
  )
}

export default AutofillPage
