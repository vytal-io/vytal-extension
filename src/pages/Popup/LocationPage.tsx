import React, { useState, useEffect } from 'react'
import { Box, Label, Input, Select } from 'theme-ui'

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
      <Label htmlFor="timezone">Timezone</Label>
      <Input name="timezone" id="username" />
      <Label htmlFor="locale">Locale</Label>
      <Input name="locale" id="locale" />
      <Label htmlFor="latitude">Latitude</Label>
      <Input name="latitude" id="latitude" />
      <Label htmlFor="longitude">Longitude</Label>
      <Input name="longitude" id="longitude" />
    </div>
  )
}

export default LocationPage
