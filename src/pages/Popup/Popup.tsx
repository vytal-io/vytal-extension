import React, { useState } from 'react'
import { ThemeProvider, Flex } from 'theme-ui'
import { theme } from '../../theme'
import { Home, MapPin, Globe, Command, List, ExternalLink } from 'react-feather'
import TabItem from './TabItem'
import LocationPage from './LocationPage'
import UserAgentPage from './UserAgentPage'
import WhitelistPage from './WhitelistPage'

const Popup = () => {
  const [tab, setTab] = useState('whitelist')

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '368px',
        }}
      >
        <Flex
          sx={{
            minWidth: '36px',
            backgroundColor: 'primary',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {/* <TabItem Icon={Home} onClick={() => setTab(0)} /> */}
          <TabItem
            Icon={MapPin}
            active={tab === 'location'}
            onClick={() => setTab('location')}
          />
          <TabItem
            Icon={Globe}
            active={tab === 'useragent'}
            onClick={() => setTab('useragent')}
          />
          {/* <TabItem Icon={Command} onClick={() => setTab(3)} /> */}
          <TabItem
            Icon={List}
            active={tab === 'whitelist'}
            onClick={() => setTab('whitelist')}
          />
          <TabItem
            Icon={ExternalLink}
            onClick={() => window.open('https://vytal.io')}
          />
        </Flex>
        <LocationPage tab={tab} />
        <UserAgentPage tab={tab} />
        <WhitelistPage tab={tab} />
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
