// import { useState, useEffect } from 'react'
// import { Box } from 'theme-ui'
import Page from '../../Components/Page'

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
    <Page isCurrentTab={tab === 'autofill'} title={'Autofill Options'}>
      hello
    </Page>
  )
}

export default AutofillPage
