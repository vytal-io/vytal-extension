import React, { useState, useEffect } from 'react'

const Icon = ({ icon }: any) => {
  return (
    <div
      sx={{
        cursor: 'pointer',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        ':hover': {
          backgroundColor: '#8750A7',
        },
      }}
    >
      {icon}
    </div>
  )
}

export default Icon
