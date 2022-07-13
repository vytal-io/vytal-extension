import React from 'react'

interface IconProps {
  Icon: React.ElementType
  onClick: () => void
}

const TabItem = ({ Icon, onClick }: IconProps) => {
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
