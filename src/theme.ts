import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    text: '#333333',
    background: '#FDFDFD',
    primary: '#a965d1',
    primaryDark: '#8750A7',
  },
  styles: {
    root: {
      backgroundColor: 'body',
      color: 'text',
      fontSize: '16px',
      lineHeight: '22px',
      margin: '0',
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
    },
  },
  forms: {
    label: {},
    input: {
      p: '2px 8px',
      mb: '8px',
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
    select: {
      p: '2px 8px',
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primaryDark',
        outline: 'none',
      },
    },
  },
}
