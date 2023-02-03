import { Box, Image } from 'theme-ui'
import Page from 'popup/components/Page'
import VpnItem from './VpnItem'
import nordLogo from 'assets/nord.svg'
import protonLogo from 'assets/surfShark.svg'

interface VpnPageProps {
  tab: string
}

const VpnPage = ({ tab }: VpnPageProps) => {
  return (
    <Page isCurrentTab={tab === 'vpn'} title={'VPN Recommendations'}>
      <VpnItem url="https://go.nordvpn.net/aff_c?offer_id=658&aff_id=79520&source=v" linkText="Click for 63% off discount">
        <Image src={nordLogo} alt="NordVPN logo" variant="vpnLogo" />
        <li>Verified zero-logs policy & no IP leaks</li>
        <li>5,600+ servers in 59 countries</li>
        <li>24/7 live chat support</li>
      </VpnItem>
      <VpnItem url="https://get.surfshark.net/aff_c?offer_id=926&aff_id=17240&source=v" linkText="Click for 82% off + 2 mo. FREE">
        <Image src={protonLogo} alt="Surf Shark logo" variant="vpnLogo" />
        <Box>
          <li>Verified zero-logs policy & no IP leaks</li>
          <li>3200+ servers in 100 countries</li>
          <li>Unlimited device connections</li>
        </Box>
      </VpnItem>
    </Page>
  )
}

export default VpnPage
