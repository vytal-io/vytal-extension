import { useState, useEffect, ChangeEvent } from 'react'
import Page from '../../Components/Page'
import handleWebRtcPolicy from './handleWebRtcPolicy'
import RadioButton from './RadioButton'

interface SystemPageProps {
  tab: string
}

const WebRtcPage = ({ tab }: SystemPageProps) => {
  const [webRtcPolicy, setWebRtcPolicy] = useState('default')

  useEffect(() => {
    chrome.storage.local.get(['webRtcPolicy'], (storage) => {
      storage.webRtcPolicy && setWebRtcPolicy(storage.webRtcPolicy)
    })
  }, [])

  const changeRadioValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleWebRtcPolicy(e.target.value)
    setWebRtcPolicy(e.target.value)
  }

  return (
    <Page isCurrentTab={tab === 'webRtc'} title={'WebRTC Policy'}>
      <RadioButton
        value={'default'}
        name={'Default'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'disable_non_proxied_udp'}
        name={'Disable Non-Proxied UDP (Force Proxy)'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_and_private_interfaces'}
        name={'Default Public And Private Interfaces'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_interface_only'}
        name={'Default Public Interface Only'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
    </Page>
  )
}

export default WebRtcPage
