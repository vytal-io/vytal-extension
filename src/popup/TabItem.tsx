import React from 'react'
import { Button } from 'theme-ui'
interface IconProps {
  title: string
  Icon: React.ReactNode
  active?: boolean
  onClick: () => void
}

const TabItem = ({ title, Icon, onClick, active }: IconProps) => {
  return (
    <Button
      title={title}
      sx={{
        cursor: 'pointer',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'background',
        backgroundColor: active ? 'primaryDark' : 'primary',
        ':hover': {
          backgroundColor: 'primaryDark',
        },
      }}
      onClick={onClick}
    >
      {Icon}
    </Button>
  )
}

export default TabItem
