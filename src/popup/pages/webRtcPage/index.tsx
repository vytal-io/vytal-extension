import { Button, Link, Text } from 'theme-ui'
import { useState, useEffect, ChangeEvent } from 'react'
// import handleWebRtcPolicy from './handleWebRtcPolicy'
import RadioButton from './RadioButton'

import Page from 'popup/components/Page'

interface WebRtcPageProps {
  tab: string
}

const WebRtcPage = ({ tab }: WebRtcPageProps) => {
  const [webRtcPolicy, setWebRtcPolicy] = useState('default')

  useEffect(() => {
    chrome.storage.local.get(['webRtcPolicy'], (storage) => {
      storage.webRtcPolicy && setWebRtcPolicy(storage.webRtcPolicy)
    })
  }, [])

  const changeRadioValue = (e: ChangeEvent<HTMLInputElement>) => {
    // handleWebRtcPolicy(e.target.value)
    setWebRtcPolicy(e.target.value)
  }

  return (
    <Page isCurrentTab={tab === 'webRtc'} title={'WebRTC Policy'}>
      <RadioButton
        value={'default'}
        name={'Default'}
        description={
          'Will use all available interfaces when searching for the best path.'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_and_private_interfaces'}
        name={'Default Public And Private Interfaces'}
        description={
          'Will only use interface connecting to the public Internet, but may connect using private IP.'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_interface_only'}
        name={'Default Public Interface Only'}
        description={
          'Will only use interface connecting to the public Internet, and will not connect using private IP.'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'disable_non_proxied_udp'}
        name={'Disable Non-Proxied UDP (Force Proxy)'}
        description={
          'Will use TCP on the public-facing interface, and will only use UDP if supported by a configured proxy.'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
    </Page>
  )
}

export default WebRtcPage
