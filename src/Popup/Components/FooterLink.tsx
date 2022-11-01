import { Link, Text } from 'theme-ui'

interface FooterLinkProps {
  link: string
  text: string
  hoverText: string
}

const FooterLink = ({ link, text, hoverText }: FooterLinkProps) => {
  return (
    <Link variant="footer" href={`https://vytal.io/${link}`} target="_blank">
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
    </Link>
  )
}

export default FooterLink
