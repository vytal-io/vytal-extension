import React, { useState, useEffect } from 'react'
import { Box, Label, Input, Select } from 'theme-ui'
import DataInput from './DataInput'

const LocationPage = () => {
  return (
    <div
      sx={{
        m: '12px',
        width: '100%',
      }}
    >
      <Box sx={{ fontSize: '20px', mb: '8px' }}>Location</Box>
      <Label htmlFor="configuration">Configuration</Label>
      <Select name="configuration" id="configuration" mb={'8px'}>
        <option>None</option>
        <option>Custom</option>
        <option>Match IP</option>
      </Select>
      <DataInput type="timezone" title="Timezone" />
      <DataInput type="locale" title="Locale" />
      <DataInput type="lat" title="Latitude" />
      <DataInput type="lon" title="Longitude" />
    </div>
  )
}

export default LocationPage
