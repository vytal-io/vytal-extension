import { Dispatch, SetStateAction } from 'react'
import { Flex, Button, Text } from 'theme-ui'
import detachDebugger from '../../../utils/detachDebugger'
import getIp from '../../../utils/getIp'
import { ipData } from '../../../types'

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

interface IPDataProps {
  ip: any
  setIp: Dispatch<SetStateAction<ipData | undefined>>
}

const IpData = ({ ip, setIp }: IPDataProps) => {
  return (
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>{ip && `${ip.query} ${getFlagEmoji(ip.countryCode)}`}</Text>
      <Button
        onClick={() => {
          Promise.resolve(getIp()).then((ipData) => setIp(ipData))
          detachDebugger()
        }}
      >
        Reload
      </Button>
    </Flex>
  )
}

export default IpData
