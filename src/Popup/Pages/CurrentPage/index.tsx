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
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        Current Info
      </Box>
    </Box>
  )
}

export default CurrentPage
