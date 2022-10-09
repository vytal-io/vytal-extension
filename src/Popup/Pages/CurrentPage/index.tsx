// import { Box } from 'theme-ui'
import Page from '../../Components/Page'

interface CurrentPageProps {
  tab: string
}

const CurrentPage = ({ tab }: CurrentPageProps) => {
  return (
    <Page isCurrentTab={tab === 'current'} title={'Current Info'}>
      hello
    </Page>
  )
}

export default CurrentPage
