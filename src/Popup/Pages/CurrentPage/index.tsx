import { Box } from 'theme-ui'

interface CurrentPageProps {
  tab: string
}

const CurrentPage = ({ tab }: CurrentPageProps) => {
  return (
    <Box
      sx={{
        display: tab === 'current' ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '12px' }}>Current Info</Box>
    </Box>
  )
}

export default CurrentPage
