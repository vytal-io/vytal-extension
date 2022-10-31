import { ChangeEvent } from 'react'
import { Label, Checkbox } from 'theme-ui'

interface CheckBoxProps {
  title: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

const CheckBox = ({ title, onChange, checked }: CheckBoxProps) => {
  return (
    <Label sx={{ mb: '8px' }}>
      <Checkbox onChange={onChange} checked={checked} />
      {title}
    </Label>
  )
}

export default CheckBox
