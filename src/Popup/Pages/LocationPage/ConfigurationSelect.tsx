import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Label, Select } from 'theme-ui'
import configurations from '../../../utils/configurations'
import detachDebugger from '../../../utils/detachDebugger'

interface ConfigurationSelectProps {
  configuration: string
  setConfiguration: Dispatch<SetStateAction<string>>
}

const ConfigurationSelect = ({
  configuration,
  setConfiguration,
}: ConfigurationSelectProps) => {
  const changeConfiguration = (e: ChangeEvent<HTMLSelectElement>) => {
    detachDebugger()
    chrome.storage.local.set({
      configuration: e.target.value,
    })
    setConfiguration(e.target.value)
  }

  return (
    <>
      <Label htmlFor="configuration">Configuration</Label>
      <Select
        name="configuration"
        id="configuration"
        value={configuration}
        onChange={changeConfiguration}
        mb={'8px'}
      >
        <option value="custom">Custom</option>
        {Object.keys(configurations).map((key) => (
          <option value={key} key={key}>
            {configurations[key].name}
          </option>
        ))}
      </Select>
    </>
  )
}

export default ConfigurationSelect
