import React from 'react'
import Navbar from './Navbar'
import IpSettings from './ipSettings'

const Popup = () => {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          padding: '10px',
        }}
      >
        <IpSettings />
      </div>
    </div>
  )
}

export default Popup
