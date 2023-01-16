import { Box, Link } from 'theme-ui'

interface VpnItemProps {
  url: string
  children: React.ReactNode
}

const VpnItem = ({ url, children }: VpnItemProps) => {
  return (
    <Link
      href={url}
      sx={{
        border: '1px solid',
        borderRadius: '4px',
        borderColor: 'grey',
        p: '16px',
        mb: '16px',
        display: 'block',
        textDecoration: 'none',
        color: 'text',
        '&:hover': {
          borderColor: 'primary',
        },
      }}
      target="_blank"
    >
      {children}
      <Box
        sx={{
          color: 'primaryDark',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Learn more
      </Box>
    </Link>
  )
}

export default VpnItem
