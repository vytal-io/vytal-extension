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
          height: '390px',
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
            }}
          >
            Current tab won't be fully spoofed until after reload.
          </Text>
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
