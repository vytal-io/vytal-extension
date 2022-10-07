import { useState, useEffect, ChangeEvent } from 'react'
import { Box, Label, Radio, Text } from 'theme-ui'
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

  // chrome.privacy.network.webRTCIPHandlingPolicy.onChange.addListener(function (
  //   details
  // ) {
  //   console.log(details)
  //   setWebRtcPolicy(details.value)
  // })

  const changeRadioValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleWebRtcPolicy(e.target.value)
    setWebRtcPolicy(e.target.value)
  }

  return (
    <Box
      sx={{
        display: tab === 'webRtc' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        WebRTC Policy
      </Box>
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
        name={'Disable non-proxied UDP (force proxy)'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_and_private_interfaces'}
        name={'Default public and private interfaces'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      <RadioButton
        value={'default_public_interface_only'}
        name={'Default public interface only'}
        description={
          'Same as above, except allow WebRTC traffic through the default private'
        }
        webRtcPolicy={webRtcPolicy}
        onChange={changeRadioValue}
      />
      {/* <Label>
        <Radio
          name="webRtcPolicy"
          value="disable_non_proxied_udp"
          onChange={(e) => handleWebRtcPolicy(e.target.value)}
          checked={webRtcPolicy === 'disable_non_proxied_udp'}
        />
        <Box>
          <Text sx={{ fontWeight: '700' }}>Disable non proxied udp</Text>
          <Box sx={{ mb: '12px', fontSize: '12px' }}>
            Force the use of a proxy, and only allow WebRTC traffic over UDP
            proxies.
          </Box>
        </Box>
      </Label> */}
    </Box>
  )
}

export default WebRtcPage
