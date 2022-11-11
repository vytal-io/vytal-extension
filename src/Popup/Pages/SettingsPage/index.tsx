import { Link, Text } from 'theme-ui'
import Page from '../../Components/Page'
import InfoItem from './InfoItem'

interface SystemPageProps {
  tab: string
}

const SettingsPage = ({ tab }: SystemPageProps) => {
  return (
    <Page isCurrentTab={tab === 'settings'} title={'Info'}>
      <InfoItem title={'Hide Debugging Notification Bar'}>
        While spoofing data a notification bar becomes visible. Hiding the bar
        can be done by using the{' '}
        <Text sx={{ fontStyle: 'italic', mr: '2px' }}>
          --silent-debugger-extension-api
        </Text>{' '}
        flag.{' '}
        <Link
          variant="hover"
          href={`https://www.chromium.org/developers/how-tos/run-chromium-with-flags`}
          target="_blank"
        >
          Instructions on how to run chrome with flags
        </Link>
        .
      </InfoItem>
      <InfoItem title={'Change IP Address'}>
        Vytal does not change your IP address. To change your IP you will need a
        VPN such as{' '}
        <Link
          variant="hover"
          href={`https://go.nordvpn.net/aff_c?offer_id=15&aff_id=79520&url_id=902`}
          target="_blank"
        >
          NordVPN
        </Link>{' '}
        or{' '}
        <Link
          variant="hover"
          href={`https://go.getproton.me/aff_c?offer_id=26&aff_id=3825`}
          target="_blank"
        >
          ProtonVPN
        </Link>
        .
      </InfoItem>
      {/* <InfoItem title={'Vytal vs Similar Extensions'}>
        Vytal utilizes the debugger API to spoof data which is completely
        undetectable. Other similar extensions rely on{' '}
        <Link
          variant="hover"
          href={`https://palant.info/2020/12/10/how-anti-fingerprinting-extensions-tend-to-make-fingerprinting-easier/`}
          target="_blank"
        >
          inferior script tag injections
        </Link>
        .
      </InfoItem> */}
      <InfoItem title={'Test Extension'}>
        You can test and compare Vytal and other spoofing extensions on{' '}
        <Link variant="hover" href={`https://vytal.io`} target="_blank">
          vytal.io
        </Link>
        .
      </InfoItem>
    </Page>
  )
}

export default SettingsPage
