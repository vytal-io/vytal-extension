import { ChangeEvent } from 'react'
import { Box, Label, Radio, Text } from 'theme-ui'

interface RadioButtonProps {
  value: string
  name: string
  description: string
  webRtcPolicy: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton = ({
  value,
  name,
  description,
  webRtcPolicy,
  onChange,
}: RadioButtonProps) => {
  return (
    <>
      <Label sx={{ cursor: 'pointer' }}>
        <Radio
          name="webRtcPolicy"
          value={value}
          onChange={onChange}
          checked={webRtcPolicy === value}
        />
        <Text sx={{ fontWeight: '700' }}>{name}</Text>
      </Label>
      <Box sx={{ ml: '32px', mb: '12px', fontSize: '12px' }}>{description}</Box>
    </>
  )
}

export default RadioButton
