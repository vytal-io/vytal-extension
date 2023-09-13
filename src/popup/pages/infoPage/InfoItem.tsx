import { Box, Flex } from 'theme-ui'

interface InfoItemProps {
  title: string
  children: React.ReactNode
}

const InfoItem = ({ title, children }: InfoItemProps) => {
  return (
    <Box sx={{ mb: '12px' }}>
      <Flex sx={{ fontWeight: '700', mb: '2px' }}>{title}</Flex>
      {children}
    </Box>
  )
}

export default InfoItem
