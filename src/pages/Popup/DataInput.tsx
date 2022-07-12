import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import configurations from '../../utils/configurations'
import countryLocales from '../../utils/countryLocales'
import detachDebugger from '../../utils/detachDebugger'
import { Label, Input } from 'theme-ui'

interface DataInputProps {
  type: string
  title: string
  ip: any
  configuration: string
  setConfiguration: Dispatch<SetStateAction<string>>
}

const DataInput = ({
  type,
  title,
  ip,
  configuration,
  setConfiguration,
}: DataInputProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (configuration === 'none') {
      setValue('')
      chrome.storage.sync.set({ [type]: '' })
    } else if (configuration === 'match') {
      if (ip) {
        const ipTypeValue =
          type === 'locale' ? countryLocales[ip.countryCode].locale : ip[type]
        setValue(ipTypeValue)
        chrome.storage.sync.set({ [type]: ipTypeValue })
      }
    } else if (configuration === 'custom') {
      chrome.storage.sync.get([type], (result) => {
        result[type] && setValue(result[type])
      })
    } else if (configuration !== 'default') {
      setValue(configurations[configuration][type])
      chrome.storage.sync.set({ [type]: configurations[configuration][type] })
    }
  }, [ip, configuration, type, value])

  const changeTextValue = (e: any) => {
    detachDebugger()
    chrome.storage.sync.set({ [type]: e.target.value })
    setValue(e.target.value)
    chrome.storage.sync.set({ configuration: 'custom' })
    setConfiguration('custom')
  }

  return (
    <>
      <Label htmlFor={type}>{title}</Label>
      <Input name={type} value={value} onChange={changeTextValue} />
    </>
  )
}

export default DataInput
