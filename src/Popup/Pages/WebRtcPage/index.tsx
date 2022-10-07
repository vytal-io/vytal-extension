import { useState, useEffect } from 'react'
import { Box, Button, Label, Radio, Select, Text } from 'theme-ui'
import getWebRTCData from './getWebRTCData'
import handleWebRtcPolicy from './handleWebRtcPolicy'

interface SystemPageProps {
  tab: string
}

const WebRtcPage = ({ tab }: SystemPageProps) => {
  const [webRtcPolicy, setWebRtcPolicy] = useState('default')
  const [webRtcIp, setWebRtcIp] = useState([])

  useEffect(() => {
    chrome.storage.local.get(['webRtcPolicy'], (storage) => {
      storage.webRtcPolicy && setWebRtcPolicy(storage.webRtcPolicy)
    })
  }, [])

  chrome.privacy.network.webRTCIPHandlingPolicy.onChange.addListener(function (
    details
  ) {
    console.log(details)
    setWebRtcPolicy(details.value)
  })

  return (
    <Box
      sx={{
        display: tab === 'webRtc' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        WebRTC Policy
      </Box>
      <Label>
        <Radio
          name="webRtcPolicy"
          value="default"
          onChange={(e) => handleWebRtcPolicy(e.target.value)}
          checked={webRtcPolicy === 'default'}
        />
        <Box>
          <Text sx={{ fontWeight: '700' }}>Default</Text>
          <Box sx={{ mb: '12px', fontSize: '12px' }}>
            Same as above, except allow WebRTC traffic through the default
            private
          </Box>
        </Box>
      </Label>

      <Label>
        <Radio
          name="webRtcPolicy"
          value="default_public_and_private_interfaces"
          onChange={(e) => handleWebRtcPolicy(e.target.value)}
          checked={webRtcPolicy === 'default_public_and_private_interfaces'}
        />
        <Box>
          <Text sx={{ fontWeight: '700' }}>
            Default public and private interfaces
          </Text>
          <Box sx={{ mb: '12px', fontSize: '12px' }}>
            Send WebRTC traffic via the default public network adapter to the
            Internet. This will be.
          </Box>
        </Box>
      </Label>

      <Label>
        <Radio
          name="webRtcPolicy"
          value="default_public_interface_only"
          onChange={(e) => handleWebRtcPolicy(e.target.value)}
          checked={webRtcPolicy === 'default_public_interface_only'}
        />
        <Box>
          <Text sx={{ fontWeight: '700' }}>Default public interface only</Text>
          <Box sx={{ mb: '12px', fontSize: '12px' }}>
            Same as above, except allow WebRTC traffic through the default
            private interface to your.
          </Box>
        </Box>
      </Label>

      <Label>
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
      </Label>

      {/* <Select
        name="webRtcPolicy"
        id="webRtcPolicy"
        value={webRtcPolicy}
        onChange={(e) => handleWebRtcPolicy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="default_public_and_private_interfaces">
          Default public and private interfaces
        </option>
        <option value="default_public_interface_only">
          Default public interface only
        </option>
        <option value="disable_non_proxied_udp">Disable non proxied udp</option>
      </Select> */}
      {/* <Box sx={{ fontSize: '12px', mb: '8px' }}>
        IP: {JSON.stringify(webRtcIp)}
      </Box>
      <Button
        onClick={() => {
          getWebRTCData(setWebRtcIp)
          // getWebRTCData().then((ip) => {
          //   console.log(ip)
          //   setWebRtcIp(ip)
          // })
        }}
      >
        Reload
      </Button> */}
    </Box>
  )
}

export default WebRtcPage
