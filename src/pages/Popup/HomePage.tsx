import React, { useState, useEffect } from 'react'
import { Box, Flex, Button } from 'theme-ui'
import LocationInput from './LocationInput'
import ConfigurationSelect from './ConfigurationSelect'
import IPData from './IPData'
import getIP from '../../utils/getIP'
import { Power } from 'react-feather'

const LocationPage = () => {
  const [on, setOn] = useState(true)

  // useEffect(() => {
  //   chrome.storage.sync.get(['configuration', 'ipData'], (result) => {
  //     result.configuration && setConfiguration(result.configuration)
  //     if (result.ipData) {
  //       setIP(result.ipData)
  //     } else {
  //       Promise.resolve(getIP()).then((ipData) => setIP(ipData))
  //     }
  //   })
  // }, [])

  return (
    <Box
      sx={{
        m: '12px',
        width: '100%',
      }}
    >
      <Flex
        sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
      >
        <Button
          variant="power"
          onClick={() => {
            setOn(!on)
          }}
          sx={{
            bg: on ? 'green' : 'red',
            '&:hover': {
              bg: on ? 'greenDark' : 'redDark',
            },
            transition: 'background 0.25s',
          }}
        >
          <Box
            sx={{
              height: '108px',
              width: '100px',
              transform: on ? 'rotate(0deg)' : 'rotate(-180deg)',
              transition: 'transform 0.25s',
            }}
          >
            <Power size={100} />
          </Box>
        </Button>
      </Flex>
    </Box>
  )
}

export default LocationPage
