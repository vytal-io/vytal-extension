import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react'
import configurations from '../../../utils/configurations'
import countryLocales from '../../../utils/countryLocales'
import detachDebugger from '../../../utils/detachDebugger'
import { Label, Input } from 'theme-ui'

interface LocationInputProps {
  name: string
  title: string
  // ip: any
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const LocationInput = ({
  name,
  title,
  // ip,
  value,
  setValue,
}: LocationInputProps) => {
  // const [value, setValue] = useState('')

  // useEffect(() => {
  //   if (configuration === 'none') {
  //     setValue('')
  //     chrome.storage.local.set({ [type]: '' })
  //   } else if (configuration === 'match') {
  //     if (ip) {
  //       const ipTypeValue =
  //         type === 'locale' ? countryLocales[ip.countryCode].locale : ip[type]
  //       setValue(ipTypeValue)
  //       chrome.storage.local.set({ [type]: ipTypeValue })
  //     }
  //   } else if (configuration === 'custom') {
  //     chrome.storage.local.get([type], (storage) => {
  //       storage[type] && setValue(storage[type])
  //     })
  //   } else if (configuration !== 'default') {
  //     setValue(configurations[configuration][type])
  //     chrome.storage.local.set({ [type]: configurations[configuration][type] })
  //   }
  // }, [name, value])

  const changeTextValue = (e: ChangeEvent<HTMLInputElement>) => {
    // detachDebugger()
    // chrome.storage.local.set({ [type]: e.target.value })
    setValue(e.target.value)
    // chrome.storage.local.set({ configuration: 'custom' })
    // setConfiguration('custom')
  }

  return (
    <>
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} value={value} onChange={changeTextValue} />
    </>
  )
}

export default LocationInput
