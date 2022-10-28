import { Text } from 'theme-ui'

interface FooterLinkProps {
  link: string
  text: string
  hoverText: string
}

const FooterLink = ({ link, text, hoverText }: FooterLinkProps) => {
  return (
    <Text
      sx={{
        mb: '8px',
        fontSize: '11px',
        position: 'fixed',
        bottom: '0',
        cursor: 'pointer',
      }}
      onClick={() => window.open(`https://vytal.io/${link}`)}
    >
      {text}{' '}
      <Text
        sx={{
          color: 'primaryDark',
          ':hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {hoverText}
      </Text>
    </Text>
  )
}

export default FooterLink
