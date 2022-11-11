import { Box } from 'theme-ui'

const FooterLink = () => {
  return (
    <Box
      sx={{
        color: 'text',
        mb: '8px',
        fontSize: '11px',
        position: 'fixed',
        bottom: '0',
      }}
    >
      Vytal does not change your IP address. To change your IP address you will
      need a VPN or proxy.
    </Box>
  )
}

export default FooterLink
