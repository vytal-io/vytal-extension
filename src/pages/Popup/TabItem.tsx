import React from 'react'
import { Button } from 'theme-ui'
interface IconProps {
  Icon: React.ElementType
  active?: boolean
  onClick: () => void
}

const TabItem = ({ Icon, onClick, active }: IconProps) => {
  return (
    <Button
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
      <Icon size={20} />
    </Button>
  )
}

export default TabItem
