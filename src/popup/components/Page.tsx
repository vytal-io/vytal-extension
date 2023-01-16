import { Box } from 'theme-ui'

interface PageProps {
  isCurrentTab: boolean
  title: string
  children: React.ReactNode
}

const Page = ({ isCurrentTab, title, children }: PageProps) => {
  return (
    <Box
      sx={{
        display: isCurrentTab ? 'block' : 'none',
      }}
    >
      <Box sx={{ fontSize: '21px', mb: '12px', fontWeight: '600' }}>
        {title}
      </Box>
      {children}
    </Box>
  )
}

export default Page
