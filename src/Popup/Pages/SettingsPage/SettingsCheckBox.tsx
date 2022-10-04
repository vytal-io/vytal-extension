import { Label, Checkbox } from 'theme-ui'

interface SystemPageProps {
  title: string
  onChange?: () => void
  checked?: boolean
}

const SettingsCheckBox = ({ title, onChange, checked }: SystemPageProps) => {
  return (
    <Label sx={{ mb: '8px' }}>
      <Checkbox onChange={onChange} checked={checked} />
      {title}
    </Label>
  )
}

export default SettingsCheckBox
