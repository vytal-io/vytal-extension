import React, { useState, useEffect } from 'react'

interface IconProps {
  icon: React.ReactNode
}

const Icon = ({ icon }: IconProps) => {
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
    >
      {icon}
    </div>
  )
}

export default Icon
