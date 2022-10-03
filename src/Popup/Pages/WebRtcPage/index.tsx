import { useState, useEffect } from 'react'
import { Box, Button, Select } from 'theme-ui'
import getWebRTCData from './getWebRTCData'
import handleWebRtcPolicy from './handleWebRtcPolicy'

interface LocationPageProps {
  tab: string
}

const WebRtcPage = ({ tab }: LocationPageProps) => {
  const [webRtcPolicy, setWebRtcPolicy] = useState('default')
  const [webRtcIp, setWebRtcIp] = useState([])

  useEffect(() => {
    chrome.storage.sync.get(['webRtcPolicy'], (storage) => {
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
      <Box sx={{ fontSize: '20px', mb: '8px' }}>WebRTC</Box>
      <Select
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
      </Select>
      <Box sx={{ fontSize: '12px', mb: '8px' }}>
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
      </Button>
    </Box>
  )
}

export default WebRtcPage
