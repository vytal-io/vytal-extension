import { Label, Checkbox } from 'theme-ui'

interface LocationPageProps {
  title: string
}

const SettingsCheckBox = ({ title }: LocationPageProps) => {
  return (
    <Label sx={{ mb: '8px' }}>
      <Checkbox defaultChecked={true} />
      {title}
    </Label>
  )
}

export default SettingsCheckBox
