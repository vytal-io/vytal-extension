import React, { Dispatch, SetStateAction } from 'react'
import { Label, Select } from 'theme-ui'
import configurations from '../../utils/configurations'
import detachDebugger from '../../utils/detachDebugger'

interface ConfigurationSelectProps {
  title: string
  configuration: string
  setConfiguration: Dispatch<SetStateAction<string>>
}

const UserAgentSelect = ({
  title,
  configuration,
  setConfiguration,
}: ConfigurationSelectProps) => {
  const changeConfiguration = (e: any) => {
    detachDebugger()
    chrome.storage.sync.set({
      configuration: e.target.value,
    })
    setConfiguration(e.target.value)
  }

  return (
    <>
      <Label htmlFor="configuration">{title}</Label>
      <Select
        name="configuration"
        id="configuration"
        value={configuration}
        onChange={changeConfiguration}
        mb={'8px'}
      >
        <option value="none">None</option>
        <option value="match">Match IP</option>
        <option value="custom">Custom</option>
        <optgroup label="Locations">
          {Object.keys(configurations).map((key) => (
            <option value={key} key={key}>
              {configurations[key].name}
            </option>
          ))}
        </optgroup>
      </Select>
    </>
  )
}

export default UserAgentSelect
