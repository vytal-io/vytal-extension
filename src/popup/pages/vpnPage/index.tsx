import { Box, Image } from 'theme-ui'
import Page from '../../components/Page'
import VpnItem from './VpnItem'
import nordLogo from '../../../assets/nord.svg'
import protonLogo from '../../../assets/proton.svg'

interface VpnPageProps {
  tab: string
}

const VpnPage = ({ tab }: VpnPageProps) => {
  return (
    <Page isCurrentTab={tab === 'vpn'} title={'VPN Recommendations'}>
      <VpnItem url="https://go.nordvpn.net/aff_c?offer_id=658&aff_id=79520">
        <Image src={nordLogo} alt="Vpn logo" variant="vpnLogo" />
        <li>Verified zero-logs policy & no IP leaks</li>
        <li>5,600+ servers in 59 countries</li>
        <li>24/7 live chat support</li>
      </VpnItem>
      <VpnItem url="https://go.getproton.me/aff_c?offer_id=26&aff_id=3825">
        <Image src={protonLogo} alt="Proton logo" variant="vpnLogo" />
        <Box>
          <li>Verified zero-logs policy & no IP leaks</li>
          <li>1,885 servers in 67 countries</li>
          <li>All apps are open-source & audited</li>
        </Box>
      </VpnItem>
    </Page>
  )
}

export default VpnPage
