import React from 'react'

interface IconProps {
  Icon: React.ElementType
  active?: boolean
  onClick: () => void
}

const TabItem = ({ Icon, onClick, active }: IconProps) => {
  return (
    <div
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
    </div>
  )
}

export default TabItem
