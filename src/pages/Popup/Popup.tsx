import React, { useState, useEffect } from 'react'
import { ThemeProvider, Flex } from 'theme-ui'
import { theme } from '../../theme'
import { Home, MapPin, Globe, Users, List } from 'react-feather'
import TabItem from './TabItem'
import Page from './Page'

const Popup = () => {
  const [tab, setTab] = useState(0)
  useEffect(() => {
    console.log(tab)
  }, [tab])
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '365px',
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
          <TabItem Icon={Home} onClick={() => setTab(0)} />
          <TabItem Icon={MapPin} onClick={() => setTab(1)} />
          <TabItem Icon={Globe} onClick={() => setTab(2)} />
          <TabItem Icon={List} onClick={() => setTab(3)} />
          <TabItem Icon={Users} onClick={() => setTab(4)} />
        </Flex>
        <Page tab={tab} />
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
