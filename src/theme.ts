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
      backgroundColor: 'body',
      color: 'text',
      fontSize: '18px',
      lineHeight: '22px',
      margin: '0',
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
    },
  },
  forms: {
    label: { width: 'auto' },
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
      p: '2px 8px',
      borderColor: 'grey',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      py: '3px',
      px: '8px',
      cursor: 'pointer',
      '&:hover': {
        bg: 'primaryDark',
      },
    },
    power: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: '12px',
      px: '16px',
      color: 'background',
      borderRadius: '50%',
      cursor: 'pointer',
      // '&:hover': {
      //   bg: 'primaryDark',
      // },
    },
    close: {
      cursor: 'pointer',
      color: 'text',
      p: 0,
      m: 0,
    },
  },
}
