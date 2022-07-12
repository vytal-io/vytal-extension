import React, { useState, useEffect } from 'react'
// import profiles from '../../utils/profiles'
// import countryLocales from '../../utils/countryLocales'
// import detachDebugger from '../../utils/detachDebugger'
import { Box, Label, Input, Select } from 'theme-ui'

interface DataInputProps {
  type: string
  title: string
  ip?: string
  profile?: string
  setProfile?: string
}

const DataInput = ({
  type,
  title,
  ip,
  profile,
  setProfile,
}: DataInputProps) => {
  // const [value, setValue] = useState('')

  // useEffect(() => {
  //   if (profile === 'none') {
  //     setValue('')
  //     chrome.storage.sync.set({ [type]: '' })
  //   } else if (profile === 'match') {
  //     if (ip) {
  //       const ipTypeValue =
  //         type === 'locale' ? countryLocales[ip.countryCode].locale : ip[type]
  //       setValue(ipTypeValue)
  //       chrome.storage.sync.set({ [type]: ipTypeValue })
  //     }
  //   } else if (profile === 'custom') {
  //     chrome.storage.sync.get([type], (result) => {
  //       result[type] && setValue(result[type])
  //     })
  //   } else if (profile !== 'default') {
  //     setValue(profiles[profile][type])
  //     chrome.storage.sync.set({ [type]: profiles[profile][type] })
  //   }
  // }, [ip, profile, type, value])

  // const changeTextValue = (e) => {
  //   detachDebugger()
  //   chrome.storage.sync.set({ [type]: e.target.value })
  //   setValue(e.target.value)
  //   chrome.storage.sync.set({ profile: 'custom' })
  //   setProfile('custom')
  // }

  return (
    <>
      <Label htmlFor={type}>{title}</Label>
      <Input name={type} />
    </>
  )
}

export default DataInput
