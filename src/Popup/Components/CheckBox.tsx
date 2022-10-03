import { Label, Checkbox } from 'theme-ui'

interface LocationPageProps {
  title: string
  onChange?: () => void
  checked?: boolean
}

const CheckBox = ({ title, onChange, checked }: LocationPageProps) => {
  return (
    <Label sx={{ mb: '8px' }}>
      <Checkbox onChange={onChange} checked={checked} />
      {title}
    </Label>
  )
}

export default CheckBox
