import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    text: '#333333',
    background: '#FDFDFD',
    primary: '#B77EEE',
    primaryDark: '#a55eea',
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
    },
  },
  forms: {
    label: { width: 'auto', alignItems: 'center' },
    input: {
      p: '2px 8px',
      mb: '8px',
      borderColor: 'grey',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
    select: {
      cursor: 'pointer',
      p: '2px 8px',
      borderColor: 'grey',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
    radio: {
      cursor: 'pointer',
    },
  },
  buttons: {
    primary: {
      borderRadius: 0,
      color: 'background',
      bg: 'primary',
      py: '3px',
      px: '8px',
      cursor: 'pointer',
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
  },
}
