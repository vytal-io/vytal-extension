import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    text: '#333333',
    background: '#FDFDFD',
    primary: '#a55eea',
    primaryDark: '#9454d2',
    red: '#fc5c65',
    redDark: '#e2525a',
    green: '#26de81',
    greenDark: '#22c774',
    grey: '#989898',
  },
  styles: {
    root: {
      backgroundColor: 'background',
      color: 'text',
      fontSize: '18px',
      lineHeight: '22px',
      margin: '0',
      li: {
        mb: '4px',
      },
    },
  },
  forms: {
    label: { width: 'auto', alignItems: 'center' },
    input: {
      p: '4px 8px',
      mb: '8px',
      borderColor: 'grey',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
    select: {
      cursor: 'pointer',
      p: '4px 8px',
      borderColor: 'grey',
      '&:hover': {
        borderColor: 'primaryDark',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    radio: {
      cursor: 'pointer',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      py: '6px',
      px: '8px',
      cursor: 'pointer',
      borderRadius: '0',
      width: '100%',
      display: 'block',
      '&:hover': {
        bg: 'primaryDark',
      },
    },
    close: {
      cursor: 'pointer',
      color: 'text',
      p: 0,
      m: 0,
    },
    text: {
      all: 'unset',
      cursor: 'pointer',
      color: 'primaryDark',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  links: {
    footer: {
      color: 'text',
      textDecoration: 'none',
    },
    hover: {
      color: 'primaryDark',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  images: {
    vpnLogo: {
      height: '28px',
      width: 'auto',
      mb: '6px',
    },
  },
}
