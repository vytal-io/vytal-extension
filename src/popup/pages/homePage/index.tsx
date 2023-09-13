import { useState } from 'react'
import { Image, Flex, Link, Text, Select, Box, Label } from 'theme-ui'
import Page from 'popup/components/Page'
import InfoItem from './InfoItem'
import Logo from 'assets/logo.svg'
import LogoHover from 'assets/logoHover.svg'
import LogoText from 'assets/logoText.svg'

interface HomePageProps {
  tab: string
  setTab: (tab: string) => void
}

const HomePage = ({ tab, setTab }: HomePageProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Page isCurrentTab={tab === 'home'} title={''}>
      <Flex
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          mb: '18px',
        }}
      >
        <Image
          src={isHovered ? LogoHover : Logo}
          height="40"
          width="40"
          alt="logo"
        />
        <Image src={LogoText} height="50" width="auto" alt="logo text" />
      </Flex>
      {/* <InfoItem title={'Hide Debugging Notification Bar'}>
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
      </InfoItem> */}
      <InfoItem title={'What is Vytal?'}>
        Vytal does not change your IP address.
      </InfoItem>
      <InfoItem title={'Does Vytal change your IP address?'}>
        Vytal does not change your IP address. To change your IP address you
        will need a VPN or proxy.
      </InfoItem>
      <InfoItem title={'How to test the extension?'}>
        You can test and compare Vytal and other spoofing extensions on{' '}
        <Link variant="hover" href={`https://vytal.io/scan`} target="_blank">
          vytal.io
        </Link>
        .
      </InfoItem>
      <InfoItem title={'Support Us'}>
        If you like this extension and wish to support us you can{' '}
        <Link
          variant="hover"
          href={`https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=rate`}
          target="_blank"
        >
          rate the extension
        </Link>{' '}
        or{' '}
        <Link variant="hover" href={`https://vytal.io/donate`} target="_blank">
          donate
        </Link>
        .
      </InfoItem>
      <Box sx={{ width: '100%' }}>
        <Label htmlFor="type">Default Popup Page</Label>
        <Select
          name="type"
          id="type"
          // value={userAgentInfo}
          // onChange={changeUserAgentInfo}
          mb={'8px'}
        >
          {/* <option value="custom">Custom</option>
          {Object.keys(userAgents).map((key) => (
            <optgroup key={key} label={userAgents[key].title}>
              {userAgents[key].values.map((key: any) => (
                <option key={key.value} value={JSON.stringify(key)}>
                  {key.title}
                </option>
              ))}
            </optgroup>
          ))} */}
          <option>Home</option>
          <option>Location Data</option>
          <option>Other Settings</option>
        </Select>
      </Box>
    </Page>
  )
}

export default HomePage
