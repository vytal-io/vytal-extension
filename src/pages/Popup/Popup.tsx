import React, { useState } from 'react'
import { ThemeProvider, Flex, Box, Text } from 'theme-ui'
import { theme } from '../../theme'
import { MapPin, Globe, ExternalLink } from 'react-feather'
import TabItem from './TabItem'
import LocationPage from './LocationPage'
import UserAgentPage from './UserAgentPage'

const Popup = () => {
  const [tab, setTab] = useState('location')

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '410px',
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
          <TabItem
            Icon={ExternalLink}
            onClick={() => window.open('https://vytal.io')}
          />
        </Flex>
        <Box sx={{ m: '12px', width: '100%' }}>
          <LocationPage tab={tab} />
          <UserAgentPage tab={tab} />
          <Text
            sx={{
              mb: '8px',
              fontSize: '11px',
              position: 'fixed',
              bottom: '0',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://vytal.io')}
          >
            Vytal does not change your IP address. To change your IP address you
            will need to use a VPN such as
            <Text sx={{ color: 'blue', textDecoration: 'underline' }}>
              Proton VPN
            </Text>
            .
          </Text>
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
