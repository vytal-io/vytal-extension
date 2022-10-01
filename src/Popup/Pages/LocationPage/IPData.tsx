import { Dispatch, SetStateAction } from 'react'
import { Flex, Button, Text } from 'theme-ui'
import detachDebugger from '../../../utils/detachDebugger'
import getIP from '../../../utils/getIP'

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

interface IPDataProps {
  ip: any
  setIP: Dispatch<SetStateAction<null>>
}

const IPData = ({ ip, setIP }: IPDataProps) => {
  return (
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>{ip && `${ip.query} ${getFlagEmoji(ip.countryCode)}`}</Text>
      <Button
        onClick={() => {
          Promise.resolve(getIP()).then((ipData) => setIP(ipData))
          detachDebugger()
        }}
      >
        Reload
      </Button>
    </Flex>
  )
}

export default IPData
